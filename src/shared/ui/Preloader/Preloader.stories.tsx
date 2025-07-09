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

type Story = StoryObj<typeof Preloader>;

export const Default: Story = {
	render: () => (
		<div style={{ width: 50, padding: 50 }}>
			<Preloader isAbsolute={false} />
		</div>
	),
};

export const Absolute: Story = {
	render: () => <Preloader isAbsolute />,
};
