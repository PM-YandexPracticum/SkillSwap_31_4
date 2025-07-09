import { combineReducers } from '@reduxjs/toolkit';
import { userSliceReducer } from '../features/user/userSlice';
import uploadReducer from '../features/upload/uploadSlice';
import { notificationsSliceReducer } from '../features/notificationsSlice/notificationsSlice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	upload: uploadReducer,
	notifications: notificationsSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
