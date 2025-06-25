import type { Meta, StoryObj } from '@storybook/react-vite';

import { DatePickerUI } from './DatePicker';

const meta = {
	/* Название компонента и путь, по которому его нужно отобразить на витрине */
	title: 'components/Date Picker',

	/* Передаём сам компонент */
	component: DatePickerUI,

	/* Тег autodocs просит Storybook сгенерировать отдельную историю с документацией компонента */
	tags: ['autodocs'],

	/* satisfies помогает точнее определить тип */
} satisfies Meta<typeof DatePickerUI>;

export default meta;
type Story = StoryObj<typeof meta>;

/* История с компонентом без ошибок */
export const Base: Story = {
	/* Для React-компонентов args === props */
	args: {
		title: 'Дата рождения',
		onInput: (data) => console.log(data),
		error: '',
		maxDate: new Date(),
	},
};

/* История с ошибкой*/
export const WithError: Story = {
	args: {
		title: 'Дата рождения',
		onInput: (data) => console.log(data),
		error: 'Ошибка',
		maxDate: new Date(),
	},
};
