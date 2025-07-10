import { useMemo, useState } from 'react';
import type { TUser } from 'src/api/type';
import { useSelector } from '../../services/store';
import { CardSliderUI } from '../../widgets/CardSlider/CardSlider';
import { getUsersSelector } from '../user/userSlice';

type CardSliderPresenterProps = {
	id: string;
};

export const CardSliderPresenter = ({ id }: CardSliderPresenterProps) => {
	const users: TUser[] = useSelector(getUsersSelector);
	const [sliderIndex, setSliderIndex] = useState(0);
	const visibleCount = 4;

	const currentUser = useMemo(
		() => users.find((u) => u._id === id),
		[id, users]
	);

	const filteredUsers = useMemo(() => {
		if (!currentUser) return [];

		return users.filter(
			(u) =>
				u._id !== currentUser._id &&
				u.canTeach.some((skill) =>
					currentUser.canTeach.some((s) => s._id === skill._id)
				)
		);
	}, [currentUser, users]);

	const visibleCards = filteredUsers.slice(
		sliderIndex,
		sliderIndex + visibleCount
	);
	const maxIndex = Math.max(0, filteredUsers.length - visibleCount);

	const handlePrev = () => {
		setSliderIndex((prev) => {
			if (prev - 1 < 0) {
				return filteredUsers.length - visibleCount;
			}

			return prev - 1;
		});
	};

	const handleNext = () => {
		setSliderIndex((prev) => {
			if (prev + 1 > filteredUsers.length - visibleCount) {
				return 0;
			}
			return prev + 1;
		});
	};

	return (
		<CardSliderUI
			users={visibleCards}
			swipeProps={{
				onPrev: handlePrev,
				onNext: handleNext,
				disabledPrev: sliderIndex === 0,
				disabledNext: sliderIndex >= maxIndex,
			}}
		/>
	);
};
