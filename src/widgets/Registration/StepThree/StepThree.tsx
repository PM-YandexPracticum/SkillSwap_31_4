import { ButtonUI, DropdownBaseUI, Input } from '@ui';
import styles from './StepThree.module.scss';
import { FileUploader } from './FileUploader/FileUploader';
import type { TStepThreeProps } from './type';

export const StepThree = ({
	isOpenCategory,
	onToggleCategory,
	categories,
	selectedCategoryText,
	onSelectCategory,
	isOpenSubcategory,
	onToggleSubcategory,
	subcategories,
	selectedSubcategoryText,
	onSelectSubcategory,
	isDisabledSubmitForm,
	skillName,
	skillDescription,
	onChangeSkillName,
	onChangeSkillDescription,
	onSubmit,
	onBack,
}: TStepThreeProps) => (
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
					onToggle={onToggleCategory}
					options={categories}
					displayText={selectedCategoryText}
					onSelect={onSelectCategory}
				/>
				<DropdownBaseUI
					label='Подкатегория навыка'
					placeholder='Выберите подкатегорию навыка'
					idDropdown='subcategory'
					isAbsolute
					isOpen={isOpenSubcategory}
					onToggle={onToggleSubcategory}
					options={subcategories}
					displayText={selectedSubcategoryText}
					onSelect={onSelectSubcategory}
				/>
				<Input
					label='Описание'
					placeholder='Коротко опишите, чему можете научить'
					value={skillDescription}
					onChange={onChangeSkillDescription}
					multiline
				/>
				<FileUploader />
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
