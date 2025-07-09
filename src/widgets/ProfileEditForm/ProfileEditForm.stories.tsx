import type { Meta } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { ProfileEditForm } from './ProfileEditForm';
import type { TOption as TCity } from '../../shared/ui/Dropdown/DropdownCity/type';

const meta = {
	title: 'Widgets/ProfileEditForm',
	component: ProfileEditForm,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ProfileEditForm>;

export default meta;

export const ProfileEditFormDefault = {
	render: () => {
		const city: TCity[] = [
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
		];
		const gender = [
			{ value: 'notGender', text: 'Не указан' },
			{ value: 'Women<3', text: 'Женский' },
			{ value: 'Men', text: 'Мужской' },
		];
		const initialValues = {
			userName: 'Иван',
			userEmail: 'ivan@yandex.ru',
			dateBirthday: new Date(),
			aboutMe: 'Что-то об Иване',
			userPhoto: 'src/images/avatar.jpg',
			selectedGender: gender[2].value,
			selectedCity: city[0].text,
		};
		const [hasChanges, setHasChanges] = useState(false);
		const [isOpenGender, setIsOpenGender] = useState(false);
		const [isOpenCity, setIsOpenCity] = useState(false);
		const [formValues, setFormValues] = useState(initialValues);
		const [selectedGender, setSelectedGender] = useState<string | undefined>(
			gender[2].value
		);
		const [selectedCity, setSelectedCity] = useState<string | undefined>(
			city[0].text
		);
		const selectedGenderText = gender.find(
			(opt) => opt.value === selectedGender
		)?.text;

		const handleClickCity = () => {
			setIsOpenCity((prev) => !prev);
		};

		const handleClearCity = () => {
			setSelectedCity('');
		};

		const handleInputChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
			setSelectedCity(e.target.value);
		};

		const handleInputChangeUserName = (
			e: React.ChangeEvent<HTMLInputElement>
		) => {
			setFormValues((prev) => ({ ...prev, userName: e.target.value }));
		};

		const handleInputChangeUserEmail = (
			e: React.ChangeEvent<HTMLInputElement>
		) => {
			setFormValues((prev) => ({ ...prev, userEmail: e.target.value }));
		};

		const handleInputChangeAboutMe = (
			e: React.ChangeEvent<HTMLInputElement>
		) => {
			setFormValues((prev) => ({ ...prev, aboutMe: e.target.value }));
		};

		const handleInputChangeUserPhoto = (
			e: React.ChangeEvent<HTMLInputElement>
		) => {
			const { files } = e.target;
			if (files && files.length > 0) {
				setFormValues((prev) => ({
					...prev,
					userPhoto: URL.createObjectURL(files[0]),
				}));
			}
		};

		const handleSelectGender = (value: string) => {
			setSelectedGender(value);
			setIsOpenGender(false);
			setFormValues((prev) => ({ ...prev, selectedGender: value }));
		};

		const handleSelectCity = (value: string) => {
			setSelectedCity(value);
			setIsOpenCity(false);
			setFormValues((prev) => ({ ...prev, selectedCity: value }));
		};

		const handleDate = (date: Date) => {
			setFormValues((prev) => ({
				...prev,
				dateBirthday: date,
			}));
		};

		useEffect(() => {
			const isChanged = Object.keys(initialValues).some(
				(key) =>
					formValues[key as keyof typeof initialValues] !==
					initialValues[key as keyof typeof initialValues]
			);
			setHasChanges(isChanged);
		}, [formValues]);

		return (
			<ProfileEditForm
				userEmail={formValues.userEmail}
				userName={formValues.userName}
				gender={gender}
				aboutMe={formValues.aboutMe}
				selectedGenderText={selectedGenderText}
				onSelectGender={handleSelectGender}
				onToggleGender={() => setIsOpenGender((prev) => !prev)}
				isOpenGender={isOpenGender}
				city={city}
				userPhoto={formValues.userPhoto}
				selectedCity={selectedCity}
				isOpenCity={isOpenCity}
				onClickCity={handleClickCity}
				onSelectCity={handleSelectCity}
				onClearCity={handleClearCity}
				onInputChangeCity={handleInputChangeCity}
				onSubmit={() => alert('onSubmit')}
				onChangeUserName={handleInputChangeUserName}
				onChangeUserEmail={handleInputChangeUserEmail}
				onChangeAboutMe={handleInputChangeAboutMe}
				hasChanges={!hasChanges}
				onInputDate={handleDate}
				onChangeUserPhoto={handleInputChangeUserPhoto}
			/>
		);
	},
};
