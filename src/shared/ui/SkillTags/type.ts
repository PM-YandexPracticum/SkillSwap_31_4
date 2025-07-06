import React from 'react';
import type { TCategoryName } from '../../lib/types/skill';

export type TSkillTagsUIProps = {
	children?: React.ReactNode;
	category: TCategoryName;
};
