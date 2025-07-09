import type { Meta } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { StepThree } from './StepThree';

const meta = {
	title: 'Widgets/Registration/StepThree',
	component: StepThree,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof StepThree>;

export default meta;

export const StepThreeDefault = {
	render: () => {
		const [isOpenCategory, setIsOpenCategory] = useState(false);
		const [isOpenSubcategory, setIsOpenSubcategory] = useState(false);
		const [selectedCategory, setSelectedCategory] = useState<
			string | undefined
		>();
		const [selectedSubcategory, setSelectedSubcategory] = useState<
			string | undefined
		>();
		const [skillName, setSkillName] = useState('');
		const [skillDescription, setSkillDescription] = useState('');
		const [isDisabledSubmitForm, setIsDisabledSubmitForm] = useState(true);
		const categories = [
			{ value: 'art', text: 'Творчество и искусство' },
			{ value: 'business', text: 'Бизнес и карьера' },
			{ value: 'music', text: 'Музыка и звук' },
		];
		const subcategories = [
			{ value: 'art', text: 'Рисование' },
			{ value: 'art', text: 'Фотография' },
			{ value: 'art', text: 'Скульптура' },
			{ value: 'business', text: 'Маркетинг' },
			{ value: 'business', text: 'Управление' },
			{ value: 'business', text: 'Финансы' },
			{ value: 'music', text: 'Игра на инструментах' },
			{ value: 'music', text: 'Звукозапись' },
			{ value: 'music', text: 'Аранжировка' },
		];
		const selectedCategoryText = categories.find(
			(opt) => opt.value === selectedCategory
		)?.text;

		const selectedSubcategoryText = subcategories.find(
			(opt) => opt.value === selectedSubcategory
		)?.text;

		const filteredSubcategories = selectedCategory
			? subcategories.filter((opt) => opt.value === selectedCategory)
			: [];

		const handleChangeSkillName = (e: React.ChangeEvent<HTMLInputElement>) => {
			setSkillName(e.target.value);
		};

		const handleChangeSkillDescription = (
			e: React.ChangeEvent<HTMLInputElement>
		) => {
			setSkillDescription(e.target.value);
		};

		const handleSubmit = () => {
			alert('onSubmit');
		};

		const handleBack = () => {
			alert('onBack');
		};

		useEffect(() => {
			if (
				skillName === '' ||
				skillDescription === '' ||
				!selectedCategory ||
				!selectedSubcategory
			) {
				setIsDisabledSubmitForm(true);
			} else {
				setIsDisabledSubmitForm(false);
			}
		}, [skillName, skillDescription, selectedCategory, selectedSubcategory]);

		return (
			<StepThree
				isOpenCategory={isOpenCategory}
				onToggleCategory={() => setIsOpenCategory((prev) => !prev)}
				categories={categories}
				selectedCategoryText={selectedCategoryText}
				onSelectCategory={(value) => {
					setSelectedCategory(value);
					setIsOpenCategory(false);
					setSelectedSubcategory(undefined);
				}}
				isOpenSubcategory={isOpenSubcategory}
				onToggleSubcategory={() => setIsOpenSubcategory((prev) => !prev)}
				subcategories={filteredSubcategories}
				selectedSubcategoryText={selectedSubcategoryText}
				onSelectSubcategory={(value) => {
					setSelectedSubcategory(value);
					setIsOpenSubcategory(false);
				}}
				isDisabledSubmitForm={isDisabledSubmitForm}
				skillName={skillName}
				skillDescription={skillDescription}
				onChangeSkillName={handleChangeSkillName}
				onChangeSkillDescription={handleChangeSkillDescription}
				onSubmit={handleSubmit}
				onBack={handleBack}
			/>
		);
	},
};
