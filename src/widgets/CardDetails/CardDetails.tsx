import { ButtonUI, LikeButtonUI } from '@ui';
import { useState } from 'react';
import shareIcon from '../../images/icons/share.svg';
import moreIcon from '../../images/icons/more-square.svg';
import styles from './CardDetails.module.scss';
import { PhotoGalleryUI } from '../../shared/ui/PhotoFallery';
import type { TCardDetailsProps } from './type';

export const CardDetailsUI = ({
	isLiked,
	photos,
	skillName,
	skillCategory,
	skillSubCategory,
	skillDescription,
	onOfferButtonClick,
	onLikeButtonClick,
	onShareButtonClick,
	onMoreButtonClick,
}: TCardDetailsProps) => {
	const [like, setLike] = useState(isLiked);
	const onLikeClick = () => {
		setLike((prevState) => !prevState);
		if (onLikeButtonClick) onLikeButtonClick();
	};
	return (
		<div className={styles.container}>
			<div className={styles.buttons}>
				<LikeButtonUI isLiked={like} onClick={onLikeClick} />
				<button
					type='button'
					className={styles.button}
					onClick={onShareButtonClick}>
					<img src={shareIcon} alt='Иконка поделиться' />
				</button>
				<button
					type='button'
					className={styles.button}
					onClick={onMoreButtonClick}>
					<img src={moreIcon} alt='Иконка подробнее' />
				</button>
			</div>
			<div className={styles.card}>
				<div className={styles.description}>
					<h1>{skillName}</h1>
					<p
						className={
							styles.category
						}>{`${skillCategory}/${skillSubCategory}`}</p>
					<p className={styles.text}>{skillDescription}</p>
					<div className={styles.offerButton}>
						{' '}
						<ButtonUI color='primary' onClick={onOfferButtonClick}>
							Предложить обмен
						</ButtonUI>
					</div>
				</div>
				<PhotoGalleryUI photos={photos} />
			</div>
		</div>
	);
};
