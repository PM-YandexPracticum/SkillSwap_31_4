import { ButtonUI, DropdownBaseUI, Input } from '@ui';
import { useState } from 'react';
import styles from './StepThree.module.scss';
import { FileUploader } from './FileUploader/FileUploader';
import type { TStepThreeProps } from './type';

export const StepThree = ({
	categories,
	selectedCategoryText,
	onSelectCategory,
	subcategories,
	selectedSubcategoryText,
	onSelectSubcategory,
	isDisabledSubmitForm,
	skillName,
	skillDescription,
	onChangeSkillName,
	onChangeSkillDescription,
	onChangeFiles,
	onSubmit,
	onBack,
}: TStepThreeProps) => {
	const [isOpenCategory, setIsOpenCategory] = useState(false);
	const [isOpenSubcategory, setIsOpenSubcategory] = useState(false);

	const onClickCategoryContainer = () => {
		setIsOpenCategory(!isOpenCategory);
		setIsOpenSubcategory(false);
	};

	const onClickSubCategoryContainer = () => {
		setIsOpenSubcategory(!isOpenSubcategory);
		setIsOpenCategory(false);
	};

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.inputGroup}>
					<Input
						label='Название навыка'
						placeholder='Введите название вашего навыка'
						value={skillName}
						onChange={onChangeSkillName}
					/>
					<DropdownBaseUI
						label='Категория навыка'
						placeholder='Выберите категорию навыка'
						idDropdown='category'
						isAbsolute
						isOpen={isOpenCategory}
						onToggle={onClickCategoryContainer}
						options={categories}
						displayText={selectedCategoryText}
						onSelect={(value: string) => {
							setIsOpenCategory(false);
							onSelectCategory(value);
						}}
					/>
					<DropdownBaseUI
						label='Подкатегория навыка'
						placeholder='Выберите подкатегорию навыка'
						idDropdown='subcategory'
						isAbsolute
						isOpen={isOpenSubcategory}
						onToggle={onClickSubCategoryContainer}
						options={subcategories}
						displayText={selectedSubcategoryText}
						onSelect={(value: string) => {
							setIsOpenSubcategory(false);
							onSelectSubcategory(value);
						}}
					/>
					<Input
						label='Описание'
						placeholder='Коротко опишите, чему можете научить'
						value={skillDescription}
						onChange={onChangeSkillDescription}
						multiline
					/>
					<FileUploader onChangeFiles={onChangeFiles} />
				</div>
				<div className={styles.buttonGroup}>
					<ButtonUI onClick={onBack} color='secondary' isDisabled={false}>
						Назад
					</ButtonUI>
					<ButtonUI
						htmlType='submit'
						onClick={onSubmit}
						color='primary'
						isDisabled={isDisabledSubmitForm}>
						Продолжить
					</ButtonUI>
				</div>
			</div>
		</div>
	);
};
