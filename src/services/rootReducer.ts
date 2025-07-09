import { combineReducers } from '@reduxjs/toolkit';
import { userSliceReducer } from '../features/user/userSlice';
import { registrationSliceReducer } from '../features/auth/registrationSlice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	registration: registrationSliceReducer,
});
