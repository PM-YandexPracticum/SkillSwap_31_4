import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeToggleButton } from '@ui';

const meta = {
	title: 'Shared/UI/ThemeToggleButton',
	component: ThemeToggleButton,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ThemeToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleTheme: Story = {};
