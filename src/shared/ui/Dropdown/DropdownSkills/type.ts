import type { TSkill, TSkillsResponse } from '../../../lib/types/skill';

export type TDropdownSkillsUIProps = {
	skillsData: TSkillsResponse[];
	onTagClick?: (skill: TSkill) => void;
	onTitleClick?: (skills: TSkillsResponse) => void;
};
