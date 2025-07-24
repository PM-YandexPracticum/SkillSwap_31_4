import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationButton } from './NotificationButton';

const meta = {
	title: 'Shared/UI/NotificationButton',
	component: NotificationButton,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationButtonUI: Story = {
	args: {
		onClick: () => alert('NotificationButton Clicked'),
		hasNotification: false,
	},

	render: (args) => (
		<div style={{ width: '20px', display: 'flex', justifyContent: 'center' }}>
			<NotificationButton {...args} />
		</div>
	),
};
