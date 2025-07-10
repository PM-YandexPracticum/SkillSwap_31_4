import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TUser } from '../../api/type';
import { ProfileEditForm } from '../../widgets/ProfileEditForm';
import type { TOption as TCity } from '../../shared/ui/Dropdown/DropdownCity/type';
import { Preloader } from '../../shared/ui/Preloader';
import { getUserByIdSelector } from '../../entities/userSlice/userSlice';
import type { RootState } from '../../services/rootReducer';
import { getUserById } from '../../entities/userSlice/thunk';
import type { AppDispatch } from '../../services/store';

export const Profile = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { user, loading } = useSelector((state: RootState) => ({
		user: getUserByIdSelector(state),
		loading: state.user.loading,
		error: state.user.error,
	}));

	const cityOptions: TCity[] = [
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

	const genderOptions = [
		{ value: 'notGender', text: 'Не указан' },
		{ value: 'Женский', text: 'Женский' },
		{ value: 'Мужской', text: 'Мужской' },
	];

	const [formValues, setFormValues] = useState<Partial<TUser>>({
		name: '',
		email: '',
		gender: '',
		city: '',
		birthDate: '',
		photo: '',
		about: '',
	});

	const [hasChanges, setHasChanges] = useState(false);
	const [isOpenGender, setIsOpenGender] = useState(false);
	const [isOpenCity, setIsOpenCity] = useState(false);

	useEffect(() => {
		const userId = '686ac2ec267cc5ef811c8a23'; // Заменить на id текущего пользователя
		dispatch(getUserById(userId));
	}, [dispatch]);

	useEffect(() => {
		if (user) {
			setFormValues({
				name: user.name,
				email: user.email,
				gender: user.gender,
				city: user.city,
				birthDate: user.birthDate,
				photo: user.photo,
				about: user.about,
			});
		}
	}, [user]);

	useEffect(() => {
		if (user) {
			const isChanged =
				formValues.name !== user.name ||
				formValues.email !== user.email ||
				formValues.gender !== user.gender ||
				formValues.city !== user.city ||
				formValues.birthDate !== user.birthDate ||
				formValues.about !== user.about ||
				formValues.photo !== user.photo;

			setHasChanges(isChanged);
		}
	}, [formValues, user]);

	const handleInputChange =
		(field: keyof TUser) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setFormValues((prev) => ({
				...prev,
				[field]: e.target.value,
			}));
		};

	const handleSelectGender = (value: string) => {
		setFormValues((prev) => ({ ...prev, gender: value }));
		setIsOpenGender(false);
	};

	const handleSelectCity = (value: string) => {
		setFormValues((prev) => ({ ...prev, city: value }));
		setIsOpenCity(false);
	};

	const handleDateChange = (date: Date) => {
		setFormValues((prev) => ({ ...prev, birthDate: date.toISOString() }));
	};

	const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.[0]) {
			const newPhotoUrl = URL.createObjectURL(e.target.files[0]);
			setFormValues((prev) => ({ ...prev, photo: newPhotoUrl }));
		}
	};

	const handleSubmit = () => {
		if (!user) return;

		// Здесь нужно реализовать обновление данных пользователя
		// Например, через новый thunk updateUser
		console.log('Измененные данные:', formValues);
		// dispatch(updateUser({ id: user._id, ...formValues }));
	};

	if (loading) {
		return <Preloader isAbsolute />;
	}

	return (
		<>
			<ProfileEditForm
				userEmail={formValues.email || ''}
				userName={formValues.name || ''}
				gender={genderOptions}
				aboutMe={formValues.about || ''}
				selectedGenderText={formValues.gender || 'Не указан'}
				onSelectGender={handleSelectGender}
				onToggleGender={() => setIsOpenGender((prev) => !prev)}
				isOpenGender={isOpenGender}
				city={cityOptions}
				userPhoto={formValues.photo || ''}
				selectedCity={formValues.city || ''}
				isOpenCity={isOpenCity}
				onClickCity={() => setIsOpenCity((prev) => !prev)}
				onSelectCity={handleSelectCity}
				onClearCity={() => setFormValues((prev) => ({ ...prev, city: '' }))}
				onInputChangeCity={(e) =>
					setFormValues((prev) => ({ ...prev, city: e.target.value }))
				}
				onSubmit={handleSubmit}
				onChangeUserName={handleInputChange('name')}
				onChangeUserEmail={handleInputChange('email')}
				onChangeAboutMe={handleInputChange('about')}
				hasChanges={!hasChanges}
				onInputDate={handleDateChange}
				onChangeUserPhoto={handlePhotoChange}
			/>
		</>
	);
};
