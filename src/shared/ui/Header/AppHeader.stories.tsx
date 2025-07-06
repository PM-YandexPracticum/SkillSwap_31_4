import type { Meta } from '@storybook/react-vite';

import { useEffect, useState } from 'react';
import type { TCategoryWithSkills, TSkill } from '../../lib/types/skill.ts';
import type { StoryFn } from '@storybook/react';
import type { TUser } from '../../lib/types/user.ts';
import { AppHeaderUI } from './AppHeader.tsx';

const meta = {
	title: 'Shared/UI/Header',
	component: AppHeaderUI,
	argTypes: {
		isModal: {
			control: 'boolean',
		},
		isAuth: {
			control: 'boolean',
		},
		categories: { table: { disable: true } },
		user: { table: { disable: true } },
		searchValue: { table: { disable: true } },
		searchOptions: { table: { disable: true } },
		handleLoginButtonClick: { table: { disable: true } },
		handleRegisterButtonClick: { table: { disable: true } },
		handleCloseButtonClick: { table: { disable: true } },
		handleSkillTitleClick: { table: { disable: true } },
		handleSkillTagClick: { table: { disable: true } },
	},
} satisfies Meta<typeof AppHeaderUI>;

export default meta;

const Template: StoryFn<typeof AppHeaderUI> = (args) => {
	const [categories, setCategories] = useState<TCategoryWithSkills[]>([]);
	const [user, setUser] = useState<TUser | null>(null);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		fetch('https://skills-api.lukumka-dev.ru/api/skills/')
			.then((res) => res.json())
			.then((data) => setCategories(data.categories));
	}, []);

	useEffect(() => {
		fetch('https://skills-api.lukumka-dev.ru/api/users/')
			.then((res) => res.json())
			.then((data) => {
				console.log(data.users[1]);
				setUser(data.users[1]);
			});
	}, []);
	const allSkills: TSkill[] = [];
	categories.forEach((category: TCategoryWithSkills) => {
		allSkills.push(...category.skills);
	});

	const handleRegisterButtonClick = () => {
		alert('Register button clicked!');
	};

	const handleLoginButtonClick = () => {
		alert('Login button clicked!');
	};

	const handleCloseButtonClick = () => {
		alert('Close button clicked!');
	};

	const handleSkillTitleClick = (skills: TCategoryWithSkills) => {
		alert(`Skill title clicked: ${JSON.stringify(skills)}`);
	};

	const handleSkillTagClick = (skill: TSkill) => {
		alert(`Skill tag clicked: ${JSON.stringify(skill)}`);
	};

	if (!user || !categories.length) return <div>Loading...</div>;

	return (
		<AppHeaderUI
			{...args}
			categories={categories}
			user={user}
			searchOptions={allSkills}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			handleRegisterButtonClick={handleRegisterButtonClick}
			handleLoginButtonClick={handleLoginButtonClick}
			handleCloseButtonClick={handleCloseButtonClick}
			handleSkillTitleClick={handleSkillTitleClick}
			handleSkillTagClick={handleSkillTagClick}
		/>
	);
};

export const Dynamic = Template.bind({});
Dynamic.args = {
	isModal: true,
	isAuth: false,
};
