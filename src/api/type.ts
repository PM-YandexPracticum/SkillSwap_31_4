export type TCard = {
	_id: string;
	title: string;
	description: string;
	photo: string[];
	createdAt: string;
};

export type TSkill = {
	_id: string;
	name: string;
	categoryName: string;
};

export type TUser = {
	_id: string;
	name: string;
	city: string;
	age: number;
	about: string;
	canTeach: TSkill[];
	wantsToLearn: TSkill[];
	photo: string;
	likes: string[];
	birthDate: string;
	registerDate: string;
	email: string;
	gender: 'Мужской' | 'Женский' | 'Не указан' | string;
	skillPhotos: string[];
	cards: TCard[];
};

export type TExchange = {
	_id: string;
	from: { _id: string; name: string };
	to: string;
	offerDetails: string;
	status: 'pending' | 'accepted' | 'rejected';
	isNew: boolean;
	date: string;
};

export type TUploadResponse = {
	urls: string[];
};

export type TErrorResponse = {
	error: string;
};
