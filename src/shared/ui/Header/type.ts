import type { TCategoryWithSkills, TSkill } from '../../lib/types/skill';
import type { TUser } from '../../lib/types/user';

export type TAppHeaderUIProps = {
	isModal: boolean;
	isAuth: boolean;
	isNotification: boolean;
	categories: TCategoryWithSkills[];
	user: TUser;
	handleRegisterButtonClick?: () => void;
	handleLoginButtonClick?: () => void;
	handleCloseButtonClick?: () => void;
	handleSkillTitleClick?: (skills: TCategoryWithSkills) => void;
	handleSkillTagClick?: (skill: TSkill) => void;
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
	searchOptions: TSkill[];
};
