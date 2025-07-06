import type { TResponse } from './user';

export type TAllSkillsResponse = TResponse & {
	categories: TCategoryWithSkills[];
};

export type TCategoryWithSkills = {
	skills: TSkill[];
	category: TCategory;
};

export type TCategory = {
	name: string;
	_id: string;
};

export type TSkill = {
	name: string;
	_id: string;
};

export type TCategories =
	| 'Иностранные языки'
	| 'Образование и развитие'
	| 'Здоровье и лайфстайл'
	| 'Бизнес и карьера'
	| 'Творчество и искусство'
	| 'Дом и уют'
	| '+'
	| 'Другое';
