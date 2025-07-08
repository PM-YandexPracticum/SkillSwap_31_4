import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from '../services/store';
import { getUsers } from '../features/userSlice/thunk';
import { getUsersSelector } from '../features/userSlice/userSlice';
import { SkillCardsListInfinite } from '../widgets/SkillCardsList/SkillCardsListInfinite/SkillCardsListInfinite';
import { FiltersBar } from '../widgets/FiltersBar/FiltersBar';
import { Card } from '../shared/ui/Card/Card';

export const Catalog = () => {
	const dispatch = useDispatch();
	const users = useSelector(getUsersSelector);
	const filters = useSelector((state) => state.filters);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	// Сбор всех уникальных навыков из canTeach и wantsToLearn
	const skills = useMemo(() => {
		// Мапа для уникальных навыков по _id
		const skillMap = new Map<
			string,
			{ _id: string; name: string; categoryName: string }
		>();

		users.forEach((user) => {
			user.canTeach?.forEach((skill) => skillMap.set(skill._id, skill));
			user.wantsToLearn?.forEach((skill) => skillMap.set(skill._id, skill));
		});

		// Группируем навыки по categoryName
		const groupedSkills: Record<string, { id: string; name: string }[]> = {};

		skillMap.forEach((skill) => {
			if (!groupedSkills[skill.categoryName]) {
				groupedSkills[skill.categoryName] = [];
			}
			// Проверяем, что в категории такого навыка еще нет (по id)
			if (!groupedSkills[skill.categoryName].some((s) => s.id === skill._id)) {
				groupedSkills[skill.categoryName].push({
					id: skill._id,
					name: skill.name,
				});
			}
		});

		// Преобразуем в массив для удобства (например, для дропдауна)
		return Object.entries(groupedSkills).map(([category, skills]) => ({
			category,
			skills,
		}));
	}, [users]);

	// Сбор городов
	const cities = useMemo(() => {
		const cityMap = new Map<string, { id: string; name: string }>();
		users.forEach((user) => {
			if (user.city) {
				cityMap.set(user.city, { id: user.city, name: user.city });
			}
		});
		return Array.from(cityMap.values());
	}, [users]);

	// Фильтрация пользователей
	const filteredUsers = useMemo(
		() =>
			users.filter((user) => {
				if (filters.gender && user.gender !== filters.gender) return false;

				if (filters.cityIds.length > 0 && !filters.cityIds.includes(user.city))
					return false;

				if (filters.skillIds.length > 0) {
					if (filters.mode === 'wantToLearn') {
						return user.wantsToLearn?.some((s) =>
							filters.skillIds.includes(s.id)
						);
					}
					if (filters.mode === 'canTeach') {
						return user.canTeach?.some((s) => filters.skillIds.includes(s.id));
					}
				}

				return true;
			}),
		[users, filters]
	);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				minHeight: '100vh',
			}}>
			<div style={{ minWidth: 300, flexShrink: 0 }}>
				<FiltersBar skills={skills} cities={cities} />
			</div>

			<div
				style={{
					width: 1020, // число воспринимается как пиксели
					height: 1224,
				}}>
				{filteredUsers.length > 0 ? (
					<SkillCardsListInfinite
						SkillCardsProps={filteredUsers.map((u, index) => ({
							index,
							photo: u.photo,
							userName: u.name,
							userLocation: u.city,
							userAge: u.age,
							isLiked: u.isLiked,
							teachSkills: u.canTeach,
							learnSkills: u.wantsToLearn,
							onClickDetails: () => console.log('Подробнее про', u.name),
							onClickLike: () => console.log('Лайк:', u.name),
						}))}
						title='Пользователи'
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
					<div
						style={{
							minHeight: 200,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<p>Пользователей не найдено</p>
					</div>
				)}
			</div>
		</div>
	);
};
