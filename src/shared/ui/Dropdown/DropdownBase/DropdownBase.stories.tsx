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
					isAbsolute={true}
					selectedOption={selectedOption}
					displayText={selectedOptionText}
					isOpen={isOpen}
					onToggle={() => setIsOpen((prev) => !prev)}
					onSelect={(value) => {
						setSelectedOption(value);
						setIsOpen(false);
						const selectedOptionObj = args.options.find(
							(opt) => opt.value === value
						);
						console.log('Выбранный объект:', selectedOptionObj);
					}}
				/>
			</div>
		);
	},
	args: {
		label: 'Пол',
		placeholder: 'Не указан',
		options: [
			{ value: 'notGender', text: 'Не указан' },
			{ value: 'Women<3', text: 'Женский' },
			{ value: 'Men', text: 'Мужской' },
		],
	},
};
