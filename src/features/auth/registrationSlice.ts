/* eslint-disable no-param-reassign */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
	registerUserStepOne,
	registerUserStepThree,
	registerUserStepTwo,
	getCities,
	getCategories,
	getSubcategories,
} from './thunk';

function baseValidation(value: string): string {
	if (value.length === 0) {
		return 'Поле не может быть пустым';
	}
	return '';
}

type TId = string;

type TUser = {
	userId: string | null;
	userName: TRegistrationValue<string>;
	city: TRegistrationValue<string>;
	age: TRegistrationValue<number>;
	dateBirthday: TRegistrationValue<string>;
	gender: TRegistrationValue<string>;
	about: TRegistrationValue<string>;
	wantsToLearnCat: TRegistrationValue<string[]>;
	wantsToLearnSubCat: TRegistrationValue<string[]>;
	photo: TRegistrationValue<string>;
};

type TRegistrationValue<T> = {
	value: T;
	error: string;
};

type TCitiesData = TCity[];

type TCity = {
	text: string;
};

type TCategory = {
	value: string;
	text: string;
	id: string;
	checked: boolean;
};

type TCategoriesData = TCategory[];

export interface TRegistrationState {
	user: TUser;
	skillName: TRegistrationValue<string>;
	skillDescription: TRegistrationValue<string>;
	selectedSubcategoryText: TRegistrationValue<string>;
	selectedCategoryText: TRegistrationValue<string>;
	images: TRegistrationValue<string[]>;
	cities: TCitiesData | null;
	categories: TCategoriesData | null;
	subcategories: TCategoriesData | null;
	stepOneApiError: boolean;
	stepTwoApiError: boolean;
	stepThreeApiError: boolean;
}

