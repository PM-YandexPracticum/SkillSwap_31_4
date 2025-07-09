import { combineReducers } from '@reduxjs/toolkit';
import { userSliceReducer } from '../entities/userSlice/userSlice';
import { filtersReducer } from '../entities/filtersSlice/filterSlice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	filters: filtersReducer,
});
