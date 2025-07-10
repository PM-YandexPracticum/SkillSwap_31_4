import { createSlice } from '@reduxjs/toolkit';
import type { TUser } from '../../api/type';
import { deleteLikeUser, getUserById, getUsers, likeUser } from './thunk';

type TUserState = {
	users: TUser[];
	user: TUser | null;
	loadingUsers: boolean;
	loadingCurrentUser: boolean;
	error: string | null;
};

const initialState: TUserState = {
	users: [],
	user: null,
	loadingUsers: true,
	loadingCurrentUser: false,
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
				state.loadingUsers = true;
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.loadingUsers = false;
				state.error = action.error?.message ?? null;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.loadingUsers = false;
				state.users = action.payload;
			})

			.addCase(getUserById.pending, (state) => {
				state.loadingCurrentUser = true;
			})
			.addCase(getUserById.rejected, (state, action) => {
				state.loadingCurrentUser = false;
				state.error = action.error?.message ?? null;
			})
			.addCase(getUserById.fulfilled, (state, action) => {
				state.loadingCurrentUser = false;
				state.user = action.payload;
			})

			.addCase(likeUser.pending, (state) => {
				state.loadingCurrentUser = true;
			})
			.addCase(likeUser.rejected, (state, action) => {
				state.loadingCurrentUser = false;
				state.error = action.error?.message ?? null;
			})
			.addCase(likeUser.fulfilled, (state) => {
				state.loadingCurrentUser = false;
			})

			.addCase(deleteLikeUser.pending, (state) => {
				state.loadingCurrentUser = true;
			})
			.addCase(deleteLikeUser.rejected, (state, action) => {
				state.loadingCurrentUser = false;
				state.error = action.error?.message ?? null;
			})
			.addCase(deleteLikeUser.fulfilled, (state) => {
				state.loadingCurrentUser = false;
			});
	},
});

export const { getUsersSelector, getUserByIdSelector } = usersSlice.selectors;
export const userSliceReducer = usersSlice.reducer;
