import type { Meta, StoryObj } from '@storybook/react-vite';
import { Preloader } from './Preloader';

const meta = {
	title: 'Shared/UI/Preloader',
	component: Preloader,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Preloader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationButtonUI: Story = {
	render: () => <Preloader />,
};
