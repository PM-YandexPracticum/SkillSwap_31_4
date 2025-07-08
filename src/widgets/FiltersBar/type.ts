export const optionsGender = [
	{ label: 'Не имеет значения', value: 'not' },
	{ label: 'Мужской', value: 'Мужской' },
	{ label: 'Женский', value: 'Женский' },
];

export const roleOptions = [
	{ value: 'all', label: 'Всё' },
	{ value: 'canTeach', label: 'Хочу научиться' },
	{ value: 'wantToLearn', label: 'Могу научить' },
];

export type SkillGroup = {
	category: string;
	skills: {
		id: string;
		name: string;
	}[];
};

export type SkillOption = {
	id: string;
	name: string;
	parentId?: string;
	checked: boolean;
	isOpen: boolean;
};

export type CityItem = {
	id: string;
	name: string;
};

export type FiltersBarProps = {
	skills: SkillGroup[];
	cities: CityItem[];
};
