import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { getUsers } from '../../entities/userSlice/thunk';
import { getUsersSelector } from '../../entities/userSlice/userSlice';
import type { TSkill, TUser } from '../../api/type';

export const Catalog = () => {
	const dispatch = useDispatch();
	const users = useSelector(getUsersSelector);
	const filters = useSelector((state) => state.filters);
	const currentUserId = useSelector((state) => state.user.user?._id);
	const [visibleCount, setVisibleCount] = useState(9);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	useEffect(() => {
		setVisibleCount(9);
	}, [filters]);

	const skills = useMemo(() => {
		const skillMap = new Map<
			string,
			{ _id: string; name: string; categoryName: string }
		>();
		users.forEach((user) => {
			[...(user.canTeach || []), ...(user.wantsToLearn || [])].forEach(
				(skill) => {
					if (skill?.categoryName) {
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

		return Array.from(groupedSkills.entries()).map(
			([category, skillsArray]) => ({
				category,
				skills: skillsArray,
			})
		);
	}, [users]);

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

	const filteredUsers = useMemo(
		() =>
			users.filter((user) => {
				if (filters.gender && user.gender !== filters.gender) return false;
				if (filters.cityIds.length && !filters.cityIds.includes(user.city))
					return false;
				return userMatchesSkills(user);
			}),
		[users, filters]
	);

	const isFiltering = useMemo(
		() =>
			filters.skillIds.length > 0 ||
			filters.cityIds.length > 0 ||
			!!filters.gender,
		[filters]
	);

	const popularUsers = useMemo(
		() =>
			[...users]
				.sort((a, b) => (b.likes?.length || 0) - (a.likes?.length || 0))
				.slice(0, 3),
		[users]
	);

	const newUsers = useMemo(
		() =>
			[...users]
				.sort(
					(a, b) =>
						new Date(b.registerDate).getTime() -
						new Date(a.registerDate).getTime()
				)
				.slice(0, 3),
		[users]
	);

	const makeUserCardProps = (user: TUser) => ({
		_id: user._id,
		user,
		withDescription: false, // или false — в зависимости от ситуации
	});

	const loadMore = () => {
		setVisibleCount((prev) => Math.min(prev + 3, filteredUsers.length));
	};

	const visibleUsers = filteredUsers.slice(0, visibleCount);
	const loadingUsers = useSelector((state) => state.user.loadingUsers);

	return {
		skills,
		cities,
		isFiltering,
		filteredUsers,
		visibleUsers,
		popularUsers,
		newUsers,
		makeUserCardProps,
		loadMore,
		visibleCount,
		currentUserId,
		loading: loadingUsers,
	};
};