const initialState: TRegistrationState = {
	user: {
		userId: null,
		userName: {
			value: '',
			error: 'Поле пустое',
		},
		city: {
			value: '',
			error: 'Поле пустое',
		},
		age: {
			value: 0,
			error: 'Поле пустое',
		},
		dateBirthday: {
			value: '',
			error: 'Поле пустое',
		},
		gender: {
			value: '',
			error: 'Поле пустое',
		},
		about: {
			value: '',
			error: 'Поле пустое',
		},
		wantsToLearnCat: {
			value: [],
			error: 'Поле пустое',
		},
		wantsToLearnSubCat: {
			value: [],
			error: 'Поле пустое',
		},
		photo: {
			value: '',
			error: 'Поле пустое',
		},
	},
	skillName: {
		value: '',
		error: 'Поле пустое',
	},
	skillDescription: {
		value: '',
		error: 'Поле пустое',
	},
	selectedSubcategoryText: {
		value: '',
		error: 'Поле пустое',
	},
	selectedCategoryText: {
		value: '',
		error: 'Поле пустое',
	},
	images: {
		value: [],
		error: '',
	},
	cities: null,
	categories: null,
	subcategories: null,
	stepOneApiError: false,
	stepTwoApiError: false,
	stepThreeApiError: false,
};

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.user.userName.value = action.payload;
			state.user.userName.error = baseValidation(action.payload);
		},
		setCity: (state, action: PayloadAction<string>) => {
			state.user.city.value = action.payload;
			state.user.city.error = baseValidation(action.payload);
		},
		setDateBirthday: (state, action: PayloadAction<string>) => {
			state.user.dateBirthday.value = action.payload;
			state.user.dateBirthday.error = baseValidation(action.payload);
		},
		setGender: (state, action: PayloadAction<string>) => {
			state.user.gender.value = action.payload;
			state.user.gender.error = baseValidation(action.payload);
		},
		setAbout: (state, action: PayloadAction<string>) => {
			state.user.about.value = action.payload;
			state.user.about.error = baseValidation(action.payload);
		},
		setWantsToLearnCat: (state, action: PayloadAction<TId>) => {
			if (state.user.wantsToLearnCat.value.includes(action.payload)) {
				state.user.wantsToLearnCat.value =
					state.user.wantsToLearnCat.value.filter(
						(id) => id !== action.payload
					);
			} else {
				state.user.wantsToLearnCat.value.push(action.payload);
			}
			state.categories = state.categories
				? state.categories.map((category) => {
						if (category.id === action.payload) {
							return {
								...category,
								checked: !category.checked,
							};
						}
						return category;
					})
				: state.categories;
			if (state.user.wantsToLearnCat.value.length === 0) {
				state.user.wantsToLearnCat.error = 'Выберите хотя бы одну категорию';
			} else {
				state.user.wantsToLearnCat.error = '';
			}
		},
		setWantsToLearnSubCat: (state, action: PayloadAction<TId>) => {
			if (state.user.wantsToLearnSubCat.value.includes(action.payload)) {
				state.user.wantsToLearnSubCat.value =
					state.user.wantsToLearnSubCat.value.filter(
						(id) => id !== action.payload
					);
			} else {
				state.user.wantsToLearnSubCat.value.push(action.payload);
			}
			state.subcategories = state.subcategories
				? state.subcategories.map((subcategory) => {
						if (subcategory.id === action.payload) {
							return {
								...subcategory,
								checked: !subcategory.checked,
							};
						}
						return subcategory;
					})
				: state.subcategories;
			if (state.user.wantsToLearnSubCat.value.length === 0) {
				state.user.wantsToLearnSubCat.error =
					'Выберите хотя бы одну подкатегорию';
			} else {
				state.user.wantsToLearnSubCat.error = '';
			}
		},
		setPhoto: (state, action: PayloadAction<string>) => {
			console.log(action.payload);
			state.user.photo.value = action.payload;
		},
		setSkillName: (state, action: PayloadAction<string>) => {
			state.skillName.value = action.payload;
			state.skillName.error = baseValidation(action.payload);
		},
		setSkillDescription: (state, action: PayloadAction<string>) => {
			state.skillDescription.value = action.payload;
			state.skillDescription.error = baseValidation(action.payload);
		},
		setSelectedSubcategoryText: (state, action: PayloadAction<string>) => {
			state.selectedSubcategoryText.value = action.payload;
			state.selectedSubcategoryText.error = baseValidation(action.payload);
		},
		setSelectedCategoryText: (state, action: PayloadAction<string>) => {
			state.selectedCategoryText.value = action.payload;
			state.selectedCategoryText.error = baseValidation(action.payload);
		},
		setImages: (state, action: PayloadAction<string[]>) => {
			state.images.value = action.payload;
			state.images.error = '';
		},
	},
	selectors: {
		getUserData: (state: TRegistrationState) => {
			type UserValue<T> = T extends TRegistrationValue<infer U> ? U : T;

			type UserFromValues = {
				[K in keyof TUser]: UserValue<TUser[K]>;
			};
			const userValues: UserFromValues = {
				userId: state.user.userId,
				age: state.user.age.value,
				userName: state.user.userName.value,
				city: state.user.city.value,
				dateBirthday: state.user.dateBirthday.value,
				gender: state.user.gender.value,
				about: state.user.about.value,
				wantsToLearnCat: state.user.wantsToLearnCat.value,
				wantsToLearnSubCat: state.user.wantsToLearnSubCat.value,
				photo: state.user.photo.value,
			};
			return userValues;
		},
		getValidationErrors: (state: TRegistrationState) => {
			type UserFromErrors = {
				[K in keyof TUser]: string;
			} & {
				skillName: string;
				skillDescription: string;
				selectedSubcategoryText: string;
				selectedCategoryText: string;
				images: string;
			};
			const errors: UserFromErrors = {
				userId: '',
				age: state.user.age.error,
				userName: state.user.userName.error,
				city: state.user.city.error,
				dateBirthday: state.user.dateBirthday.error,
				gender: state.user.gender.error,
				about: state.user.about.error,
				wantsToLearnCat: state.user.wantsToLearnCat.error,
				wantsToLearnSubCat: state.user.wantsToLearnSubCat.error,
				photo: state.user.photo.error,
				skillName: state.skillName.error,
				skillDescription: state.skillDescription.error,
				selectedSubcategoryText: state.selectedSubcategoryText.error,
				selectedCategoryText: state.selectedCategoryText.error,
				images: state.images.error,
			};
			return errors;
		},
		getStepOneApiError: (state: TRegistrationState) => state.stepOneApiError,
		getStepTwoApiError: (state: TRegistrationState) => state.stepTwoApiError,
		getStepThreeApiError: (state: TRegistrationState) =>
			state.stepThreeApiError,
		getSkillName: (state: TRegistrationState) => state.skillName.value,
		getSkillDescription: (state: TRegistrationState) =>
			state.skillDescription.value,
		getSelectedSubcategoryText: (state: TRegistrationState) =>
			state.selectedSubcategoryText.value,
		getSelectedCategoryText: (state: TRegistrationState) =>
			state.selectedCategoryText.value,
		getImages: (state: TRegistrationState) => state.images.value,
		getCitiesData: (state: TRegistrationState) => state.cities,
		getCategoriesData: (state: TRegistrationState) => state.categories,
		getSubcategoriesData: (state: TRegistrationState) => state.subcategories,
	},
	extraReducers: (builder) => {
		builder.addCase(registerUserStepOne.rejected, (state) => {
			console.log('STEP ONE REJECTED');
			state.stepOneApiError = true;
		});
		builder.addCase(registerUserStepOne.fulfilled, (state, action) => {
			console.log('STEP ONE FULFILLED');
			state.user.userId = (action.payload as { userId: string })
				.userId as string;
			state.stepOneApiError = false;
		});
		builder.addCase(registerUserStepTwo.rejected, (state) => {
			console.log('STEP TWO REJECTED');
			state.stepTwoApiError = true;
		});
		builder.addCase(registerUserStepTwo.fulfilled, (state) => {
			console.log('STEP TWO FULFILLED');
			state.stepTwoApiError = false;
		});
		builder.addCase(registerUserStepThree.rejected, (state) => {
			console.log('STEP THREE REJECTED');
			state.stepThreeApiError = true;
		});
		builder.addCase(registerUserStepThree.fulfilled, (state) => {
			console.log('STEP THREE FULFILLED');
			state.stepThreeApiError = false;
		});
		builder.addCase(getCities.fulfilled, (state, action) => {
			state.cities = action.payload.map((city) => ({
				text: city,
			}));
		});
		builder.addCase(getCities.rejected, (state) => {
			state.cities = [];
		});
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.categories = action.payload.data.map((category) => ({
				text: category,
				value: category,
				id: uuidv4(),
				checked: false,
			}));
		});
		builder.addCase(getCategories.rejected, (state) => {
			state.categories = [];
		});
		builder.addCase(getSubcategories.fulfilled, (state, action) => {
			state.subcategories = action.payload.data.map((subcategory) => ({
				text: subcategory,
				value: subcategory,
				id: uuidv4(),
				checked: false,
			}));
		});
		builder.addCase(getSubcategories.rejected, (state) => {
			state.subcategories = [];
		});
	},
});

export const RegistrationActions = registrationSlice.actions;
export const {
	getUserData,
	getValidationErrors,
	getStepOneApiError,
	getStepTwoApiError,
	getStepThreeApiError,
	getSkillName,
	getSkillDescription,
	getSelectedSubcategoryText,
	getSelectedCategoryText,
	getImages,
	getCitiesData,
	getCategoriesData,
	getSubcategoriesData,
} = registrationSlice.selectors;
export const registrationSliceReducer = registrationSlice.reducer;
