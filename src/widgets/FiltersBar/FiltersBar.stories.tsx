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
	wantsToLearn: {
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

	const processSkills = (skills: User['canTeach'] | User['wantsToLearn']) => {
		skills.forEach(skill => {
			const categoryName = skill.categoryName;

			// Если категория еще не добавлена — добавляем
			if (!categoriesMap.has(categoryName)) {
				const categoryId = `cat-${categoryCounter}`;
				categoryCounter += 1;
				categoriesMap.set(categoryName, categoryId);

				skillsMap.set(categoryId, {
					id: categoryId,
					parentId: categoryId, // родитель сам себе
					text: categoryName,
					checked: false,
					isOpen: false,
				});
			}

			const categoryId = categoriesMap.get(categoryName)!;

			// Навык как дочерний элемент категории
			if (!skillsMap.has(skill._id)) {
				skillsMap.set(skill._id, {
					id: skill._id,
					parentId: categoryId,
					text: skill.name,
					checked: false,
					isOpen: false,
				});
			}
		});
	};

	// Обход всех пользователей
	users.forEach(user => {
		citySet.add(user.city);
		processSkills(user.canTeach);
		processSkills(user.wantsToLearn);
	});

	const skillsList = Array.from(skillsMap.values());

	const cityList: CityItem[] = Array.from(citySet).map((city, i) => ({
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