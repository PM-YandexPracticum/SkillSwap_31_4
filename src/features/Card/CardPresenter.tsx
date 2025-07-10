import { Card } from '@ui';
import { useNavigate } from 'react-router-dom';
import {
	deleteLikeUser,
	likeUser,
	getUserById,
} from '../../entities/userSlice/thunk';
import { useDispatch, useSelector } from '../../services/store';
import { getUserByIdSelector } from '../../entities/userSlice/userSlice';
import type { TUser } from '../../api/type';

type TCardPresenterProps = {
	user: TUser;
	withDescription?: boolean;
};

export const CardPresenter = ({
	user,
	withDescription = false,
}: TCardPresenterProps) => {
	const currentUser = useSelector<TUser>(getUserByIdSelector);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = import.meta.env.VITE_TOKEN;
	const isLiked = currentUser?.likes.includes(user._id);

	const handleClickLike = async () => {
		if (isLiked) {
			await dispatch(deleteLikeUser({ id: user._id, token }));
		} else {
			await dispatch(likeUser({ id: user._id, token }));
		}

		await dispatch(getUserById(currentUser._id));
	};

	const handleClickDetails = () => {
		navigate(`/user/${user._id}`);
	};

	return (
		<Card
			photo={user.photo}
			userName={user.name}
			userLocation={user.city}
			userAge={user.age}
			teachSkills={user.canTeach}
			learnSkills={user.wantsToLearn}
			isLiked={isLiked}
			aboutMe={user.about}
			withDescription={withDescription}
			onClickDetails={handleClickDetails}
			onClickLike={handleClickLike}
		/>
	);
};
