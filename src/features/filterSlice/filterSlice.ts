// store/filters/filtersSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type FiltersState = {
	mode: 'canTeach' | 'wantToLearn' | 'all';
	gender: 'Мужской' | 'Женский' | null;
	cityIds: string[]; // изменили с city: string | null
	skillIds: string[];
};

const initialState: FiltersState = {
	mode: 'all',
	gender: null,
	cityIds: [], // теперь массив выбранных городов
	skillIds: [],
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setMode(state, action: PayloadAction<FiltersState['mode']>) {
			state.mode = action.payload;
		},
		setGender(state, action: PayloadAction<FiltersState['gender']>) {
			state.gender = action.payload;
		},
		toggleCityId(state, action: PayloadAction<string>) {
			const cityId = action.payload;
			if (state.cityIds.includes(cityId)) {
				state.cityIds = state.cityIds.filter((id) => id !== cityId);
			} else {
				state.cityIds.push(cityId);
			}
		},
		toggleSkillId(state, action: PayloadAction<string>) {
			const id = action.payload;
			if (state.skillIds.includes(id)) {
				state.skillIds = state.skillIds.filter((s) => s !== id);
			} else {
				state.skillIds.push(id);
			}
		},
		resetFilters() {
			return initialState;
		},
	},
});

export const { setMode, setGender, toggleCityId, toggleSkillId, resetFilters } =
	filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
