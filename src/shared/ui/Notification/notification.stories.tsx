import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationUI } from './notification';

const meta = {
	title: 'Shared/UI/NotificationUI',
	component: NotificationUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof NotificationUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Notification: Story = {
	args: {
		titleText: 'Николай принял ваш обмен',
		text: 'Перейдите в профиль, чтобы обсудить детали',
		date: '2025-07-24',
	},

	render: (args) => (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<NotificationUI {...args} />
		</div>
	),
};
