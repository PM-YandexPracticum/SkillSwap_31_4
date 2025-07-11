import { useState } from 'react';
import { SwiperArrows } from '../SwiperArrows';
import styles from './PhotoGallery.module.scss';
import type { TPhotoGalleryProps } from './type';

export const PhotoGalleryUI = ({ photos = [] }: TPhotoGalleryProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % photos.length);
	};

	const getCircularPhotos = (startIndex: number, count: number) => {
		const result: string[] = [];
		for (let i = 1; i <= count; i += 1) {
			result.push(photos[(startIndex + i) % photos.length]);
		}
		return result;
	};
	const visibleSmallCount = 3;

	const bigPhoto = photos[currentIndex];
	const smallPhotos = getCircularPhotos(currentIndex, visibleSmallCount);
	const totalVisible = 1 + visibleSmallCount;
	const remainingCount =
		photos.length > totalVisible ? photos.length - totalVisible : 0;

	if (!photos || photos.length === 0) {
		return <div>No photos available</div>;
	}

	return (
		<div className={styles.container}>
			<div className={styles.preview}>
				<img src={bigPhoto} alt='Большое фото' className={styles.largeImage} />
				<SwiperArrows
					onPrev={handlePrev}
					onNext={handleNext}
					disabledPrev={false}
					disabledNext={false}
				/>
			</div>

			<div className={styles.miniatures}>
				{smallPhotos.map((photo, i) => {
					const isLast = i === smallPhotos.length - 1;
					return (
						<div
							key={photo}
							className={styles.smallImage}
							onClick={() =>
								setCurrentIndex((currentIndex + i + 1) % photos.length)
							}>
							<img src={photo} alt={`Маленькое фото ${i + 1}`} />
							{isLast && remainingCount > 0 && (
								<div className={styles.moreImage}>+{remainingCount}</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
