import { Card } from '@ui';
import styles from './ProfileFavorites.module.scss';

export const ProfileFavoritesUI = () => {
	const user = {
		_id: '686334d7af130dedea16c5e5',
		name: 'Иван',
		city: 'Санкт-Петербург',
		age: 37,
		about:
			'Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
		canTeach: [
			{
				id: '685efce79b478aebbd5b1f82',
				tagText: 'Баланс жизни и работы',
				category: 'Здоровье и лайфстайл',
			},
			{
				id: '685ef7319b478aebbd5b1f5c',
				tagText: 'Рисование и иллюстрация',
				category: 'Творчество и искусство',
			},
		],
		wantsToLearn: [
			{
				id: '685ef9629b478aebbd5b1f6d',
				tagText: 'Навыки обучения',
				category: 'Образование и развитие',
			},
			{
				id: '685efad69b478aebbd5b1f71',
				tagText: 'Когнитивные техники',
				category: 'Образование и развитие',
			},
		],
		photo:
			'https://images.unsplash.com/photo-1626038135427-bd4eb8193ba5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		likes: ['685f0a909b478aebbd5b1fb0', '685f0a909b478aebbd5b1fb1'],
		birthDate: '1983-05-03T05:35:12.387Z',
		skillPhotos: [
			'https://img.freepik.com/free-vector/businessman-meditating-his-chair-work_52683-61162.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
			'https://img.freepik.com/free-photo/brunette-man-business-suit-is-working-while-relaxing-with-cocktail-blue-space-with-suitcase-pink-rubber-ring_197531-15470.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
			'https://img.freepik.com/free-vector/flat-business-people-meditating_23-2148919174.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
			'https://img.freepik.com/free-photo/representation-person-carrying-burden_52683-104234.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
			'https://img.freepik.com/free-photo/pleased-with-closed-eyes-young-school-woman-sits-table-with-school-tools-doing-meditation-gesture_141793-121928.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
		],
		registerDate: '2025-03-16T13:43:37.520Z',
	};

	return (
		<div className={styles.content}>
			<Card
				photo={user.photo}
				userName={user.name}
				userLocation={user.city}
				teachSkills={user.canTeach}
				learnSkills={user.wantsToLearn}
				userAge={user.age}
				isLiked
				onClickDetails={() => {}}
				onClickLike={() => {}}
			/>
			<Card
				photo={user.photo}
				userName={user.name}
				userLocation={user.city}
				teachSkills={user.canTeach}
				learnSkills={user.wantsToLearn}
				userAge={user.age}
				isLiked
				onClickDetails={() => {}}
				onClickLike={() => {}}
			/>
			<Card
				photo={user.photo}
				userName={user.name}
				userLocation={user.city}
				teachSkills={user.canTeach}
				learnSkills={user.wantsToLearn}
				userAge={user.age}
				isLiked
				onClickDetails={() => {}}
				onClickLike={() => {}}
			/>
			<Card
				photo={user.photo}
				userName={user.name}
				userLocation={user.city}
				teachSkills={user.canTeach}
				learnSkills={user.wantsToLearn}
				userAge={user.age}
				isLiked
				onClickDetails={() => {}}
				onClickLike={() => {}}
			/>
			<Card
				photo={user.photo}
				userName={user.name}
				userLocation={user.city}
				teachSkills={user.canTeach}
				learnSkills={user.wantsToLearn}
				userAge={user.age}
				isLiked
				onClickDetails={() => {}}
				onClickLike={() => {}}
			/>
			<Card
				photo={user.photo}
				userName={user.name}
				userLocation={user.city}
				teachSkills={user.canTeach}
				learnSkills={user.wantsToLearn}
				userAge={user.age}
				isLiked
				onClickDetails={() => {}}
				onClickLike={() => {}}
			/>
		</div>
	);
};
