import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'Shared/UI/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		error: { control: 'text' },
		variant: {
			control: 'select',
			options: ['default', 'password', 'editable'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		label: 'Имя',
		placeholder: 'Введите ваше имя',
	},
};

export const Password: Story = {
	args: {
		label: 'Пароль',
		placeholder: 'Придумайте надежный пароль',
		type: 'password',
		variant: 'password',
	},
};

export const Editable: Story = {
	args: {
		label: 'Почта',
		value: 'example@gmail.com',
		variant: 'editable',
	},
};
