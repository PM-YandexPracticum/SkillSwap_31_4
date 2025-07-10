import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getNewExchangeRequests,
	getMyExchangeRequests,
	markExchangeRequestsAsRead,
	sendExchangeRequest,
} from '../../api/api';
import type { TExchange } from '../../api/type';

// Получить новые запросы (isNew = true)
export const getNewExchanges = createAsyncThunk<TExchange[], string>(
	'exchanges/newExchanges',
	async (token: string) => {
		const response = await getNewExchangeRequests(token);
		return response as TExchange[];
	}
);

// Получить все мои запросы
export const getMyExchanges = createAsyncThunk<TExchange[], string>(
	'exchanges/myExchanges',
	async (token: string) => {
		const response = await getMyExchangeRequests(token);
		return response as TExchange[];
	}
);

// Отметить все уведомления как прочитанные
export const markAllNotificationsAsRead = createAsyncThunk(
	'notifications/AllNotificationsAsRead',
	async (token: string) => {
		await markExchangeRequestsAsRead(token);
	}
);

// Отправить запрос на обмен
export const sendExchange = createAsyncThunk<
	TExchange,
	{ token: string; toUserId: string; offerDetails: string }
>('exchanges/sendExchange', async ({ token, toUserId, offerDetails }) => {
	const data = await sendExchangeRequest(token, toUserId, offerDetails);
	return data as TExchange;
});
