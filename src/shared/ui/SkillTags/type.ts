import React from 'react';
import type { TCategories } from '../../lib/types/skill';

export type TSkillTagsUIProps = {
	children?: React.ReactNode;
	category: TCategories;
	title?: string;
};
