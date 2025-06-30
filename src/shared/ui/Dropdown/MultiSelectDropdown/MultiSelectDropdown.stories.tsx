import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelectDropdownUI } from './MultiSelectDropdown';
import type { Option } from '../MultiSelectDropdown/type';

const meta: Meta<typeof MultiSelectDropdownUI> = {
	title: 'Shared/UI/Dropdown/MultiSelectDropdown',
	component: MultiSelectDropdownUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof MultiSelectDropdownUI>;

export default meta;

type Story = StoryObj<typeof MultiSelectDropdownUI>;

export const Default: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);
		const [options, setOptions] = useState<Option[]>([
			{ text: 'Бизнес и карьера', id: 'biznes', checked: false },
			{ text: 'Творчество и искусство', id: 'art', checked: false },
			{ text: 'Иностранные языки', id: 'language', checked: false },
			{ text: 'Здоровье и лайфстайл', id: 'health', checked: false },
			{ text: 'Дом и уют', id: 'house', checked: false },
		]);

		const handleSelect = (value: string) => {
			setOptions((prev) =>
				prev.map((opt) =>
					opt.id === value ? { ...opt, checked: !opt.checked } : opt
				)
			);
		};

		//логируем выбранный объект после обновления options
		useEffect(() => {
			const selectedItems = options.filter((opt) => opt.checked);
			if (selectedItems.length > 0) {
				console.log('Выбраны:', selectedItems);
			}
		}, [options]);

		const selected = options.filter((opt) => opt.checked);

		return (
			<div style={{ width: 436, padding: 20 }}>
				<MultiSelectDropdownUI
					idDropdown='categoryForExample'
					label='Категория навыка, которому хотите научиться'
					placeholder='Выберите категорию'
					isOpen={isOpen}
					onToggle={() => setIsOpen((prev) => !prev)}
					options={options}
					onSelect={handleSelect}
					displayText={selected.length > 0 ? `Выбрано: ${selected.length}` : ''}
				/>
			</div>
		);
	},
};

export const Categories: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);
		const [suboptions, setSuboptions] = useState<Option[]>([
			{ text: 'Английский', id: 'eng', checked: false },
			{ text: 'Испанский', id: 'isp', checked: false },
			{ text: 'Французский', id: 'fr', checked: false },
			{ text: 'Немецкий', id: 'ger', checked: false },
			{ text: 'Китайский', id: 'china', checked: false },
			{ text: 'Японский', id: 'jp', checked: false },
			{
				text: 'Подготовка к экзаменам (IELTS, TOEFL)',
				id: 'learning',
				checked: false,
			},
		]);

		const handleSelect = (value: string) => {
			setSuboptions((prev) =>
				prev.map((opt) =>
					opt.id === value ? { ...opt, checked: !opt.checked } : opt
				)
			);
		};

		//логируем после обновления
		useEffect(() => {
			const selectedItems = suboptions.filter((opt) => opt.checked);
			if (selectedItems.length > 0) {
				console.log('Выбраны:', selectedItems);
			}
		}, [suboptions]);

		return (
			<div style={{ width: 252 }}>
				<MultiSelectDropdownUI
					idDropdown='langDrop'
					isOpen={isOpen}
					onToggle={() => setIsOpen((prev) => !prev)}
					options={suboptions}
					onSelect={handleSelect}
					displayText='Иностранные языки'
					variant='no-border'
				/>
			</div>
		);
	},
};
