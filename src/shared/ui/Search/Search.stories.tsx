import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Search } from './Search';

const meta = {
	title: 'Shared/UI/Search',
	component: Search,
} satisfies Meta<typeof Search>;

export default meta;

const options = [
	'Маркетинг и реклама',
	'Продажи и переговоры',
	'Личный бренд',
	'Резюме и собеседование',
	'Тайм-менеджмент',
	'Проектное управление',
	'Предпринимательство',
	'Английский',
	'Французский',
	'Испанский',
	'Немецкий',
	'Китайский',
	'Японский',
	'Подготовка к экзаменам (IELTS, TOEFL)',
	'Уборка и организация',
	'Домашние финансы',
	'Приготовление еды',
	'Домашние растения',
	'Ремонт',
	'Хранение вещей',
	'Рисование и иллюстрация',
	'Фотография',
	'Видеомонтаж',
	'Музыка и звук',
	'Актёрское мастерство',
	'Креативное письмо',
	'Арт-терапия',
	'Декор и DIY',
	'Личностное развитие',
	'Навыки обучения',
	'Когнитивные техники',
	'Скорочтение',
	'Навыки преподавания',
	'Коучинг',
	'Йога и медитация',
	'Питание и ЗОЖ',
	'Ментальное здоровье',
	'Осознанность',
	'Физические тренировки',
	'Сон и восстановление',
	'Баланс жизни и работы',
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
