import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
	title: 'Shared/UI/Radio',
	component: Radio,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
	render: (args) => {
		// Выбор первой опции по умолчанию
		const [selected, setSelected] = useState(
			() => args.options[0]?.value ?? ''
		);

		return (
			<div style={{ width: 300 }}>
				<Radio {...args} value={selected} onChange={setSelected} />
			</div>
		);
	},
	args: {
		nameRadio: 'gender',
		options: [
			{ value: 'all', label: 'Все' },
			{ value: 'women', label: 'Женский' },
			{ value: 'men', label: 'Мужской' },
		],
	},
};
