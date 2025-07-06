import type { TUserSkill } from '../../lib/types/user';

export type TUICardProps = {
	photo: string;
	userName: string;
	userLocation: string;
	userAge: number;
	isLiked: boolean;
	teachSkills: TUserSkill[];
	learnSkills: TUserSkill[];
	onClickDetails: () => void;
	onClickLike: () => void;
};
