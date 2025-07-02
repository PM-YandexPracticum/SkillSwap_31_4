import clsx from 'clsx';
import UserCircleModalIcon from '@images/icons/user-circleModal.svg';
import {
	Input,
	DropdownCityUI,
	ButtonUI,
	DropdownBaseUI,
} from '../../../shared/ui';
import { DatePickerUI } from '../../../shared/ui/DatePicker';
import { MultiSelectDropdownUI } from '../../../shared/ui/Dropdown';
import type { TStepTwoUIProps } from './type';
import styles from './StepTwo.module.scss';

export const StepTwoUI = ({
	user,
	// option: TOption;
	isEnabled,
	city,
	gender,
	category,
	subCategory,
	isOpenCity,
	isOpenGender,
	isOpenCategory,
	isOpenSubCategory,
	onAddPhoto,
	onChange,
	onNext,
	onBack,
	onClickCity,
	onClearCity,
	onInputChangeCity,
	onSelectCity,
	onToggleGender,
	onSelectGender,
	onInputDate,
	onToggleCategory,
	onSelectCategory,
	onToggleSubCategory,
	onSelectSubCategory,
}: TStepTwoUIProps) => (
	<div className={styles.container}>
		<button
			type='button'
			onClick={onAddPhoto}
			disabled={false}
			className={clsx(styles.userCircleButton)}>
			<img
				src={user.photo === '' ? UserCircleModalIcon : user.photo}
				className={clsx(styles.userCircle)}
				alt='Картинка'
			/>
			<span className={clsx(styles.userCirclePlus)}>+</span>
		</button>
		<Input
			label='Имя'
			placeholder='Введите ваше имя'
			value={user.userName}
			onChange={onChange}
		/>
		<div className={clsx(styles.containerDouble)}>
			<DatePickerUI
				title='Дата рождения'
				onInput={onInputDate}
				error=''
				maxDate={new Date()}
			/>
			<DropdownBaseUI
				isAbsolute
				label='Пол'
				placeholder='Не указан'
				idDropdown='baseDrop'
				options={gender}
				selectedOption={user.gender}
				displayText={gender.find((opt) => opt.value === user.gender)?.text}
				isOpen={isOpenGender}
				onToggle={onToggleGender}
				onSelect={onSelectGender}
			/>
		</div>
		<DropdownCityUI
			label='Город'
			placeholder='Не указан'
			options={city}
			isOpen={isOpenCity}
			selectedOption={user.city}
			onClear={onClearCity}
			onInputChange={onInputChangeCity}
			onSelect={onSelectCity}
			onClick={onClickCity}
		/>
		<MultiSelectDropdownUI
			idDropdown='category1'
			label='Категория навыка, которому хотите научиться'
			placeholder='Выберите категорию'
			variant='default'
			isAbsolute
			isOpen={isOpenCategory}
			options={category}
			onToggle={onToggleCategory}
			onSelect={onSelectCategory}
			displayText={
				category.filter((opt) => opt.checked).length > 0
					? `Выбрано: ${category.filter((opt) => opt.checked).length}`
					: ''
			}
		/>
		<MultiSelectDropdownUI
			isAbsolute
			idDropdown='category2'
			label='Подкатегория навыка, которому хотите научиться'
			placeholder='Выберите подкатегорию'
			variant='default'
			isOpen={isOpenSubCategory}
			options={subCategory}
			onToggle={onToggleSubCategory}
			onSelect={onSelectSubCategory}
			displayText={
				subCategory.filter((opt) => opt.checked).length > 0
					? `Выбрано: ${subCategory.filter((opt) => opt.checked).length}`
					: ''
			}
		/>
		<div className={clsx(styles.containerDouble, styles.addMargin)}>
			<ButtonUI onClick={onBack} color='secondary' isDisabled={false}>
				Назад
			</ButtonUI>
			<ButtonUI onClick={onNext} color='primary' isDisabled={!isEnabled}>
				Продолжить
			</ButtonUI>
		</div>
	</div>
);
