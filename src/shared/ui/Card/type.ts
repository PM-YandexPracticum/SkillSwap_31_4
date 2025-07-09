import type { TUserSkill } from '../../lib/types/user';

export type TUICardProps = {
	photo: string;
	userName: string;
	aboutMe: string;
	userLocation: string;
	userAge: number;
	isLiked: boolean;
	withDescription: boolean;
	teachSkills: TUserSkill[];
	learnSkills: TUserSkill[];
	onClickDetails: () => void;
	onClickLike: () => void;
};
