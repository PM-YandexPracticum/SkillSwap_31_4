import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownCategory } from './DropdownCategory';
import type { Option } from '../Dropdown/MultiSelectDropdown/type';

const meta: Meta<typeof DropdownCategory> = {
	title: 'Shared/UI/DropdownCategory',
	component: DropdownCategory,
	tags: ['autodocs'],
	parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof DropdownCategory>;

export const Default: Story = {
	render: () => {
		const [isChecked, setIsChecked] = useState(false);
		const [options, setOptions] = useState<Option[]>([
			{ text: 'Английский', id: 'en', checked: false },
			{ text: 'Испанский', id: 'es', checked: false },
			{ text: 'Французский', id: 'fr', checked: false },
			{ text: 'Немецкий', id: 'de', checked: false },
			{ text: 'Китайский', id: 'zh', checked: false },
		]);

		//раскрытие/сокрытие списка зависит от состояния чекбокса
		const [isOpen, setIsOpen] = useState(false);

		const handleCheckboxChange = () => {
			setIsChecked((prev) => !prev);
			setIsOpen((prev) => !prev); // при переключении чекбокса раскрываем/закрываем дропдаун
		};

		const handleSelect = (value: string) => {
			setOptions((prev) =>
				prev.map((opt) =>
					opt.id === value ? { ...opt, checked: !opt.checked } : opt
				)
			);
		};

		return (
			<div>
				<DropdownCategory
					isChecked={isChecked}
					onChange={handleCheckboxChange}
					options={options}
					onSelect={handleSelect}
					displayText='Иностранный язык'
					variant='no-border'
					isOpen={isOpen}
				/>
			</div>
		);
	},
};
