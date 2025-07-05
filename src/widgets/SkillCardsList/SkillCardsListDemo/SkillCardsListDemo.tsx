import type { SkillCardsListDemoProps } from '../type';
import styles from '../SkillCardsList.module.scss';
import { ButtonUI, SwiperArrows } from '../../../shared/ui';

export const SkillCardsListDemo: React.FC<SkillCardsListDemoProps> = (
	props: SkillCardsListDemoProps
) => {
	const {
		SkillCard,
		SkillCardsProps,
		title,
		buttonMoreType,
		onClickButtonMore,
		maxCardCount,
	} = props;

	const CroppedCardsList = SkillCardsProps.slice(0, maxCardCount || 3);
	return (
		<section className={styles.container}>
			<nav className={styles.listHeader}>
				<h2 className={styles.titleContainer}>{title}</h2>
				{buttonMoreType === 'watchAll' ? (
					<ButtonUI onClick={onClickButtonMore} color='tertiary' width='187px'>
						<span>Смотреть все</span>
					</ButtonUI>
				) : null}
			</nav>
			<div className={styles.listContainer}>
				{CroppedCardsList.map((cardProps) => (
					<SkillCard key={cardProps.index} {...cardProps} />
				))}
				{buttonMoreType === 'arrow' && (
					<SwiperArrows
						onNext={onClickButtonMore || (() => {})}
						onPrev={() => {}}
						disabledPrev
						disabledNext={false}
					/>
				)}
			</div>
		</section>
	);
};
