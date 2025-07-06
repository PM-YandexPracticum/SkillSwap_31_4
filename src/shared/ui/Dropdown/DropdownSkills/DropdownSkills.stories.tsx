import type { Meta } from '@storybook/react-vite';

import { DropdownSkillsUI } from '@ui';
import type { TSkill, TSkillsResponse } from '../../../lib/types/skill.ts';
import { useEffect, useState } from 'react';

const meta = {
	title: 'Shared/UI/Dropdown/DropdownSkills',
	component: DropdownSkillsUI,

	decorators: [
		(Story) => (
			<div style={{ paddingLeft: '300px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof DropdownSkillsUI>;

export default meta;

const SkillTagsWithFetch = () => {
	const [skills, setSkills] = useState(null);
	const handleTagClick = (skill: TSkill) => {
		alert(`Вы кликнули по ${skill.name}`);
	};
	const handleTitleClick = (items: TSkillsResponse) => {
		alert(`Вы кликнули по ${items.category.name}`);
	};
	useEffect(() => {
		fetch('https://skills-api.lukumka-dev.ru/api/skills/')
			.then((res) => res.json())
			.then((data) => setSkills(data.categories));
	}, []);

	if (!skills) return <div>Loading...</div>;
	return (
		<DropdownSkillsUI
			skillsData={skills}
			onTagClick={handleTagClick}
			onTitleClick={handleTitleClick}
		/>
	);
};

export const Dynamic = {
	render: () => <SkillTagsWithFetch />,
};
