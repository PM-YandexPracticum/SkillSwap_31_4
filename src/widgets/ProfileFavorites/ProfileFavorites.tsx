import { Card } from '@ui';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileFavorites.module.scss';
import { useDispatch, useSelector } from '../../services/store';
import {
	getUserByIdSelector,
	getUsersSelector,
} from '../../features/user/userSlice';
import { deleteLikeUser, getUserById } from '../../features/user/thunk';

export const ProfileFavoritesUI = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const users = useSelector(getUsersSelector);
	const user = useSelector(getUserByIdSelector);
	const token = import.meta.env.VITE_TOKEN;
	const likedUsers = users.filter((u) => user?.likes.includes(u._id));

	const handleClickLike = async (id: string) => {
		await dispatch(deleteLikeUser({ id, token }));
		await dispatch(getUserById(user._id));
	};

	const handleClickDetails = (id: string) => {
		navigate(`/${id}`);
	};

	return (
		<div className={styles.content}>
			{likedUsers.map((favUser) => (
				<Card
					key={favUser._id}
					photo={favUser.photo}
					userName={favUser.name}
					userLocation={favUser.city}
					teachSkills={favUser.canTeach}
					learnSkills={favUser.wantsToLearn}
					userAge={favUser.age}
					isLiked={user?.likes.includes(favUser._id)}
					onClickDetails={() => handleClickDetails(favUser._id)}
					onClickLike={() => handleClickLike(favUser._id)}
				/>
			))}
		</div>
	);
};
