import { ButtonUI, LikeButtonUI } from '@ui';
import { SkillTags } from '../SkillTags';
import styles from './Card.module.scss';
import type { TUICardProps } from './type';
import type { TSkill } from '../../../api/type';
import type { TCategories } from '../../lib/types/skill';

export const Card = ({
	photo,
	userName,
	userLocation,
	userAge,
	isLiked,
	teachSkills,
	learnSkills,
	onClickDetails,
	onClickLike,
}: TUICardProps) => {
	const getYearAddition = () => {
		if (userAge >= 11 && userAge <= 14) {
			return 'лет';
		}

		const lastDigitOfAge = userAge % 10;

		switch (lastDigitOfAge) {
			case 1:
				return 'год';
			case 2:
			case 3:
			case 4:
				return 'года';
			default:
				return 'лет';
		}
	};

	const renderTags = (skills: TSkill[] | undefined, limit: number) => {
		if (!skills || skills.length === 0) return null;

		const visibleTags = skills.slice(0, limit);
		const remainingCount = skills.length - limit;

		return (
			<>
				{visibleTags.map((skill) => (
					<SkillTags
						key={skill._id}
						category={skill.categoryName as TCategories}>
						{skill.name}
					</SkillTags>
				))}
				{remainingCount > 0 && (
					<SkillTags category='+'>{`+${remainingCount}`}</SkillTags>
				)}
			</>
		);
	};

	return (
		<article className={styles.card}>
			<div className={styles.user}>
				<div
					className={styles.userPhoto}
					style={{
						backgroundImage: `url(${photo})`,
						backgroundSize: 'cover',
					}}
				/>
				<div className={styles.userInfo}>
					<span className={styles.userName}>{userName}</span>
					<span>
						{userLocation}, {userAge} {getYearAddition()}
					</span>
				</div>
				<LikeButtonUI isLiked={isLiked} onClick={onClickLike} />
			</div>
			<div>
				<div className={styles.tags}>
					<h4>Может научить:</h4>
					<div className={styles.tagsContainer}>
						{renderTags(teachSkills, 2)}
					</div>
				</div>
				<div className={styles.tags} style={{ marginBlockStart: '12px' }}>
					<h4>Может научить:</h4>
					<div className={styles.tagsContainer}>
						{renderTags(learnSkills, 2)}
					</div>
				</div>
			</div>
			<ButtonUI onClick={onClickDetails} width='284' color='primary'>
				Подробнее
			</ButtonUI>
		</article>
	);
};
