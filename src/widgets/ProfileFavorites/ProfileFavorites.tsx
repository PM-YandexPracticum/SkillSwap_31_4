import styles from './ProfileFavorites.module.scss';
import { useSelector } from '../../services/store';
import {
	getUserByIdSelector,
	getUsersSelector,
} from '../../entities/userSlice/userSlice';
import { CardPresenter } from '../../features/CardPresenter/CardPresenter';

export const ProfileFavoritesUI = () => {
	const currentUser = useSelector(getUserByIdSelector);
	const users = useSelector(getUsersSelector);
	const likedUsers = users.filter((user) =>
		currentUser?.likes.includes(user._id)
	);

	return (
		<div className={styles.content}>
			{likedUsers.map((user) => (
				<CardPresenter key={user._id} user={user} />
			))}
		</div>
	);
};
