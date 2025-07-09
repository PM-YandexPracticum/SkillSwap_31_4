import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	deleteLike,
	getUsersApi,
	getUsersIdApi,
	postLike,
} from '../../api/api';
import type { TUser } from '../../api/type';

export const getUsers = createAsyncThunk('users/getUsers', async () =>
	getUsersApi()
);

export const getUserById = createAsyncThunk(
	'users/getUserById',
	async (id: string) => getUsersIdApi(id)
);

export const likeUser = createAsyncThunk<
	TUser[],
	{ id: string; token: string }
>('users/likeUser', async ({ id, token }) => {
	const response = await postLike(id, token);
	return response.data;
});

export const deleteLikeUser = createAsyncThunk<
	TUser[],
	{ id: string; token: string }
>('users/deleteLikeUser', async ({ id, token }) => {
	const response = await deleteLike(id, token);
	return response.data;
});
