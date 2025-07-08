import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { getUsers } from '../../features/userSlice/thunk';
import { getUsersSelector } from '../../features/userSlice/userSlice';
import { SkillCardsListInfinite } from '../../widgets/SkillCardsList/SkillCardsListInfinite/SkillCardsListInfinite';
import { FiltersBar } from '../../widgets/FiltersBar/FiltersBar';
import { Card } from '../../shared/ui/Card/Card';
import type { TSkill, TUser } from '../../api/type';
import { Loader } from '@ui';
import styles from './CatalogPresenter.module.scss';
import { SkillCardsListDemo } from '../../widgets/SkillCardsList/SkillCardsListDemo/SkillCardsListDemo';

export const CatalogPresenter = () => {
	const dispatch = useDispatch();
	const users = useSelector(getUsersSelector);
	const filters = useSelector((state) => state.filters);
	const loading = useSelector((state) => state.user.loading);
	const [visibleCount, setVisibleCount] = useState(9);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	// Сбор всех уникальных навыков из canTeach и wantsToLearn
	const skills = useMemo(() => {
		const skillMap = new Map<
			string,
			{ _id: string; name: string; categoryName: string }
		>();

		users.forEach((user) => {
			[...(user.canTeach || []), ...(user.wantsToLearn || [])].forEach(
				(skill) => {
					if (skill && skill.categoryName) {
						skillMap.set(skill._id, skill);
					}
				}
			);
		});

		const groupedSkills = new Map<string, { id: string; name: string }[]>();

		skillMap.forEach((skill) => {
			if (!groupedSkills.has(skill.categoryName)) {
				groupedSkills.set(skill.categoryName, []);
			}
			const arr = groupedSkills.get(skill.categoryName)!;
			if (!arr.some((s) => s.id === skill._id)) {
				arr.push({ id: skill._id, name: skill.name });
			}
		});

		return Array.from(groupedSkills.entries()).map(([category, skills]) => ({
			category,
			skills,
		}));
	}, [users]);

	// Сбор городов
	const cities = useMemo(() => {
		const citySet = new Set<string>();
		users.forEach((user) => {
			if (user.city) citySet.add(user.city);
		});
		return Array.from(citySet).map((city) => ({ id: city, name: city }));
	}, [users]);

	const userMatchesSkills = (user: TUser): boolean => {
		if (filters.skillIds.length === 0) return true;

		const hasSkill = (userSkills: TSkill[]) =>
			userSkills.some((s) => filters.skillIds.includes(s._id));

		switch (filters.mode) {
			case 'wantToLearn':
				return hasSkill(user.wantsToLearn);
			case 'canTeach':
				return hasSkill(user.canTeach);
			default:
				return hasSkill(user.canTeach) || hasSkill(user.wantsToLearn);
		}
	};

	// Фильтрация пользователей
	const filteredUsers = useMemo(() => {
		return users.filter((user) => {
			if (filters.gender && user.gender !== filters.gender) return false;
			if (filters.cityIds.length && !filters.cityIds.includes(user.city))
				return false;
			return userMatchesSkills(user);
		});
	}, [users, filters]);

	const isFiltering = useMemo(() => {
		return (
			filters.skillIds.length > 0 ||
			filters.cityIds.length > 0 ||
			!!filters.gender
		);
	}, [filters]);

	// Популярное и новое
	const currentUserId = useSelector((state) => state.user.user?._id);

	const popularUsers = useMemo(() => {
		return [...users]
			.sort((a, b) => (b.likes?.length || 0) - (a.likes?.length || 0))
			.slice(0, 3);
	}, [users]);

	const newUsers = useMemo(() => {
		return [...users]
			.sort(
				(a, b) =>
					new Date(b.registerDate).getTime() -
					new Date(a.registerDate).getTime()
			)
			.slice(0, 3);
	}, [users]);

	const makeUserCardProps = (user: TUser, index: number) => ({
		index,
		photo: user.photo,
		userName: user.name,
		userLocation: user.city,
		userAge: user.age,
		isLiked: user.likes.includes(currentUserId), // <-- вычисляем isLiked вручную
		teachSkills: user.canTeach,
		learnSkills: user.wantsToLearn,
		onClickDetails: () => console.log('Подробнее про', user.name),
		onClickLike: () => console.log('Лайк:', user.name),
	});

	useEffect(() => {
		setVisibleCount(9);
	}, [filteredUsers]);

	// Функция подгрузки новых карточек по 3 шт.
	const loadMore = () => {
		setVisibleCount((prev) => Math.min(prev + 3, filteredUsers.length));
	};

	// Видимые карточки пользователей
	const visibleUsers = filteredUsers.slice(0, visibleCount);

	const popularProps = useMemo(
		() => popularUsers.map(makeUserCardProps),
		[popularUsers, currentUserId]
	);

	const newProps = useMemo(
		() => newUsers.map(makeUserCardProps),
		[newUsers, currentUserId]
	);

	if (loading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.filtersPanel}>
				<FiltersBar skills={skills} cities={cities} />
			</div>

			<div className={styles.cardsContainer}>
				{isFiltering ? (
					filteredUsers.length > 0 ? (
						<SkillCardsListInfinite
							SkillCardsProps={filteredUsers.map((u, index) => ({
								index,
								photo: u.photo,
								userName: u.name,
								userLocation: u.city,
								userAge: u.age,
								isLiked: u.likes.includes(currentUserId),
								teachSkills: u.canTeach,
								learnSkills: u.wantsToLearn,
								onClickDetails: () => console.log('Подробнее про', u.name),
								onClickLike: () => console.log('Лайк:', u.name),
							}))}
							title={`Подходящие предложения: ${filteredUsers.length}`}
							SkillCard={Card}
							InfiniteScrollProps={{
								dataLength: filteredUsers.length,
								hasMore: false,
								next: () => {},
								loader: <span>Загрузка...</span>,
								endMessage: <span>Это всё</span>,
							}}
							isHasButtonNew={false}
						/>
					) : (
						<div className={styles.text}>
							<p>Пользователей не найдено</p>
						</div>
					)
				) : (
					<>
						<SkillCardsListDemo
							title='Популярное'
							SkillCard={Card}
							SkillCardsProps={popularProps}
							maxCardCount={3}
							onClickButtonMore={() => console.log('Смотреть все популярное')}
						/>

						<SkillCardsListDemo
							title='Новое'
							SkillCard={Card}
							SkillCardsProps={newProps}
							maxCardCount={3}
							onClickButtonMore={() => console.log('Смотреть все новое')}
						/>

						<SkillCardsListInfinite
							SkillCardsProps={visibleUsers.map((u, index) => ({
								index,
								photo: u.photo,
								userName: u.name,
								userLocation: u.city,
								userAge: u.age,
								isLiked: u.likes.includes(currentUserId),
								teachSkills: u.canTeach,
								learnSkills: u.wantsToLearn,
								onClickDetails: () => console.log('Подробнее про', u.name),
								onClickLike: () => console.log('Лайк:', u.name),
							}))}
							title='Рекомендуем'
							SkillCard={Card}
							InfiniteScrollProps={{
								dataLength: visibleUsers.length,
								hasMore: visibleCount < filteredUsers.length,
								next: loadMore,
								loader: <span>Загрузка...</span>,
								endMessage: <span>Это всё</span>,
							}}
							isHasButtonNew={false}
						/>
					</>
				)}
			</div>
		</div>
	);
};
