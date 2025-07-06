import type { TCategory, TSkill } from './skill';

type TResponse = {
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
	canTeach: TUserSkills[];
	wantsToLearn: TUserSkills[];
	photo: string;
	likes: string[];
	birthDate: Date;
	registerDate: Date;
	skillPhotos: string[];
};

type TUserSkills = TSkill & {
	categoryName: TCategory;
};
