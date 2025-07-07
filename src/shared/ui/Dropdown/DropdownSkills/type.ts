import type { TCategoryWithSkills, TSkill } from '../../../lib/types/skill';

export type TDropdownSkillsUIProps = {
	skillsData: TCategoryWithSkills[];
	onTagClick?: (skill: TSkill) => void;
	onTitleClick?: (skills: TCategoryWithSkills) => void;
};
