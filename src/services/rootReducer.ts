import { combineReducers } from '@reduxjs/toolkit';
import { userSliceReducer } from '../features/user/userSlice';
import uploadReducer from '../features/upload/uploadSlice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	upload: uploadReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
