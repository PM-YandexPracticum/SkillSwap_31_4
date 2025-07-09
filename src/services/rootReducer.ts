import { combineReducers } from '@reduxjs/toolkit';
import { userSliceReducer } from '../features/user/userSlice';
import { registrationSliceReducer } from '../features/auth/registrationSlice';
import uploadReducer from '../features/upload/uploadSlice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	upload: uploadReducer,
	registration: registrationSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
