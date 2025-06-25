import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Search } from './Search';

const meta = {
	title: 'Shared/Search',
	component: Search,
} satisfies Meta<typeof Search>;

export default meta;

const Template: StoryFn<typeof Search> = (args) => {
	const [value, setValue] = React.useState('');

	return <Search {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Искать навык',
};
