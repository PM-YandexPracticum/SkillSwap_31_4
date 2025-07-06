import type { TCategories, TSkill } from './skill';

export type TResponse = {
	success: boolean;
};

export type TUsersResponse = TResponse & {
	users: TUser;
};

export type TUser = {
	_id: string;
	name: string;
	city: string;
	age: number;
	about: string;
	canTeach: TUserSkill[];
	wantsToLearn: TUserSkill[];
	photo: string;
	likes: string[];
	birthDate: Date;
	registerDate: Date;
	skillPhotos: string[];
};

export type TUserSkill = TSkill & {
	categoryName: TCategories;
};
