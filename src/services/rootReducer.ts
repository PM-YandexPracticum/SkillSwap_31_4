import { combineReducers } from '@reduxjs/toolkit';
import { userSliceReducer } from '../features/user/userSlice';

export const rootReducer = combineReducers({ user: userSliceReducer });
