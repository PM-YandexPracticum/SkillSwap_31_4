import { ButtonUI } from '../Button';
import { LikeButtonUI } from '../LikeButton';
import { SkillTags } from '../SkillTags';
import type { TSkillTagsUIProps } from '../SkillTags/SkillTags';
import styles from './Card.module.scss';

export type TUICardProps = {
	photo: string;
	userName: string;
	userLocation: string;
	userAge: number;
	isLiked: boolean;
	teachSkills?: TSkillTagsUIProps[];
	learnSkills?: TSkillTagsUIProps[];
	onClickDetails: () => void;
	onClickLike: () => void;
};

export const Card = ({
	photo,
	userName,
	userLocation,
	userAge,
	isLiked,
	teachSkills,
	learnSkills,
	onClickDetails,
	onClickLike
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

	const renderTags = (tags: TSkillTagsUIProps[] | undefined, limit: number) => {
		if (!tags || tags.length === 0) return null;

		const visibleTags = tags.slice(0, limit);
		const remainingCount = tags.length - limit;

		return (
			<>
				{visibleTags.map((skill, index) => (
					<SkillTags
						key={index}
						tagText={skill.tagText}
						category={skill.category}
					/>
				))}
				{remainingCount > 0 && (
					<SkillTags tagText={`+${remainingCount}`} category='+' />
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
					}}></div>
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
			<ButtonUI
				onClick={onClickDetails}
				width='284'
				color='primary'
				text='Подробнее'
			/>
		</article>
	);
};
