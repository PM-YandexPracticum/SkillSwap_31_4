import { ButtonUI, DropdownBaseUI, DropdownCityUI, Input } from '@ui';
import styles from './ProfileEditForm.module.scss';
import { DatePickerUI } from '../../shared/ui/DatePicker';
import type { TProfileEditFormProps } from './type';

export const ProfileEditForm = ({
	userEmail,
	userName,
	userPhoto,
	gender,
	city,
	aboutMe,
	selectedGenderText,
	isOpenGender,
	isOpenCity,
	selectedCity,
	hasChanges,
	onSelectGender,
	onToggleGender,
	onClearCity,
	onInputChangeCity,
	onSelectCity,
	onClickCity,
	onSubmit,
	onChangeUserName,
	onChangeUserEmail,
	onChangeAboutMe,
	onInputDate,
	onChangeUserPhoto,
}: TProfileEditFormProps) => (
	<div className={styles.userInfo}>
		<div className={styles.form}>
			<div className={styles.inputs}>
				<div>
					<Input
						label='Почта'
						variant='editable'
						value={userEmail}
						onChange={onChangeUserEmail}
					/>
					<button type='button' className={styles.editPasswordButton}>
						Изменить пароль
					</button>
				</div>
				<Input
					label='Имя'
					variant='editable'
					value={userName}
					onChange={onChangeUserName}
				/>
				<div className={styles.inputGroup}>
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
						displayText={selectedGenderText}
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
					selectedOption={selectedCity}
					onClear={onClearCity}
					onInputChange={onInputChangeCity}
					onSelect={onSelectCity}
					onClick={onClickCity}
				/>
				<Input
					label='О себе'
					variant='editable'
					multiline
					value={aboutMe}
					onChange={onChangeAboutMe}
				/>
			</div>
			<ButtonUI color='primary' isDisabled={hasChanges} onClick={onSubmit}>
				Сохранить
			</ButtonUI>
		</div>
		<div
			className={styles.userPhoto}
			style={{
				backgroundImage: `url(${userPhoto})`,
				border: userPhoto ? 'none' : '1px solid black',
			}}>
			<label className={styles.edit}>
				<img src='src/images/icons/gallery-edit.svg' alt='Редактировать' />
				<input
					className={styles.hiddenInput}
					type='file'
					accept='.jpg, .jpeg, .png, .svg'
					onChange={onChangeUserPhoto}
				/>
			</label>
		</div>
	</div>
);
