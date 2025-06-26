import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownCityUI } from './DropdownCity';

const meta: Meta<typeof DropdownCityUI> = {
	title: 'Shared/UI/DropdownCity',
	component: DropdownCityUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DropdownCityUI>;

export default meta;

type Story = StoryObj<typeof DropdownCityUI>;

export const Default: Story = {
	render: (args) => {
		const [selectedOption, setSelectedOption] = useState<string | undefined>();
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div style={{ width: 436, padding: 20 }}>
				<DropdownCityUI
					{...args}
					selectedOption={selectedOption}
					isOpen={isOpen}
					onClick={() => setIsOpen((prev) => !prev)}
					onClear={() => {
						setSelectedOption('');
						setIsOpen(false);
					}}
					onInputChange={(e) => {
						setSelectedOption(e.currentTarget.value);
						setIsOpen(true);
					}}
					onSelect={(value) => {
						setSelectedOption(value);
						setIsOpen(false);
					}}
				/>
			</div>
		);
	},
	args: {
		label: 'Город',
		placeholder: 'Не указан',
		options: [
			{ text: 'Москва' },
			{ text: 'Ростов-на-Дону' },
			{ text: 'Омск' },
			{ text: 'Мурманск' },
			{ text: 'Волгоград' },
			{ text: 'Рязань' },
			{ text: 'Минск' },
			{ text: 'Махачкала' },
			{ text: 'Анапа' },
			{ text: 'Сочи' },
			{ text: 'Севастополь' },
			{ text: 'Ставрополь' },
			{ text: 'Ярославль' },
			{ text: 'Арзамас' },
			{ text: 'Батайск' },
		],
	},
};
