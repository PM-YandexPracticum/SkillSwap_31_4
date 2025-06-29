import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownBaseUI } from './DropdownBase';

const meta: Meta<typeof DropdownBaseUI> = {
	title: 'Shared/UI/Dropdown/DropdownBaseUI',
	component: DropdownBaseUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DropdownBaseUI>;

export default meta;

type Story = StoryObj<typeof DropdownBaseUI>;

export const Default: Story = {
	render: (args) => {
		const [selectedOption, setSelectedOption] = useState<string | undefined>();
		const [isOpen, setIsOpen] = useState(false);
		const selectedOptionText = args.options.find(
			(opt) => opt.value === selectedOption
		)?.text;

		return (
			<div style={{ width: 436, padding: 20 }}>
				<DropdownBaseUI
					{...args}
					idDropdown='baseDrop'
					selectedOption={selectedOption}
					displayText={selectedOptionText}
					isOpen={isOpen}
					onToggle={() => setIsOpen((prev) => !prev)}
					onSelect={(value) => {
						setSelectedOption(value);
						setIsOpen(false);
					}}
				/>
			</div>
		);
	},
	args: {
		label: 'Пол',
		placeholder: 'Не указан',
		options: [
			{ value: '1', text: 'Не указан' },
			{ value: '2', text: 'Женский' },
			{ value: '3', text: 'Мужской' },
		],
	},
};
