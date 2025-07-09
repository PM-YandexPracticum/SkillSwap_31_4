import { ButtonUI } from '../Button/Button';
import { SkillTags } from '../SkillTags';
import styles from './Card.module.scss';
import type { TUICardProps } from './type';
import type { TUserSkill } from '../../lib/types/user';
import { LikeButtonUI } from '../LikeButton/LikeButton';

export const Card = ({
	photo,
	userName,
	aboutMe,
	userLocation,
	userAge,
	isLiked,
	withDescription,
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

	const renderTags = (skills: TUserSkill[] | undefined, limit: number) => {
		if (!skills || skills.length === 0) return null;

		const visibleTags = skills.slice(0, limit);
		const remainingCount = skills.length - limit;

		return (
			<>
				{visibleTags.map((skill) => (
					<SkillTags
						key={skill._id}
						category={skill.categoryName}
						title={skill.name}>
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
		<article
			className={styles.card}
			style={{ padding: withDescription ? '32px' : '20px' }}>
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
				{!withDescription && (
					<LikeButtonUI isLiked={isLiked} onClick={onClickLike} />
				)}
			</div>
			{withDescription && <p className={styles.aboutMe}>{aboutMe}</p>}
			<div>
				<div
					className={styles.tags}
					style={{ gap: withDescription ? '14px' : '8px' }}>
					<h4>Может научить:</h4>
					<div className={styles.tagsContainer}>
						{renderTags(teachSkills, 2)}
					</div>
				</div>
				<div
					className={styles.tags}
					style={{
						marginBlockStart: withDescription ? '24px' : '12px',
						gap: withDescription ? '14px' : '8px',
					}}>
					<h4>Хочет научиться:</h4>
					<div className={styles.tagsContainer}>
						{renderTags(learnSkills, 2)}
					</div>
				</div>
			</div>
			{!withDescription && (
				<ButtonUI onClick={onClickDetails} width='284' color='primary'>
					Подробнее
				</ButtonUI>
			)}
		</article>
	);
};
