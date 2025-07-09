import type { TSkill } from '../../../api/type';

export type TUICardProps = {
	photo: string;
	userName: string;
	userLocation: string;
	userAge: number;
	isLiked: boolean;
	teachSkills: TSkill[];
	learnSkills: TSkill[];
	onClickDetails: () => void;
	onClickLike: () => void;
};
