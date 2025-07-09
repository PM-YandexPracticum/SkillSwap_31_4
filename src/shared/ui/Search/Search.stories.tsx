import React, { useEffect, useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Search } from '@ui';
import type { TSkill, TSkillsResponse } from '../../lib/types/skill.ts';

const meta = {
	title: 'Shared/UI/Search',
	component: Search,
} satisfies Meta<typeof Search>;

export default meta;

const Template: StoryFn<typeof Search> = (args) => {
	const [value, setValue] = React.useState('');
	const [skills, setSkills] = useState<TSkill[]>([]);

	useEffect(() => {
		fetch('https://skills-api.lukumka-dev.ru/api/skills/')
			.then((res) => res.json())
			.then((data) => {
				const allSkills: TSkill[] = data.categories.flatMap(
					(category: TSkillsResponse) => category.skills
				);
				setSkills(allSkills);
			});
	}, []);

	return (
		<div>
			<Search {...args} value={value} onChange={setValue} options={skills} />
		</div>
	);
};
export const Default = Template.bind({});
