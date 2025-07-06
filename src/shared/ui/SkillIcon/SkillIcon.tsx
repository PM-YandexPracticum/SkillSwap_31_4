import styles from './SkillIcon.module.scss';
import { categoryColors, categoryImages } from '../../lib/utils';
import type { TSkillIconProps } from './type';

export const SkillIcon = ({ category }: TSkillIconProps) => {
	const bgColor = categoryColors[category] || 'var(--color-tag-plus)';
	const image = categoryImages[category];
	return (
		<div className={styles.container} style={{ backgroundColor: bgColor }}>
			<img src={image} alt='Иконка категории' />
		</div>
	);
};
