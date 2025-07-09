import type { TUserType } from '../../widgets/Registration/StepTwo/type';

export type TRegistrationCities = {
	text: string;
}[];

export type TRegistrationCategories = {
	text: string;
	value: string;
	id: string;
	checked: boolean;
}[];

export type TRegistrationSubCategories = {
	text: string;
	value: string;
	id: string;
	checked: boolean;
}[];

/*
export type TStepTwoData = {
	user: TUserType;
	isActiveButtonNext: boolean;
};

export type TStepThreeData = {
	skillName: string;
	skillDescription: string;
	selectedSubcategoryText: string;
	selectedCategoryText: string;
	isActiveButtonNext: boolean;
	images: string[];
};
*/
type TUtilsData = {
	cities: TRegistrationCities;
	categories: TRegistrationCategories;
	subcategories: TRegistrationSubCategories;
};

/**
 * valueName: тип значения, которое будет изменяться (имейл, имя, город и т.п.)
 * value: значение, которое будет изменяться
 *
 * Пример:
 * Нужно изменить в стейте поле email, а поле email изменяется в первом этапе =>
 *
 * => onChangeValueInStepOne("email", "newEmail@gmail.com");
 * */
type OnChangeFunction<T, S> = (valueName: T, value: S) => void;

export type TStepTwoValues =
	| 'userName'
	| 'city'
	| 'gender'
	| 'category'
	| 'subcategory'
	| 'photo'
	| 'date';
export type TStepThreeValues =
	| 'skillName'
	| 'skillDescription'
	| 'category'
	| 'subcategory'
	| 'images';

export default interface RegistrationProps {
	onChangeValueInStepOne: OnChangeFunction<
		'email&password',
		{ email: string; password: string }
	>;
	onChangeValueInStepTwo: OnChangeFunction<TStepTwoValues, string>;
	onChangeValueInStepThree: OnChangeFunction<TStepThreeValues, string>;
	// Значения полей для второго этапа (город, дата рождения и т.п.)
	user: TUserType;
	skillName: string;
	skillDescription: string;
	selectedSubcategoryText: string;
	selectedCategoryText: string;
	isDoneStepTwo?: boolean;
	isDoneStepThree?: boolean;
	images: string[];
	// Данные, необходимые для выбора города, категории и т.п.
	utilsData: TUtilsData;
	step: number;
	onNextStep: () => void;
	onPrevStep: () => void;
}
