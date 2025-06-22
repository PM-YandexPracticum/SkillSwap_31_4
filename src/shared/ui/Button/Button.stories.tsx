import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonUI } from './Button';

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
		width: '200px',
		text: 'Primary',
		isDisabled: false,
	},

	render: (args) => (
		<div style={{ width: '400px', display: 'flex', justifyContent: 'center' }}>
			<ButtonUI {...args} />
		</div>
	),
};
