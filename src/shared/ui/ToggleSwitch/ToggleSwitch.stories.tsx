import type { Meta, StoryObj } from '@storybook/react-vite';

import { ToggleSwitch } from '@ui';
import { useState } from 'react';

const meta = {
	title: 'Shared/UI/ToggleSwitch',
	component: ToggleSwitch,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

export const Switch = {
	render: () => {
		const [isOn, setIsOn] = useState(false);
		return (
			<div>
				<ToggleSwitch checked={isOn} onChange={() => setIsOn(!isOn)} />
			</div>
		);
	},
};
