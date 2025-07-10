import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	registerStep1,
	registerStep2,
	registerStep3AddCard,
} from '../../api/api';
import { cities } from '../../shared/lib/RegistrationUtils/cities';
import { categories } from '../../shared/lib/RegistrationUtils/categories';
import { subcategories } from '../../shared/lib/RegistrationUtils/subcategories';

export const registerUserStepOne = createAsyncThunk(
	'registration/registerUserStepOne',
	async (data: { email: string; password: string }) =>
		registerStep1(data.email, data.password)
);

type TRegisterStep3AddCard = {
	userId: string;
	title: string;
	description: string;
	photo?: string[];
	canTeach: { name: string; categoryName: string }[];
};

type TRegisterStep2 = {
	userId: string;
	name: string;
	city: string;
	gender: string;
	photo?: string;
	birthDate: string;
	wantsToLearn: { name: string; categoryName: string }[];
};

export const registerUserStepTwo = createAsyncThunk(
	'registration/registerUserStepTwo',
	async (data: TRegisterStep2) => registerStep2(data)
);

export const registerUserStepThree = createAsyncThunk(
	'registration/registerUserStepThree',
	async (data: TRegisterStep3AddCard) => registerStep3AddCard(data)
);

export const getCities = createAsyncThunk(
	'registration/getCities',
	async () =>
		// Если подключаем реальный API для получения городов, заменить
		cities
);

export const getCategories = createAsyncThunk(
	'registration/getCategories',
	async () =>
		// Если подключаем реальный API для получения категорий, заменить
		({
			data: categories,
			success: true,
		})
);

export const getSubcategories = createAsyncThunk(
	'registration/getSubcategories',
	async () =>
		// Если подключаем реальный API для получения подкатегорий, заменить
		({
			data: subcategories,
			success: true,
		})
);
