import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { StepTwoUI } from './StepTwo';
import type { TUserType } from './type';
import type { TErrorResponse, TUploadResponse } from '../../../api/type';
import type { TOption as TCity } from '../../../shared/ui/Dropdown/DropdownCity/type';
import type { Option as TGender } from '../../../shared/ui/Dropdown/DropdownBase/type';
import type { Option as TCategory } from '../../../shared/ui/Dropdown/MultiSelectDropdown/type';
import { uploadPhotos } from '../../../api/api';

const meta: Meta<typeof StepTwoUI> = {
	title: 'Widgets/Registration/StepTwo',
	component: StepTwoUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof StepTwoUI>;

export default meta;

type Story = StoryObj<typeof StepTwoUI>;

export const Default: Story = {
	render: () => {
		const initialUser: TUserType = {
			id: 0,
			userName: '',
			city: '',
			age: 0,
			dateBirthday: new Date(),
			gender: '',
			about: '',
			canTeach: '',
			wantsToLearnCat: [],
			wantsToLearnSubCat: [],
			photo: '',
		};

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

		const subCategory: TCategory[] = [
			{
				text: 'Управление командой',
				id: '1',
				checked: false,
				parentId: 'biznes',
			},
			{
				text: 'Маркетинг и реклама',
				id: '2',
				checked: false,
				parentId: 'biznes',
			},
			{
				text: 'Продажи и переговоры',
				id: '3',
				checked: false,
				parentId: 'biznes',
			},
			{
				text: 'Личный бренд',
				id: '4',
				checked: false,
				parentId: 'biznes',
			},
			{
				text: 'Резюме и собеседование',
				id: '5',
				checked: false,
				parentId: 'biznes',
			},
			{
				text: 'Рисование и иллюстрация',
				id: '6',
				checked: false,
				parentId: 'art',
			},
			{
				text: 'Фотография',
				id: '7',
				checked: false,
				parentId: 'art',
			},
			{
				text: 'Английский',
				id: '8',
				checked: false,
				parentId: 'language',
			},
			{
				text: 'Французский',
				id: '9',
				checked: false,
				parentId: 'language',
			},
			{
				text: 'Йога и медитация',
				id: '10',
				checked: false,
				parentId: 'health',
			},
			{
				text: 'Уборка и организация',
				id: '11',
				checked: false,
				parentId: 'house',
			},
		];
		const gender: TGender[] = [
			{ value: 'notGender', text: 'Не указан' },
			{ value: 'Women<3', text: 'Женский' },
			{ value: 'Men', text: 'Мужской' },
		];

		const [optionsCategory, setOptionsCategory] = useState<TCategory[]>([
			{ text: 'Бизнес и карьера', id: 'biznes', checked: false },
			{ text: 'Творчество и искусство', id: 'art', checked: false },
			{ text: 'Иностранные языки', id: 'language', checked: false },
			{ text: 'Здоровье и лайфстайл', id: 'health', checked: false },
			{ text: 'Дом и уют', id: 'house', checked: false },
		]);

		const [optionsSubCategory, setOptionsSubCategory] =
			useState<TCategory[]>(subCategory);
		const [isEnabled, setIsEnabled] = useState(false);
		const [userData, setUserData] = useState<TUserType>(initialUser);
		const [isOpenCity, setIsOpenCity] = useState(false);
		const [isOpenGender, setIsOpenGender] = useState(false);
		const [isOpenCategory, setIsOpenCategory] = useState(false);
		const [isOpenSubCategory, setIsOpenSubCategory] = useState(false);

		useEffect(() => {
			const newSubCategory: TCategory[] = subCategory.filter(
				(opt) =>
					opt.parentId ===
					optionsCategory.find(
						(parent) => parent.checked === true && opt.parentId === parent.id
					)?.id
			);
			const newSubCategoryChecked: TCategory[] = newSubCategory.map((opt) => {
				const oldOptCheck = optionsSubCategory.find(
					(sub) => sub.id === opt.id && sub.checked === true
				);
				if (oldOptCheck) {
					return oldOptCheck;
				}
				return opt;
			});

			setUserData((prev) => ({
				...prev,
				wantsToLearnCat: optionsCategory
					.map((opt) => (opt.checked === true ? opt.text : ''))
					.filter((text) => text !== ''),
			}));

			setOptionsSubCategory(newSubCategoryChecked);
		}, [optionsCategory]);

		useEffect(() => {
			setUserData((prev) => ({
				...prev,
				wantsToLearnSubCat: optionsSubCategory
					.map((opt) => (opt.checked === true ? opt.text : ''))
					.filter((text) => text !== ''),
			}));
		}, [optionsSubCategory]);

		useEffect(() => {
			const hasUserName = userData.userName.trim() !== '';
			const hasCity = userData.city.trim() !== '';
			const hasGender = userData.gender.trim() !== '';
			const hasPhoto = userData.photo.trim() !== '';
			const hasCategory = userData.wantsToLearnCat.length > 0;
			const hasSubCategory = userData.wantsToLearnSubCat.length > 0;

			const today = new Date();
			const isNotToday =
				today.toDateString() !== userData.dateBirthday.toDateString();

			const isFormValid =
				hasUserName &&
				hasCity &&
				hasGender &&
				hasCategory &&
				hasSubCategory &&
				isNotToday &&
				hasPhoto;

			setIsEnabled(isFormValid);
		}, [userData]);

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			setUserData((prev) => ({
				...prev,
				userName: e.target.value,
			}));
			setIsOpenCity(false);
			setIsOpenGender(false);
			setIsOpenCategory(false);
			setIsOpenSubCategory(false);
		};

		const handleDate = (date: Date) => {
			setUserData((prev) => ({
				...prev,
				dateBirthday: date,
			}));
			setIsOpenCity(false);
			setIsOpenGender(false);
			setIsOpenCategory(false);
			setIsOpenSubCategory(false);
		};

		const handleAddPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
			let fileUrl: string = '';
			if (e.target.files && e.target.files.length > 0) {
				const newFiles = Array.from(e.target.files).slice(0, 1);
				uploadPhotos(newFiles)
					.then((response) => {
						const urlsTab = response as TUploadResponse;
						fileUrl = urlsTab?.urls[0];
					})
					.catch((error: TErrorResponse) => {
						if (error) {
							fileUrl = '';
						}
					})
					.finally(() =>
						setUserData((prev) => ({
							...prev,
							photo: fileUrl,
						}))
					);
			} else {
				setUserData((prev) => ({
					...prev,
					photo: '',
				}));
			}
			setIsOpenCity(false);
			setIsOpenGender(false);
			setIsOpenCategory(false);
			setIsOpenSubCategory(false);
		};

		const handleNext = () => {
			setIsOpenCity(false);
			setIsOpenGender(false);
			setIsOpenCategory(false);
			setIsOpenSubCategory(false);
			alert('Next Button Clicked');
		};
		const handleBack = () => {
			setIsOpenCity(false);
			setIsOpenGender(false);
			setIsOpenCategory(false);
			setIsOpenSubCategory(false);
			alert('Back Button Clicked');
		};

		const handleClickCity = () => {
			setIsOpenCity((prev) => !prev);
			setIsOpenGender(false);
			setIsOpenCategory(false);
			setIsOpenSubCategory(false);
		};

		const handleClearCity = () => {
			setUserData((prev) => ({
				...prev,
				city: '',
			}));
			setIsOpenCity(false);
			setIsOpenGender(false);
			setIsOpenCategory(false);
			setIsOpenSubCategory(false);
		};

		const handleInputChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
			setUserData((prev) => ({
				...prev,
				city: e.target.value,
			}));
			setIsOpenCity(true);
			setIsOpenGender(false);
			setIsOpenCategory(false);
			setIsOpenSubCategory(false);
		};

		const handleSelectCity = (value: string) => {
			setUserData((prev) => ({
				...prev,
				city: value,
			}));
			setIsOpenCity(false);
			setIsOpenGender(false);
			setIsOpenCategory(false);
			setIsOpenSubCategory(false);
		};

		const handleToggleGender = () => {
			setIsOpenGender((prev) => !prev);
			setIsOpenCity(false);
			setIsOpenCategory(false);
			setIsOpenSubCategory(false);
		};

		const handleSelectGender = (value: string) => {
			setUserData((prev) => ({
				...prev,
				gender: value,
			}));
			setIsOpenGender(false);
			setIsOpenCategory(false);
			setIsOpenSubCategory(false);
		};

		const handleToggleCategory = () => {
			setIsOpenCategory((prev) => !prev);
			setIsOpenCity(false);
			setIsOpenGender(false);
			setIsOpenSubCategory(false);
		};

		const handleSelectCategory = (value: string) => {
			setOptionsCategory((prev) =>
				prev.map((opt) =>
					opt.id === value ? { ...opt, checked: !opt.checked } : opt
				)
			);
			setIsOpenGender(false);
			setIsOpenCity(false);
			setIsOpenSubCategory(false);
		};

		const handleToggleSubCategory = () => {
			if (optionsCategory.some((opt) => opt.checked)) {
				setIsOpenSubCategory((prev) => !prev);
			}
			setIsOpenCity(false);
			setIsOpenGender(false);
			setIsOpenCategory(false);
		};

		const handleSelectSubCategory = (value: string) => {
			setOptionsSubCategory((prev) =>
				prev.map((opt) =>
					opt.id === value ? { ...opt, checked: !opt.checked } : opt
				)
			);
			setIsOpenGender(false);
			setIsOpenCity(false);
			setIsOpenCategory(false);
		};

		return (
			<StepTwoUI
				user={userData}
				isEnabled={isEnabled}
				city={city}
				gender={gender}
				category={optionsCategory}
				subCategory={optionsSubCategory}
				isOpenCity={isOpenCity}
				isOpenGender={isOpenGender}
				isOpenCategory={isOpenCategory}
				isOpenSubCategory={isOpenSubCategory}
				handleFileChange={handleAddPhoto}
				onChange={handleChange}
				onNext={handleNext}
				onBack={handleBack}
				onClearCity={handleClearCity}
				onClickCity={handleClickCity}
				onSelectCity={handleSelectCity}
				onInputChangeCity={handleInputChangeCity}
				onToggleGender={handleToggleGender}
				onSelectGender={handleSelectGender}
				onInputDate={handleDate}
				onSelectCategory={handleSelectCategory}
				onToggleCategory={handleToggleCategory}
				onSelectSubCategory={handleSelectSubCategory}
				onToggleSubCategory={handleToggleSubCategory}
			/>
		);
	},
};
