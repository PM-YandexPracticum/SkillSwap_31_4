import type { TUserType } from '../../widgets/Registration/StepTwo/type';

type TStepTwo = {
	user: TUserType;
	isActiveButtonNext: boolean;
};

type TStepThree = {
	skillName: string;
	skillDescription: string;
	selectedSubcategoryText: string;
	selectedCategoryText: string;
	isActiveButtonNext: boolean;
	images: string[];
};

type TUtilsData = {
	cities: string[];
	categories: string[];
	subcategories: string[];
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

export default interface RegistrationProps {
	onChangeValueInStepOne: OnChangeFunction<string, string>;
	onChangeValueInStepTwo: OnChangeFunction<string, string | Date>;
	onChangeValueInStepThree: OnChangeFunction<string, string>;
	// Значения полей для второго этапа (город, дата рождения и т.п.)
	stepTwoData: TStepTwo;
	// Значения полей для третьего этапа (название навыка, описание и т.п.)
	stepThreeData: TStepThree;
	// Данные, необходимые для выбора города, категории и т.п.
	utilsData: TUtilsData;
	step: number;
	onNextStep: () => void;
	onPrevStep: () => void;
}
