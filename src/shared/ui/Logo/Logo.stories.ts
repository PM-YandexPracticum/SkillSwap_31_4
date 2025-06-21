import type { Meta, StoryObj } from '@storybook/react-vite';

import { Logo } from '@ui';

const meta = {
	title: 'Shared/UI/Logo',
	component: Logo,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLogo: Story = {};
