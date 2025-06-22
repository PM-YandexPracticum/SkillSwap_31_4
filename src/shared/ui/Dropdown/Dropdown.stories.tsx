import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownUI } from './Dropdown';
import { useState } from 'react';

const meta: Meta<typeof DropdownUI> = {
	title: 'Shared/ui/Dropdown',
	component: DropdownUI,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof DropdownUI>;

//одинарный выбор наглядно как будут работать
export const DropdownSingle: Story = {
	render: (args) => {
		const [value, setValue] = useState<string>('');
		const [isOpen, setIsOpen] = useState(false);
		const selectedMap = { [value]: true };
		const displayText =
			args.options.find((opt) => opt.value === value)?.text ??
			args.placeholder ??
			'';

		return (
			<DropdownUI
				{...args}
				onChange={setValue}
				isOpen={isOpen}
				onToggle={() => setIsOpen((prev) => !prev)}
				displayText={displayText}
				selectedMap={selectedMap}
			/>
		);
	},
	args: {
		label: 'Пол',
		placeholder: 'Не указан',
		multiple: false,
		options: [
			{ value: 'not', text: 'Не указан' },
			{ value: 'men', text: 'Мужской' },
			{ value: 'women', text: 'Женский' },
		],
	},
};

//множественный выбор наглядно как будут работать,
export const DropdownMultiple: Story = {
	render: (args) => {
		const [value, setValue] = useState<string[]>([]);
		const [isOpen, setIsOpen] = useState(false);

		const handleChange = (selected: string) => {
			setValue((prev) =>
				prev.includes(selected)
					? prev.filter((value) => value !== selected)
					: [...prev, selected]
			);
		};
		const selectedMap = Object.fromEntries(value.map((v) => [v, true]));
		const displayText =
			value.length > 0 ? `Выбрано: ${value.length}` : (args.placeholder ?? '');
		return (
			<DropdownUI
				{...args}
				onChange={handleChange}
				isOpen={isOpen}
				onToggle={() => setIsOpen((prev) => !prev)}
				displayText={displayText}
				selectedMap={selectedMap}
			/>
		);
	},
	args: {
		label: 'Категория навыка, которому хотите научиться',
		placeholder: 'Выберите категорию',
		multiple: true,
		options: [
			{ value: 'biznes', text: 'Бизнес и карьера' },
			{ value: 'art', text: 'Творчество и искусство' },
			{ value: 'lang', text: 'Иностранные языки' },
			{ value: 'health', text: 'Здоровье и лайфстайл' },
			{ value: 'house', text: 'Дом и уют' },
		],
	},
};
