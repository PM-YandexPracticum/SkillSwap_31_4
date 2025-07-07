import type { TUser } from '@api/type';
import { createSlice } from '@reduxjs/toolkit';
import { deleteLikeUser, getUserById, getUsers, likeUser } from './thunk';

type TUserState = {
	users: TUser[];
	user: TUser | null;
	loading: boolean;
	error: string | null;
};

const initialState: TUserState = {
	users: [],
	user: null,
	loading: true,
	error: null,
};

export const usersSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	selectors: {
		getUsersSelector: (state) => state.users,
		getUserByIdSelector: (state) => state.user,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.loading = true;
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error?.message ?? null;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.users = action.payload;
			})

			.addCase(getUserById.pending, (state) => {
				state.loading = false;
			})
			.addCase(getUserById.rejected, (state, action) => {
				state.error = action.error?.message ?? null;
			})
			.addCase(getUserById.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})

			.addCase(likeUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(likeUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error?.message ?? null;
			})
			.addCase(likeUser.fulfilled, (state) => {
				state.loading = false;
			})

			.addCase(deleteLikeUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(deleteLikeUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error?.message ?? null;
			})
			.addCase(deleteLikeUser.fulfilled, (state) => {
				state.loading = false;
			});
	},
});

export const { getUsersSelector, getUserByIdSelector } = usersSlice.selectors;
export const userSliceReducer = usersSlice.reducer;
