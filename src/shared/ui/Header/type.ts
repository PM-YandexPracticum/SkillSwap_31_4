import type { TSkill, TSkillsResponse } from '../../lib/types/skill';
import type { TUser } from '../../lib/types/user';

export type TAppHeaderUIProps = {
	isModal: boolean;
	isAuth: boolean;
	categories: TSkillsResponse[];
	user: TUser;
	handleRegisterButtonClick?: () => void;
	handleLoginButtonClick?: () => void;
	handleCloseButtonClick?: () => void;
	handleSkillTitleClick?: (skills: TSkillsResponse) => void;
	handleSkillTagClick?: (skill: TSkill) => void;
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
	searchOptions: TSkill[];
};
