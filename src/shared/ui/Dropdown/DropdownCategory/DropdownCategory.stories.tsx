import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownCategoryUI } from './DropdownCategory';
import type { Option } from '../MultiSelectDropdown/type';

const meta: Meta<typeof DropdownCategoryUI> = {
	title: 'Shared/UI/Dropdown/DropdownCategory',
	component: DropdownCategoryUI,
	tags: ['autodocs'],
	parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof DropdownCategoryUI>;

export const Default: Story = {
	render: () => {
		const [options, setOptions] = useState<Option[]>([
			{ text: 'Английский', id: 'en', checked: false },
			{ text: 'Испанский', id: 'es', checked: false },
			{ text: 'Французский', id: 'fr', checked: false },
			{ text: 'Немецкий', id: 'de', checked: false },
			{ text: 'Китайский', id: 'zh', checked: false },
		]);

		const [dropdownsState, setDropdownsState] = useState<
			Record<string, { isChecked: boolean; isOpen: boolean }>
		>({
			categoryDrop: { isChecked: false, isOpen: false },
			cakskll: { isChecked: false, isOpen: false },
		});
		const handleCheckboxChange = (id: string) => {
			setDropdownsState((prev) => {
				const newState = { ...prev };
				// Устанавливаем состояние только для кликнутого дропдауна
				newState[id] = {
					isChecked: !prev[id].isChecked,
					isOpen: !prev[id].isOpen,
				};
				// Закрываем все остальные дропдауны
				Object.keys(newState).forEach((key) => {
					if (key !== id) {
						newState[key] = {
							...newState[key],
							isOpen: false,
						};
					}
				});
				return newState;
			});
		};

		const handleSelect = (value: string) => {
			setOptions((prev) =>
				prev.map((opt) =>
					opt.id === value ? { ...opt, checked: !opt.checked } : opt
				)
			);
		};

		return (
			<div style={{ display: 'inline-flex', gap: 20 }}>
				<div>
					<DropdownCategoryUI
						idDropdown='cateforyDrop'
						isChecked={dropdownsState['categoryDrop'].isChecked}
						onChange={() => handleCheckboxChange('categoryDrop')}
						options={options}
						onSelect={handleSelect}
						displayText='Иностранный язык'
						variant='no-border'
						isOpen={dropdownsState['categoryDrop'].isOpen}
					/>
				</div>
				<div>
					<DropdownCategoryUI
						idDropdown='cakskll'
						isChecked={dropdownsState['cakskll'].isChecked}
						onChange={() => handleCheckboxChange('cakskll')}
						options={options}
						onSelect={handleSelect}
						displayText='Иностранный язык'
						variant='no-border'
						isOpen={dropdownsState['cakskll'].isOpen}
					/>
				</div>
			</div>
		);
	},
};
