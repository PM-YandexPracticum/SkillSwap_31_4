import type { TUser } from './type';

const URL = import.meta.env.VITE_API_URL;

const checkResponse = <T>(res: Response): Promise<T> =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

const getAuthHeaders = (token: string) => ({
	'Content-Type': 'application/json',
	Authorization: `${token}`,
});

type TServerResponse<T> = {
	success: boolean;
} & T;

type TUsersResponse = TServerResponse<{
	data: TUser[];
}>;

type TRegisterStep2 = TServerResponse<{
	userId: string;
	name: string;
	city: string;
	gender: string;
	photo?: string;
	birthDate: string;
	wantsToLearn: { name: string; categoryName: string }[];
}>;

type TRegisterStep3AddCard = TServerResponse<{
	userId: string;
	title: string;
	description: string;
	photo?: string[];
	canTeach: { name: string; categoryName: string }[];
}>;

// Получения пользователей

export const getUsersApi = () =>
	fetch(`${URL}/api/users`)
		.then((res) => checkResponse<TUsersResponse>(res))
		.then((data) => {
			if (data?.success) return data.data;
			return Promise.reject(data);
		});

// Получения пользователя по id

export const getUsersIdApi = (id: string) =>
	fetch(`${URL}/api/users/${id}`).then((res) =>
		checkResponse<TUsersResponse>(res)
	);

// Поставить лайк

export const postLike = (id: string, token: string) =>
	fetch(`${URL}/api/users/${id}/like`, {
		method: 'POST',
		headers: getAuthHeaders(token),
	}).then((res) => checkResponse<TUsersResponse>(res));

// Удалить лайк

export const deleteLike = (id: string, token: string) =>
	fetch(`${URL}/api/users/${id}/like`, {
		method: 'DELETE',
		headers: getAuthHeaders(token),
	}).then((res) => checkResponse<TUsersResponse>(res));

// Регистрация шаг 1

export const registerStep1 = (email: string, password: string) =>
	fetch(`${URL}/api/users/register/step1`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({ email, password }),
	}).then((res) => checkResponse(res));

// Регистрация шаг 2

export const registerStep2 = (data: TRegisterStep2) =>
	fetch(`${URL}/api/users/register/step2`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	}).then((res) => checkResponse(res));

// Регистрация шаг 3 добавление карточки

export const registerStep3AddCard = (data: TRegisterStep3AddCard) =>
	fetch(`${URL}/api/users/register/step3/cards`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	}).then((res) => checkResponse(res));

// Авторизация

export const login = (email: string, password: string) =>
	fetch(`${URL}/api/users/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({ email, password }),
	}).then((res) => checkResponse(res));

// Уведомления

// Получить новые запросы (isNew = true)
export const getNewExchangeRequests = (token: string) =>
	fetch(`${URL}/api/exchanges/new`, {
		headers: getAuthHeaders(token),
	}).then((res) => checkResponse(res));

// Получить все мои запросы
export const getMyExchangeRequests = (token: string) =>
	fetch(`${URL}/api/exchanges/my`, {
		headers: getAuthHeaders(token),
	}).then((res) => checkResponse(res));

// Отметить все уведомления как прочитанные
export const markExchangeRequestsAsRead = (token: string) =>
	fetch(`${URL}/api/exchanges/mark-read`, {
		method: 'PUT',
		headers: getAuthHeaders(token),
	}).then((res) => checkResponse(res));

// Отправить запрос на обмен
export const sendExchangeRequest = (
	token: string,
	to: string,
	offerDetails: string
) =>
	fetch(`${URL}/api/exchanges`, {
		method: 'POST',
		headers: getAuthHeaders(token),
		body: JSON.stringify({ to, offerDetails }),
	}).then((res) => checkResponse(res));

// Загрузка массива файлов (фото)
// files — массив File из input[type="file"]
export const uploadPhotos = (files: File[]) => {
	const formData = new FormData();
	files.forEach((file) => formData.append('photos', file));

	return fetch(`${URL}/upload/`, {
		method: 'POST',
		body: formData,
	}).then((res) => checkResponse(res));
};
