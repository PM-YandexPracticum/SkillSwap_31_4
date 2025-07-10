import type { TExchange } from 'src/api/type';
import { createSlice } from '@reduxjs/toolkit';
import {
	getNewExchanges,
	getMyExchanges,
	markAllNotificationsAsRead,
	sendExchange,
} from './thunks';

type TNotificationState = {
	incoming: TExchange[]; // входящие (isNew = true)
	outgoing: TExchange[]; // мои отправленные
	loading: boolean;
	error: string | null;
};

const initialState: TNotificationState = {
	incoming: [],
	outgoing: [],
	loading: true,
	error: null,
};

const notificationsSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {},
	selectors: {
		getIncomingSelector: (state) => state.incoming,
		getOutgoingSelector: (state) => state.outgoing,
		notificationsLoadingSelector: (state) => state.loading,
		notificationsErrorSelector: (state) => state.error,
	},
	extraReducers: (builder) => {
		builder
			// загрузка входящих заявок
			.addCase(getNewExchanges.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getNewExchanges.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Ошибка загрузки входящих';
			})
			.addCase(getNewExchanges.fulfilled, (state, action) => {
				state.loading = false;
				state.incoming = action.payload;
			})
			// загрузка исходящих заявок
			.addCase(getMyExchanges.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getMyExchanges.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Ошибка загрузки исходящих';
			})
			.addCase(getMyExchanges.fulfilled, (state, action) => {
				state.loading = false;
				state.outgoing = action.payload;
			})
			// Очистка уведомлений
			.addCase(markAllNotificationsAsRead.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(markAllNotificationsAsRead.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Ошибка очистки уведомлений';
			})
			.addCase(markAllNotificationsAsRead.fulfilled, (state) => {
				state.loading = false;
				state.incoming = [];
			})
			// отправка заявки
			.addCase(sendExchange.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(sendExchange.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Ошибка отправки заявки';
			})
			.addCase(sendExchange.fulfilled, (state, action) => {
				state.loading = false;
				state.outgoing.unshift(action.payload);
			});
	},
});

export const {
	getIncomingSelector,
	getOutgoingSelector,
	notificationsLoadingSelector,
	notificationsErrorSelector,
} = notificationsSlice.selectors;
export const notificationsSliceReducer = notificationsSlice.reducer;
