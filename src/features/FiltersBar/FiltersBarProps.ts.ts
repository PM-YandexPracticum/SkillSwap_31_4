// types/FiltersBarProps.ts

import type { TOption } from '../../shared/ui/SkillFilter/type';

export type SkillGroup = {
	category: string;
	skills: {
		id: string;
		name: string;
	}[];
};

export type CityOption = {
	id: string;
	name: string;
};

export type FiltersState = {
	skillIds: string[];
	cityIds: string[];
	gender: 'Мужской' | 'Женский' | null;
	mode: 'all' | 'canTeach' | 'wantToLearn';
};

export type FiltersBarProps = {
	skills: SkillGroup[];
	cities: CityOption[];
	showAllSkills: boolean;
	setShowAllSkills: (value: boolean) => void;
	openGroups: Record<string, boolean>;
	handleGroupToggle: (id: string) => void;
	handleSkillCheck: (id: string) => void;
	handleCityCheck: (id: string) => void;
	handleReset: () => void;
	skillOptions: TOption[];
	countSelectedOptions: number;
	checkedCityItems: Record<string, boolean>;
	showAllCities: boolean;
	setShowAllCities: (value: boolean) => void;
	filters: FiltersState;
	setGenderFilter: (v: string) => void;
	setModeFilter: (v: string) => void;
};
