export const optionsGender = [
	{ label: 'Не имеет значения', value: 'not' },
	{ label: 'Мужской', value: 'Мужской' },
	{ label: 'Женский', value: 'Женский' },
];

export const roleOptions = [
	{ value: 'all', label: 'Всё' },
	{ value: 'learn', label: 'Хочу научиться' },
	{ value: 'can-study', label: 'Могу научить' },
];

export type SkillOption = {
	id: string;
	name: string;
	parentId?: string;
	checked: boolean;
	isOpen: boolean;
};

export type CityItem = {
	id: string;
	city: string;
};

export type FiltersBarProps = {
	skills: SkillOption[];
	cities: CityItem[];
};
