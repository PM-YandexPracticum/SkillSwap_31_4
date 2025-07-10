import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../services/rootReducer';
import { uploadPhotos as apiUploadPhotos } from '../../api/api';
import type { TUploadResponse } from '../../api/type';

interface UploadState {
	urls: string[];
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: UploadState = {
	urls: [],
	loading: 'idle',
	error: null,
};

export const uploadPhotos = createAsyncThunk<
	string[],
	File[],
	{ rejectValue: string }
>('upload/uploadPhotos', async (files, { rejectWithValue }) => {
	try {
		const response = (await apiUploadPhotos(files)) as TUploadResponse;
		return response.urls;
	} catch (err) {
		if (err instanceof Error) {
			return rejectWithValue(err.message);
		}
		return rejectWithValue('An unknown error occurred');
	}
});

const uploadSlice = createSlice({
	name: 'upload',
	initialState,
	reducers: {
		clearUrls(state) {
			state.urls = [];
		},
		addUrl(state, action: PayloadAction<string>) {
			state.urls.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(uploadPhotos.pending, (state) => {
				state.loading = 'pending';
				state.error = null;
			})
			.addCase(uploadPhotos.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.urls = [...state.urls, ...action.payload];
			})
			.addCase(uploadPhotos.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.payload || 'Failed to upload photos';
			});
	},
});

export const { clearUrls, addUrl } = uploadSlice.actions;

export const selectUploadUrls = (state: RootState) => state.upload.urls;
export const selectUploadLoading = (state: RootState) => state.upload.loading;
export const selectUploadError = (state: RootState) => state.upload.error;

export default uploadSlice.reducer;
