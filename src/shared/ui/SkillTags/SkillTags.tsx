import styles from './SkillTags.module.scss';
import { categoryColors } from '../../lib/utils';
import type { TSkillTagsUIProps } from './type';

export const SkillTags = ({ children, category, title }: TSkillTagsUIProps) => {
	const bgColor = categoryColors[category] || 'var(--color-tag-plus)';
	const hasPlus = typeof children === 'string' && children.includes('+');

	return (
		<span
			className={styles.tag}
			style={{
				backgroundColor: bgColor,
				overflow: hasPlus ? 'unset' : 'hidden',
			}}
			title={title}>
			{children}
		</span>
	);
};
