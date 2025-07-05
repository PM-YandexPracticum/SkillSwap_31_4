export const optionsGender = [
	{ value: 'not', label: 'Без разницы' },
	{ value: 'men', label: 'Мужской' },
	{ value: 'women', label: 'Женский' },
];

export const roleOptions = [
	{ value: 'all', label: 'Всё' },
	{ value: 'learn', label: 'Хочу научиться' },
	{ value: 'can-study', label: 'Могу научить' },
];

export type SkillOption = {
	id: string;
	text: string;
	parentId: string;
	checked: boolean;
	isOpen: boolean;
}

export type CityItem = {
	id: string;
	city: string;
}

export type FiltersBarProps = {
	skills: SkillOption[];
	cities: CityItem[];
}
