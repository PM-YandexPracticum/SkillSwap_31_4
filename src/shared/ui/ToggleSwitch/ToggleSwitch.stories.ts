import type { Meta, StoryObj } from '@storybook/react-vite';

import { ToggleSwitch } from '@ui';

const meta = {
	title: 'Shared/UI/ToggleSwitch',
	component: ToggleSwitch,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Switch: Story = {};
