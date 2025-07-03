import type { Meta, StoryObj } from '@storybook/react';
import { SkillFilterUI } from './SkillFilter';
import type { TOption } from './type';
import { useState } from 'react';

const meta: Meta<typeof SkillFilterUI> = {
	title: 'Shared/UI/SkillFilter',
	component: SkillFilterUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SkillFilterUI>;

export default meta;

type Story = StoryObj<typeof SkillFilterUI>;

export const Default: Story = {
	render: (args) => {
		const [optionsAll, setOptionsAll] = useState<TOption[]>(args.options);
		const [allOpen, setAllOpen] = useState<boolean>(false);

		const handleCheckboxChange = (id: string) => {
			setOptionsAll((prev) => {
				return prev.map((opt) =>
					opt.id === id
						? { ...opt, checked: !opt.checked, isOpen: !opt.isOpen }
						: opt
				);
			});
		};

		const handleChangeSingle = (id: string) => {
			setOptionsAll((prev) => {
				return prev.map((opt) =>
					opt.id === id ? { ...opt, checked: !opt.checked } : opt
				);
			});
		};

		const handleAllOpen = () => {
			setAllOpen((prev) => !prev);
		};

		return (
			<div style={{ width: 436, padding: 20 }}>
				<SkillFilterUI
					{...args}
					isAllOpen={allOpen}
					options={optionsAll}
					onChangeSingle={handleChangeSingle}
					onOpenAll={handleAllOpen}
					onChangeGroup={handleCheckboxChange}
				/>
			</div>
		);
	},
	args: {
		label: 'Навыки',
		textAllOpen: 'Все категории',
		textAllCLose: 'Свернуть',
		options: [
			{
				id: '1',
				parentId: '1',
				text: 'Бизнес и карьера',
				checked: false,
				isOpen: false,
			},
			{
				id: '2',
				parentId: '1',
				text: 'Управление командой',
				checked: false,
				isOpen: false,
			},
			{
				id: '3',
				parentId: '1',
				text: 'Маркетинг и реклама',
				checked: false,
				isOpen: false,
			},
			{
				id: '4',
				parentId: '1',
				text: 'Продажи и переговоры',
				checked: false,
				isOpen: false,
			},
			{
				id: '5',
				parentId: '',
				text: 'Иностранные языки',
				checked: false,
				isOpen: false,
			},
			{
				id: '6',
				parentId: '',
				text: 'Декор и DIY',
				checked: false,
				isOpen: false,
			},
			{
				id: '7',
				parentId: '',
				text: 'Образование и развитие',
				checked: false,
				isOpen: false,
			},
			{
				id: '8',
				parentId: '',
				text: 'Здоровье и лайфстайл',
				checked: false,
				isOpen: false,
			},
			{
				id: '9',
				parentId: '',
				text: 'Музыка и звук',
				checked: false,
				isOpen: false,
			},
			{
				id: '10',
				parentId: '10',
				text: 'Творчество и искусство',
				checked: false,
				isOpen: false,
			},
			{
				id: '11',
				parentId: '10',
				text: 'Рисование и иллюстрация',
				checked: false,
				isOpen: false,
			},
			{
				id: '12',
				parentId: '10',
				text: 'Фотография',
				checked: false,
				isOpen: false,
			},
			{
				id: '13',
				parentId: '',
				text: 'Актёрское мастерство',
				checked: false,
				isOpen: false,
			},
			{
				id: '14',
				parentId: '',
				text: 'Йога и медитация',
				checked: false,
				isOpen: false,
			},
			{
				id: '15',
				parentId: '',
				text: 'Физические тренировки',
				checked: false,
				isOpen: false,
			},
		],
	},
};
