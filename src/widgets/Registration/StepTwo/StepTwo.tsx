import clsx from 'clsx';
import { useRef, useState } from 'react';
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
	handleFileChange,
	onChange,
	onNext,
	onBack,
	onClearCity,
	onInputChangeCity,
	onSelectCity,
	onSelectGender,
	onInputDate,
	onSelectCategory,
	onSelectSubCategory,
}: TStepTwoUIProps) => {
	const imageFile = useRef<HTMLInputElement>(null);

	const [isOpenCity, setIsOpenCity] = useState(false);
	const [isOpenGender, setIsOpenGender] = useState(false);
	const [isOpenCategory, setIsOpenCategory] = useState(false);
	const [isOpenSubCategory, setIsOpenSubCategory] = useState(false);

	const onToggleGender = () => {
		setIsOpenGender(!isOpenGender);
		setIsOpenCity(false);
		setIsOpenCategory(false);
		setIsOpenSubCategory(false);
	};

	const onClickCity = () => {
		setIsOpenCity(!isOpenCity);
		setIsOpenGender(false);
		setIsOpenCategory(false);
		setIsOpenSubCategory(false);
	};

	const onToggleCategory = () => {
		setIsOpenCategory(!isOpenCategory);
		setIsOpenGender(false);
		setIsOpenCity(false);
		setIsOpenSubCategory(false);
	};

	const onToggleSubCategory = () => {
		setIsOpenSubCategory(!isOpenSubCategory);
		setIsOpenGender(false);
		setIsOpenCity(false);
		setIsOpenCategory(false);
	};

	const handleImageClick = () => {
		imageFile.current?.click();
	};

	return (
		<div className={styles.container}>
			<input
				ref={imageFile}
				type='file'
				accept='image/*'
				onChange={handleFileChange}
				className={styles.hiddenInput}
			/>
			<button
				type='button'
				onClick={handleImageClick}
				disabled={false}
				className={clsx(styles.userCircleButton)}>
				<img
					src={user.photo === '' ? UserCircleModalIcon : user.photo}
					className={clsx(styles.userCircle)}
					alt='Картинка'
				/>
				{user.photo === '' && (
					<span className={clsx(styles.userCirclePlus)}>+</span>
				)}
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
					onSelect={(value: string) => {
						setIsOpenGender(false);
						onSelectGender(value);
					}}
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
				onSelect={(value: string) => {
					setIsOpenCity(false);
					onSelectCity?.(value);
				}}
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
				onSelect={(value: string) => {
					onSelectCategory(value);
				}}
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
				onSelect={(value: string) => {
					onSelectSubCategory(value);
				}}
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
				<ButtonUI
					htmlType='submit'
					onClick={onNext}
					color='primary'
					isDisabled={!isEnabled}>
					Продолжить
				</ButtonUI>
			</div>
		</div>
	);
};
