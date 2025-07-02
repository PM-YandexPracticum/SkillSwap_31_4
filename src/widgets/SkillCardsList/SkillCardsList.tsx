import type SkillCardsListProps from './type';
import styles from './SkillCardsList.module.scss';

export const SkillCardsList: React.FC<SkillCardsListProps> = ({
	SkillCard,
	SkillCardsProps,
	title,
}: SkillCardsListProps) => (
	<section className={styles.container}>
		<h2 className={styles.titleContainer}>{title}</h2>
		<div className={styles.listContainer}>
			{SkillCardsProps.map((props) => (
				<SkillCard key={props.index} {...props} />
			))}
		</div>
	</section>
);
