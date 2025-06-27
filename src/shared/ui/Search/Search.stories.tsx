import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Search } from './Search';

const meta = {
	title: 'Shared/UI/Search',
	component: Search,
} satisfies Meta<typeof Search>;

export default meta;

const options = [
	'Москва',
	'Ростов-на-Дону',
	'Омск',
	'Мурманск',
	'Волгоград',
	'Рязань',
	'Минск',
	'Махачкала',
	'Анапа',
	'Сочи',
	'Севастополь',
];

const Template: StoryFn<typeof Search> = (args) => {
	const [value, setValue] = React.useState('');

	return (
		<div>
			<Search {...args} value={value} onChange={setValue} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Введите город',
	options,
	onSelect: (option: string) => {
		console.log('Выбран элемент:', option);
	},
};
