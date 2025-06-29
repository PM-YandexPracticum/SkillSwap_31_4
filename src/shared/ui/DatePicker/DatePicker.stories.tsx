import type { Meta, StoryObj } from '@storybook/react-vite';

import { DatePickerUI } from './DatePicker';

const meta = {
	title: 'Shared/UI/DatePicker',
	component: DatePickerUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DatePickerUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	render: (args) => <DatePickerUI {...args} />,
	args: {
		title: 'Дата рождения',
		onInput: (data) => console.log(data),
		error: '',
		maxDate: new Date(),
	},
};

/* История с ошибкой*/
export const WithError: Story = {
	render: (args) => <DatePickerUI {...args} />,
	args: {
		title: 'Дата рождения',
		onInput: (data) => console.log(data),
		maxDate: new Date(),
		error: 'Ошибка',
	},
};
