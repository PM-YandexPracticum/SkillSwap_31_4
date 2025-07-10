import { combineReducers } from '@reduxjs/toolkit';
import { userSliceReducer } from '../entities/userSlice/userSlice';
import uploadReducer from '../entities/uploadSlice/uploadSlice';
import { filtersReducer } from '../entities/filtersSlice/filterSlice';
import { notificationsSliceReducer } from '../entities/notificationSlice/notificationsSlice';
import skillsReducer from '../entities/skillsSlice/skillsSlice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	upload: uploadReducer,
	filters: filtersReducer,
	notifications: notificationsSliceReducer,
	skills: skillsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
