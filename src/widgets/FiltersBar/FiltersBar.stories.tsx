import type { Meta, StoryObj } from '@storybook/react-vite';
import { FiltersBar } from './FiltersBar';
import { useEffect, useState } from 'react';
import type { SkillOption, CityItem } from './type';

interface User {
	city: string;
	canTeach: {
	  _id: string;
	  name: string;
	  categoryName: string;
	}[];
  }

const meta: Meta<typeof FiltersBar> = {
  title: 'widgets/FiltersBar',
  component: FiltersBar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof FiltersBar>;

const transformData = (users: User[]) => {
	const categoriesMap = new Map<string, string>(); // categoryName -> categoryId
	const skillsMap = new Map<string, SkillOption>(); // все категории и подкатегории(скилы)
	const citySet = new Set<string>(); //все города

	let categoryCounter = 1; //для генерации уникальных айди

	users.forEach(user => { //добавляем город каждого пользователя в citySet
		citySet.add(user.city);

		user.canTeach.forEach (skill => { //для каждого навыка, которым может обучать пользователь - сохраняем имя категории
			const categoryName = skill.categoryName;

			//создаём категорию, если её ещё нет
			if (!categoriesMap.has(categoryName)) {
				const categoryId = `cat-${categoryCounter++}`;//уник айди категории
				categoriesMap.set(categoryName, categoryId);

				skillsMap.set(categoryId, {
					id: categoryId,  
					parentId: categoryId, 
					text: categoryName,
					checked: false,
					isOpen: false,
				});
			}

			const categoryId = categoriesMap.get(categoryName)!; //получаем айди категории, к которой относится текущий навык

			// добавляем сам навык как "ребёнка" категории
			skillsMap.set(skill._id, {
				id: skill._id,
				parentId: categoryId, //чтобы попадал в filterChild
				text: skill.name,
				checked: false,
				isOpen: false,
			});
		});
	});

	// итоговые списки
	const skillsList = Array.from(skillsMap.values()); //получаем все категории и подкатегории
	const cityList: CityItem[] = Array.from(citySet).map((city, i) => ({ //получаем все города
		id: i.toString(),
		city,
	}));

	return { skillsList, cityList }; 
};

export const FiltersBarDefault: Story = {
  render: () => {
    const [skills, setSkills] = useState<SkillOption[]>([]); 
    const [cities, setCities] = useState<CityItem[]>([]);

    useEffect(() => {
      (async () => {
        const res = await fetch('https://skills-api.lukumka-dev.ru/api/users/');
        const data = await res.json();

        const { skillsList, cityList } = transformData(data.users as User[])
        setSkills(skillsList);
        setCities(cityList);
      })();
    }, []);

    return (
      <div style={{ backgroundColor: 'gray', width: 500, height: 1200, padding: 100 }}>
        <FiltersBar skills={skills} cities={cities} />
      </div>
    );
  },
};