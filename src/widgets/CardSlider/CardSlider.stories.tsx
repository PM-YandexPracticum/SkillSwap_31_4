import type { Meta } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { mockUsers } from './mockData';
import { CardSliderUI } from './CardSlider';
import type { SwiperArrowsProps } from '../../shared/ui/SwiperArrows/type';
import store from '../../services/store';

const meta = {
	title: 'Widgets/CardSlider',
	component: CardSliderUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<Provider store={store}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</Provider>
		),
	],
} satisfies Meta<typeof CardSliderUI>;

export default meta;

export const CardSliderDefault = () => {
	const [sliderIndex, setSliderIndex] = useState(0);
	const visibleCount = 4;

	const visibleUsers = mockUsers.slice(sliderIndex, sliderIndex + visibleCount);

	const maxIndex = Math.max(0, mockUsers.length - visibleCount);

	const handlePrev = () => {
		setSliderIndex((prev) =>
			prev - 1 < 0 ? mockUsers.length - visibleCount : prev - 1
		);
	};

	const handleNext = () => {
		setSliderIndex((prev) =>
			prev + 1 > mockUsers.length - visibleCount ? 0 : prev + 1
		);
	};

	const mockSwipeProps: SwiperArrowsProps = {
		onNext: handleNext,
		onPrev: handlePrev,
		disabledPrev: sliderIndex === 0,
		disabledNext: sliderIndex >= maxIndex,
	};

	return (
		<div>
			<CardSliderUI users={visibleUsers} swipeProps={mockSwipeProps} />
		</div>
	);
};
