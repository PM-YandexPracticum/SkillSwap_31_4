import { useState } from 'react';
import { SwiperArrows } from '../SwiperArrows/SwiperArrows';
import { Card } from '../Card';

export default {
	title: 'Components/CardSwiper',
	component: Card,
};

const mockCardData = new Array(10).fill(null).map((_, index) => ({
	photo:
		'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	userName: `Пользователь ${index + 1}`,
	userLocation: 'Москва',
	userAge: 25 + index,
	isLiked: false,
	teachSkills: [
		{ tagText: 'React', category: 'Образование и развитие' as const },
		{ tagText: 'JS', category: 'Образование и развитие' as const },
	],
	learnSkills: [
		{ tagText: 'Английский', category: 'Иностранные языки' as const },
		{ tagText: 'Французский', category: 'Иностранные языки' as const },
	],
	onClickDetails: () => alert('Подробнее'),
	onClickLike: () => alert('Лайк'),
}));

export const Default = () => {
	const [index, setIndex] = useState(0);
	const visibleCount = 3;

	const handlePrev = () => {
		setIndex((prev) => Math.max(0, prev - 3));
	};

	const handleNext = () => {
		setIndex((prev) => Math.min(mockCardData.length - visibleCount, prev + 3));
	};

	const visibleCards = mockCardData.slice(index, index + visibleCount);

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
				disabledNext={index >= mockCardData.length - visibleCount}
			/>

			<div
				className='card-swiper'
				style={{
					display: 'flex',
					gap: 16,
					overflow: 'hidden',
					padding: '0 16px',
				}}>
				{visibleCards.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>
		</div>
	);
};
const mockGalleryData = [
	'https://images.unsplash.com/photo-1749741355867-8d40976f2bfb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1743445888873-7b989699663d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://plus.unsplash.com/premium_photo-1750353386208-7e189f9845ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1750779940698-f24b28d76fd9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1750839713647-f845c59c3883?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

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
			{/* Большая фотография + стрелки поверх */}
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

				{/* Стрелки UI-компонентом */}
				<div
					style={{
						position: 'absolute',
						top: '50%',
						left: 0,
						right: 0,
						transform: 'translateY(-50%)',
						pointerEvents: 'none',
					}}>
					<div style={{ pointerEvents: 'auto' }}>
						<SwiperArrows
							onPrev={handlePrev}
							onNext={handleNext}
							disabledPrev={false}
							disabledNext={false}
						/>
					</div>
				</div>
			</div>

			{/* Маленькие фото */}
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

export const Gallery = () => {
	return (
		<div
			style={{
				padding: '40px 20px',
				maxWidth: '1400px',
				margin: '0 auto',
				background: '#F9FAF7',
			}}>
			<PhotoGallery photos={mockGalleryData} />
		</div>
	);
};
