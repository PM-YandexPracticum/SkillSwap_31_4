import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegistrationPage } from '../../pages/Registration/RegistrationPage';
import { useSelector, useDispatch } from '../../services/store';
import {
	registerUserStepOne,
	registerUserStepTwo,
	registerUserStepThree,
	getCities,
	getCategories,
	getSubcategories,
} from '../../features/auth/thunk';
import { uploadPhotos } from '../../features/upload/uploadSlice';
import {
	getValidationErrors,
	getUserData,
	getSelectedCategoryText,
	getSelectedSubcategoryText,
	getSkillDescription,
	getImages,
	getSkillName,
	getCitiesData,
	getCategoriesData,
	getSubcategoriesData,
	RegistrationActions,
	getFormattedWantsToLearn,
	getFormattedCanTeach,
} from '../../features/auth/registrationSlice';
import type {
	TStepTwoValues,
	TStepThreeValues,
} from '../../pages/Registration/type';

export const Registration = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getCities());
		dispatch(getCategories());
		dispatch(getSubcategories());
	}, [dispatch]);

	const skillName = useSelector(getSkillName);
	const skillDescription = useSelector(getSkillDescription);
	const selectedSubcategoryText = useSelector(getSelectedSubcategoryText);
	const selectedCategoryText = useSelector(getSelectedCategoryText);
	const images = useSelector(getImages);
	const user = useSelector(getUserData);
	const validationErrors = useSelector(getValidationErrors);
	const cities = useSelector(getCitiesData);
	const categories = useSelector(getCategoriesData);
	const subcategories = useSelector(getSubcategoriesData);
	const formattedWantsToLearn = useSelector(getFormattedWantsToLearn);
	const formattedCanTeach = useSelector(getFormattedCanTeach);

	const utilsData = {
		cities: cities || [],
		categories: categories || [],
		subcategories: subcategories || [],
	};

	const [step, setStep] = useState(1);

	const onChangeValueInStepTwo = (
		valueName: TStepTwoValues,
		value: string | File[]
	) => {
		switch (valueName) {
			case 'userName': {
				dispatch(RegistrationActions.setUserName(value as string));
				break;
			}
			case 'city': {
				dispatch(RegistrationActions.setCity(value as string));
				break;
			}
			case 'gender': {
				dispatch(RegistrationActions.setGender(value as string));
				break;
			}
			case 'photo': {
				const file = value[0] as File;
				dispatch(RegistrationActions.setPhoto(file));
				break;
			}
			case 'date': {
				dispatch(RegistrationActions.setDateBirthday(value as string));
				break;
			}
			case 'category': {
				dispatch(RegistrationActions.setWantsToLearnCat(value as string));
				break;
			}
			case 'subcategory': {
				dispatch(RegistrationActions.setWantsToLearnSubCat(value as string));
				break;
			}
			default:
				break;
		}
	};
	const onChangeValueInStepThree = (
		type: TStepThreeValues,
		value: string | File[]
	) => {
		switch (type) {
			case 'skillName': {
				dispatch(RegistrationActions.setSkillName(value as string));
				break;
			}
			case 'skillDescription': {
				dispatch(RegistrationActions.setSkillDescription(value as string));
				break;
			}
			case 'category': {
				dispatch(RegistrationActions.setSelectedCategoryText(value as string));
				break;
			}
			case 'subcategory': {
				dispatch(
					RegistrationActions.setSelectedSubcategoryText(value as string)
				);
				break;
			}
			case 'images': {
				dispatch(RegistrationActions.setImages(value as File[]));
				break;
			}
			default:
				break;
		}
	};

	const onChangeValueInStepOne = (
		valueName: 'email&password',
		value: { email: string; password: string }
	) => {
		dispatch(registerUserStepOne(value));
	};

	const getFileIntoUrl = (file: File | null) => {
		if (!file) {
			return '';
		}
		const url = URL.createObjectURL(file);
		return url;
	};

	const onNextStep = async () => {
		switch (step) {
			case 1: {
				setStep(2);
				break;
			}
			case 2: {
				setStep(3);
				break;
			}
			case 3: {
				setStep(4);
				break;
			}
			case 4: {
				if (user.photo) {
					dispatch(uploadPhotos([user.photo]));
				}
				dispatch(
					registerUserStepTwo({
						userId: user.userId!,
						name: user.userName,
						city: user.city,
						gender: user.gender,
						photo: getFileIntoUrl(user.photo),
						birthDate: user.dateBirthday,
						wantsToLearn: formattedWantsToLearn,
					})
				);
				dispatch(uploadPhotos(images));
				const imagesUrl = images.map((image) => getFileIntoUrl(image));
				dispatch(
					registerUserStepThree({
						userId: user.userId!,
						title: skillName,
						description: skillDescription,
						photo: imagesUrl,
						canTeach: formattedCanTeach,
					})
				);
				setStep(5);
				break;
			}
			case 5: {
				setStep(1);
				navigate('/');
				break;
			}
			default:
				break;
		}
	};
	const onPrevStep = () => {
		setStep(step - 1 > 1 ? step - 1 : 1);
	};
	return (
		/** Ну вот теперь все собрали */
		<RegistrationPage
			onNextStep={onNextStep}
			onPrevStep={onPrevStep}
			utilsData={utilsData}
			user={{
				...user,
				canTeach: '',
				id: 0,
				dateBirthday: new Date(user.dateBirthday),
				photo: getFileIntoUrl(user.photo),
			}}
			skillName={skillName}
			skillDescription={skillDescription}
			selectedSubcategoryText={selectedSubcategoryText}
			selectedCategoryText={selectedCategoryText}
			images={images.map((item) => getFileIntoUrl(item))}
			onChangeValueInStepOne={onChangeValueInStepOne}
			onChangeValueInStepTwo={onChangeValueInStepTwo}
			onChangeValueInStepThree={onChangeValueInStepThree}
			step={step}
			isDoneStepTwo={
				step === 2 &&
				validationErrors.userName === '' &&
				validationErrors.dateBirthday === '' &&
				validationErrors.city === '' &&
				validationErrors.gender === '' &&
				validationErrors.wantsToLearnCat === '' &&
				validationErrors.wantsToLearnSubCat === ''
			}
			isDoneStepThree={
				step === 3 &&
				validationErrors.skillName === '' &&
				validationErrors.skillDescription === '' &&
				validationErrors.images === '' &&
				validationErrors.selectedSubcategoryText === '' &&
				validationErrors.selectedCategoryText === ''
			}
		/>
	);
};
