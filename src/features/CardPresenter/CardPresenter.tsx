import { Card } from '@ui';
import { useNavigate } from 'react-router-dom';
import { deleteLikeUser, likeUser, getUserById } from '../user/thunk';
import { useDispatch, useSelector } from '../../services/store';
import { getUserByIdSelector } from '../user/userSlice';
import type { TUser } from '../../api/type';

export const CardPresenter = ({ user }: { user: TUser }) => {
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
		navigate(`/${user._id}`);
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
			onClickDetails={handleClickDetails}
			onClickLike={handleClickLike}
		/>
	);
};
