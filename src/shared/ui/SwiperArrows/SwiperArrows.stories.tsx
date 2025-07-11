import { useEffect, useState } from 'react';
import { SwiperArrows } from '../SwiperArrows/SwiperArrows';
import { Card } from '../Card';
import type { TUser } from '../../../api/type.ts';

export default {
	title: 'Shared/UI/SwiperArrows',
	component: Card,
};

export const CardSlider = () => {
	const visibleCount = 3;
	const [index, setIndex] = useState(0);
	const [users, setUsers] = useState<TUser[]>([]);

	useEffect(() => {
		fetch('https://backend-skillswap.onrender.com/api/users/')
			.then((res) => res.json())
			.then((data) => {
				if (Array.isArray(data?.users)) {
					setUsers(data.users);
				} else {
					setUsers([]); // fallback на пустой массив
				}
			})
			.catch((err) => {
				console.error('Fetch error:', err);
				setUsers([]); // fallback при ошибке запроса
			});
	}, []);

	const handlePrev = () => {
		setIndex((prev) => Math.max(0, prev - 3));
	};

	const handleNext = () => {
		setIndex((prev) =>
			Math.min(Math.max(0, users.length - visibleCount), prev + 3)
		);
	};

	const visibleCards = users.slice(index, index + visibleCount);

	return (
		<div
			style={{
				position: 'relative',
				padding: '40px 20px',
				width: 'max-content',
				maxWidth: '100%',
				margin: '0 auto',
				overflow: 'hidden',
				background: '#F9FAF7',
			}}>
			<SwiperArrows
				onPrev={handlePrev}
				onNext={handleNext}
				disabledPrev={index === 0}
				disabledNext={index >= Math.max(0, users.length - visibleCount)}
			/>

			<div
				className='card-swiper'
				style={{
					display: 'flex',
					gap: 16,
					overflow: 'hidden',
					padding: '0 16px',
				}}>
				{visibleCards.map((user) => (
					<Card
						key={user._id}
						userName={user.name}
						userAge={user.age}
						userLocation={user.city}
						photo={user.photo}
						isLiked={false}
						teachSkills={user.canTeach}
						learnSkills={user.wantsToLearn}
						onClickDetails={() => {}}
						onClickLike={() => {}}
					/>
				))}
			</div>
		</div>
	);
};

const visibleSmallCount = 3;

const PhotoGallery = ({ photos }: { photos: string[] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % photos.length);
	};

	const getCircularPhotos = (startIndex: number, count: number) => {
		const result: string[] = [];
		for (let i = 1; i <= count; i++) {
			result.push(photos[(startIndex + i) % photos.length]);
		}
		return result;
	};

	if (!photos || photos.length === 0) {
		return <div>No photos available</div>;
	}

	const bigPhoto = photos[currentIndex];
	const smallPhotos = getCircularPhotos(currentIndex, visibleSmallCount);
	const totalVisible = 1 + visibleSmallCount;
	const remainingCount =
		photos.length > totalVisible ? photos.length - totalVisible : 0;

	return (
		<div
			style={{
				display: 'flex',
				gap: 16,
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<div
				style={{
					position: 'relative',
					width: 1300,
					height: 700,
					borderRadius: 8,
					overflow: 'hidden',
				}}>
				<img
					src={bigPhoto}
					alt='Большое фото'
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
				<SwiperArrows
					onPrev={handlePrev}
					onNext={handleNext}
					disabledPrev={false}
					disabledNext={false}
				/>
			</div>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
				{smallPhotos.map((photo, i) => {
					const isLast = i === smallPhotos.length - 1;
					return (
						<div
							key={i}
							style={{
								position: 'relative',
								width: 220,
								height: 220,
								borderRadius: 8,
								overflow: 'hidden',
								cursor: 'pointer',
							}}
							onClick={() =>
								setCurrentIndex((currentIndex + i + 1) % photos.length)
							}>
							<img
								src={photo}
								alt={`Маленькое фото ${i + 1}`}
								style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							/>
							{isLast && remainingCount > 0 && (
								<div
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										height: '100%',
										backgroundColor: 'rgba(0,0,0,0.5)',
										color: 'white',
										fontWeight: 'bold',
										fontSize: 20,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										borderRadius: 8,
										userSelect: 'none',
									}}>
									+{remainingCount}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

// ======================= GallerySlider ========================

export const GallerySlider = () => {
	const [user, setUser] = useState<TUser | null>(null);

	useEffect(() => {
		fetch('https://backend-skillswap.onrender.com/api/users/')
			.then((res) => res.json())
			.then((data) => {
				setUser(data[4]);
			})
			.catch((err) => {
				console.error('Fetch error:', err);
				setUser(null);
			});
	}, []);

	const photos = user?.cards[0].photo ?? [];
	if (!Array.isArray(photos) || photos.length === 0) {
		return <div>No photos available</div>;
	}

	return (
		<div
			style={{
				padding: '40px 20px',
				maxWidth: '1400px',
				margin: '0 auto',
				background: '#F9FAF7',
			}}>
			<PhotoGallery photos={photos} />
		</div>
	);
};
