import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelectDropdownUI } from './MultiSelectDropdown';
import type {Option} from '../MultiSelectDropdown/type'

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
			{ text: 'Бизнес и карьера', value: 'biznes', checked: false },
			{ text: 'Творчество и искусство', value: 'art', checked: false },
			{ text: 'Иностранные языки', value: 'language', checked: false },
			{ text: 'Здоровье и лайфстайл', value: 'health', checked: false },
			{ text: 'Дом и уют', value: 'house', checked: false },
		]);

		const handleSelect = (value: string) => {
			setOptions((prev) =>
				prev.map((opt) =>
					opt.value === value ? { ...opt, checked: !opt.checked } : opt
				)
			);
		};

        const selected = options.filter((opt) => opt.checked);
	
		return (
            <div style={{ width: 436, padding: 20 }}>
			<MultiSelectDropdownUI
				label="Категория навыка, которому хотите научиться"
				placeholder="Выберите категорию"
				isOpen={isOpen}
				onToggle={() => setIsOpen((prev) => !prev)}
				options={options}
				onSelect={handleSelect}
                displayText={
                        selected.length > 0
                          ? `Выбрано: ${selected.length}`
                          : ''
                }
			/>
            </div>
		);
	},
};

export const Categories: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);
		const [suboptions, setSuboptions] = useState<Option[]>([
			{ text: 'Английский', value: 'eng', checked: false },
			{ text: 'Испанский', value: 'isp', checked: false },
			{ text: 'Французский', value: 'fr', checked: false },
            { text: 'Немецкий', value: 'ger', checked: false },
			{ text: 'Китайский', value: 'china', checked: false },
			{ text: 'Японский', value: 'jp', checked: false },
            { text: 'Подготовка к экзаменам (IELTS, TOEFL)', value: 'learning', checked: false },
		]);

		const handleSelect = (value: string) => {
			setSuboptions((prev) =>
				prev.map((opt) =>
					opt.value === value ? { ...opt, checked: !opt.checked } : opt
				)
			);
		};

		return (
			<div style={{ width: 284}}>
				<MultiSelectDropdownUI
					isOpen={isOpen}
					onToggle={() => setIsOpen((prev) => !prev)}
					options={suboptions}
					onSelect={handleSelect}
					displayText="Иностранные языки"
					variant="no-border"
                    
				/>
			</div>
		);
	},
};