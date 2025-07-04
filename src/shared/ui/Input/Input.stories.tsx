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
		multiline: { control: 'boolean' },
		rows: { control: 'number' },
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

export const Textarea: Story = {
	args: {
		label: 'Описание',
		placeholder: 'Введите описание...',
		multiline: true,
		rows: 4,
	},
};

export const EditableTextarea: Story = {
	args: {
		label: 'О себе',
		value:
			'Люблю учиться новому, особенно если это можно делать за чаем и в пижаме. Всегда готова пообщаться и обменяться чем-то интересным!',
		variant: 'editable',
		multiline: true,
		rows: 4,
	},
};
