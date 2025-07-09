import { combineReducers } from '@reduxjs/toolkit';
import { userSliceReducer } from '../features/user/userSlice';
import { notificationsSliceReducer } from '../features/notificationsSlice/notificationsSlice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	notifications: notificationsSliceReducer,
});
