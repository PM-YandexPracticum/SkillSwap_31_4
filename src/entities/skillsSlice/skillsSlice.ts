import { createSlice } from '@reduxjs/toolkit';
import { getSkills } from './thunk';
import type { SkillsState, ICategory, TSkill } from '../../api/type';

const initialState: SkillsState = {
	categories: [],
	status: 'idle',
	error: null,
};

const skillsSlice = createSlice({
	name: 'skills',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getSkills.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(getSkills.fulfilled, (state, action) => {
				const grouped = action.payload.reduce<Record<string, TSkill[]>>(
					(acc, skill) => {
						const category = skill.categoryName || 'Без категории';
						return {
							...acc,
							[category]: [...(acc[category] || []), skill],
						};
					},
					{}
				);

				state.categories = Object.entries(grouped).map(
					([categoryName, skills]): ICategory => ({
						category: { _id: categoryName, name: categoryName },
						skills,
					})
				);

				state.status = 'succeeded';
			})
			.addCase(getSkills.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload || 'Не удалось загрузить навыки';
			});
	},
});

export default skillsSlice.reducer;
