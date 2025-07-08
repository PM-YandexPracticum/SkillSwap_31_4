import { combineReducers } from '@reduxjs/toolkit';
import { userSliceReducer } from '../features/userSlice/userSlice';
import { filtersReducer } from '../features/filterSlice/filterSlice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	filters: filtersReducer,
});
