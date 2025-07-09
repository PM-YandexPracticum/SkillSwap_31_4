import { combineReducers } from '@reduxjs/toolkit';
import { userSliceReducer } from '../entities/userSlice/userSlice';
import uploadReducer from '../features/upload/uploadSlice';
import { filtersReducer } from '../entities/filtersSlice/filterSlice';
import { notificationsSliceReducer } from '../features/notification/notificationsSlice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	upload: uploadReducer,
	filters: filtersReducer,
	notifications: notificationsSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
