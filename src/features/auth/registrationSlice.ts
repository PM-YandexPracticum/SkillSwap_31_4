/* eslint-disable no-param-reassign */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type TRegistrationValue<T> = {
	value: T;
	error: string;
};

type StepTwo = {
	userName: TRegistrationValue<string>;
	city: TRegistrationValue<string>;
	age: TRegistrationValue<number>;
	dateBirthday: TRegistrationValue<Date>;
	gender: TRegistrationValue<string>;
	about: TRegistrationValue<string>;
	wantsToLearnCat: TRegistrationValue<string[]>;
	wantsToLearnSubCat: TRegistrationValue<string[]>;
	photo: TRegistrationValue<string>;
};

type StepThree = {
	skillName: TRegistrationValue<string>;
	skillDescription: TRegistrationValue<string>;
	selectedSubcategoryText: TRegistrationValue<string>;
	selectedCategoryText: TRegistrationValue<string>;
};
export interface TRegistrationState {
	stepTwo: StepTwo;
	stepThree: StepThree;
}

const initialState: TRegistrationState = {
	stepTwo: {
		userName: {
			value: '',
			error: '',
		},
		city: {
			value: '',
			error: '',
		},
		age: {
			value: 0,
			error: '',
		},
		dateBirthday: {
			value: new Date(),
			error: '',
		},
		gender: {
			value: '',
			error: '',
		},
		about: {
			value: '',
			error: '',
		},
		wantsToLearnCat: {
			value: [],
			error: '',
		},
		wantsToLearnSubCat: {
			value: [],
			error: '',
		},
		photo: {
			value: '',
			error: '',
		},
	},
	stepThree: {
		skillName: {
			value: '',
			error: '',
		},
		skillDescription: {
			value: '',
			error: '',
		},
		selectedSubcategoryText: {
			value: '',
			error: '',
		},
		selectedCategoryText: {
			value: '',
			error: '',
		},
	},
};

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.stepTwo.userName.value = action.payload;
		},
		setCity: (state, action: PayloadAction<string>) => {
			state.stepTwo.city.value = action.payload;
		},
		setDateBirthday: (state, action: PayloadAction<Date>) => {
			state.stepTwo.dateBirthday.value = action.payload;
		},
		setGender: (state, action: PayloadAction<string>) => {
			state.stepTwo.gender.value = action.payload;
		},
		setAbout: (state, action: PayloadAction<string>) => {
			state.stepTwo.about.value = action.payload;
		},
		addWantsToLearnCat: (state, action: PayloadAction<string>) => {
			state.stepTwo.wantsToLearnCat.value.push(action.payload);
		},
		deleteWantsToLearnCat: (state, action: PayloadAction<string>) => {
			state.stepTwo.wantsToLearnCat.value =
				state.stepTwo.wantsToLearnCat.value.filter(
					(cat) => cat !== action.payload
				);
		},
		addWantsToLearnSubCat: (state, action: PayloadAction<string>) => {
			state.stepTwo.wantsToLearnSubCat.value.push(action.payload);
		},
		deleteWantsToLearnSubCat: (state, action: PayloadAction<string>) => {
			state.stepTwo.wantsToLearnSubCat.value =
				state.stepTwo.wantsToLearnSubCat.value.filter(
					(subCat) => subCat !== action.payload
				);
		},
		setPhoto: (state, action: PayloadAction<string>) => {
			state.stepTwo.photo.value = action.payload;
		},
		setSkillName: (state, action: PayloadAction<string>) => {
			state.stepThree.skillName.value = action.payload;
		},
		setSkillDescription: (state, action: PayloadAction<string>) => {
			state.stepThree.skillDescription.value = action.payload;
		},
		setSelectedSubcategoryText: (state, action: PayloadAction<string>) => {
			state.stepThree.selectedSubcategoryText.value = action.payload;
		},
		setSelectedCategoryText: (state, action: PayloadAction<string>) => {
			state.stepThree.selectedCategoryText.value = action.payload;
		},
	},
	selectors: {
		getStepTwo: (state: TRegistrationState) => state.stepTwo,
		getStepThree: (state: TRegistrationState) => state.stepThree,
	},
});

export const RegistrationAction = registrationSlice.actions;
export const RegistrationSelectors = registrationSlice.selectors;
export default registrationSlice.reducer;
