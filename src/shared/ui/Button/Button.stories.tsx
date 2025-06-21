import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonUI } from './Button.tsx';

const meta = {
	title: 'Shared/UI/Button',
	component: ButtonUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ButtonUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
	args: {
		onClick: () => alert('Primary Button Clicked'),
		color: 'primary',
		size: 'large',
		text: 'Primary',
		isDisabled: false,
	},
};
