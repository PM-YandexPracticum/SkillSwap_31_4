import { combineReducers } from '@reduxjs/toolkit';
import { userSliceReducer } from '../entities/userSlice/userSlice';
import uploadReducer from '../features/upload/uploadSlice';
import { filtersReducer } from '../entities/filtersSlice/filterSlice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	upload: uploadReducer,
	filters: filtersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
