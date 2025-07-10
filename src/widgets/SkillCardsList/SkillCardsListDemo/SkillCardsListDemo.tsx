import type { SkillCardsListDemoProps } from '../type';
import styles from '../SkillCardsList.module.scss';
import { ButtonUI } from '../../../shared/ui';

export const SkillCardsListDemo: React.FC<SkillCardsListDemoProps> = (
	props: SkillCardsListDemoProps
) => {
	const { SkillCard, SkillCardsProps, title, onClickButtonMore, maxCardCount } =
		props;

	const CroppedCardsList = SkillCardsProps.slice(0, maxCardCount || 3);
	return (
		<section className={styles.containerDemo}>
			<nav className={styles.listHeader}>
				<h2 className={styles.titleContainer}>{title}</h2>
				<ButtonUI onClick={onClickButtonMore} color='tertiary' width='187px'>
					<span>Смотреть все</span>
				</ButtonUI>
			</nav>
			<div className={styles.listContainer}>
				{CroppedCardsList.map((cardProps) => (
					<SkillCard key={cardProps._id} {...cardProps} />
				))}
			</div>
		</section>
	);
};
