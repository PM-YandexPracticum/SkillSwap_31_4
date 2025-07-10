// skillsThunk.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { TSkill } from '../../api/type';
import { fetchSkills } from '../../api/api';

export const getSkills = createAsyncThunk<
	TSkill[],
	void,
	{ rejectValue: string }
>('skills/getSkills', async (_, { rejectWithValue }) => {
	try {
		const skills = await fetchSkills();
		return skills;
	} catch (err) {
		return rejectWithValue('Ошибка при загрузке навыков');
	}
});
