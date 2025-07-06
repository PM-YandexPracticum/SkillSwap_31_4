import styles from './SkillTags.module.scss';
import { categoryColors } from '../../lib/utils';
import type { TSkillTagsUIProps } from './type';

export const SkillTags = ({ children, category }: TSkillTagsUIProps) => {
	const bgColor = categoryColors[category] || 'var(--color-tag-plus)';

	return (
		<span className={styles.tag} style={{ backgroundColor: bgColor }}>
			{children}
		</span>
	);
};
