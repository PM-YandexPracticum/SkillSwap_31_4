import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownCategoryUI } from '@ui';
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
		const [options1, setOptions1] = useState<Option[]>([
			{ text: 'Английский', id: 'en', checked: false },
			{ text: 'Испанский', id: 'es', checked: false },
			{ text: 'Французский', id: 'fr', checked: false },
			{ text: 'Немецкий', id: 'de', checked: false },
			{ text: 'Китайский', id: 'zh', checked: false },
		]);

		const [options2, setOptions2] = useState<Option[]>([
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
			setDropdownsState((prev) => ({
				...prev,
				[id]: {
					isChecked: !prev[id].isChecked,
					isOpen: !prev[id].isOpen,
				},
			}));
		};

		const handleSelect = (
			idDropdown: string,
			setOptions: React.Dispatch<React.SetStateAction<Option[]>>
		) => {
			return (value: string) => {
				setOptions((prev) => {
					const updated = prev.map((opt) =>
						opt.id === value ? { ...opt, checked: !opt.checked } : opt
					);

					const selectedItems = updated.filter((opt) => opt.checked);
					console.log(`[${idDropdown}] Выбранные:`, selectedItems);
					return updated;
				});
			};
		};

		return (
			<div style={{ display: 'inline-flex', gap: 20 }}>
				<div>
					<DropdownCategoryUI
						idDropdown='categoryDrop'
						isChecked={dropdownsState['categoryDrop'].isChecked}
						onChange={() => handleCheckboxChange('categoryDrop')}
						options={options1}
						onSelect={handleSelect('categoryDrop', setOptions1)}
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
						options={options2}
						onSelect={handleSelect('cakskll', setOptions2)}
						displayText='Иностранный язык'
						variant='no-border'
						isOpen={dropdownsState['cakskll'].isOpen}
					/>
				</div>
			</div>
		);
	},
};
