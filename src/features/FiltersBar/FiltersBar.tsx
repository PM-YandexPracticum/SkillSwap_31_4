import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import {
	setGender,
	setMode,
	toggleCityId,
	toggleSkillId,
	resetFilters,
} from '../../entities/filtersSlice/filterSlice';
import type { TOption } from '../../shared/ui/SkillFilter/type';
import type { TGroupedSkill, UseFiltersBarLogicProps } from './FiltersBarProps';

export const useFiltersBarLogic = ({
	skills,
	cities,
}: UseFiltersBarLogicProps) => {
	const dispatch = useDispatch();
	const filters = useSelector((state) => state.filters);

	const [showAllSkills, setShowAllSkills] = useState(false);
	const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
	const [showAllCities, setShowAllCities] = useState(false);

	const handleGroupToggle = (id: string) => {
		setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
	};

	const handleSkillCheck = (id: string) => {
		dispatch(toggleSkillId(id));
	};

	const handleCityCheck = (id: string) => {
		dispatch(toggleCityId(id));
	};

	const handleReset = () => {
		dispatch(resetFilters());
		setOpenGroups({});
		setShowAllSkills(false);
		setShowAllCities(false);
	};

	const skillOptions = useMemo(() => {
		const options: TOption[] = [];

		(skills as TGroupedSkill[]).forEach(
			({ category, skills: categorySkills }) => {
				const categoryId = category;
				const hasChecked = categorySkills.some((skill) =>
					filters.skillIds.includes(skill.id)
				);
				const isOpen = openGroups[categoryId] || false;

				options.push({
					id: categoryId,
					parentId: categoryId,
					text: category,
					checked: hasChecked || isOpen,
					isOpen,
				});

				categorySkills.forEach((skill) => {
					options.push({
						id: skill.id,
						parentId: categoryId,
						text: skill.name,
						checked: filters.skillIds.includes(skill.id),
						isOpen: false,
					});
				});
			}
		);

		return options;
	}, [skills, filters.skillIds, openGroups]);

	const countSelectedOptions = useMemo(
		() =>
			filters.skillIds.length +
			filters.cityIds.length +
			Number(!!filters.gender) +
			Number(filters.mode !== 'all'),
		[filters]
	);

	const checkedCityItems = useMemo(() => {
		const checkedSet = new Set(filters.cityIds);
		return cities.reduce(
			(acc, city) => ({ ...acc, [city.id]: checkedSet.has(city.id) }),
			{} as Record<string, boolean>
		);
	}, [cities, filters.cityIds]);

	const setGenderFilter = (v: string) => {
		dispatch(setGender(v === 'not' ? null : (v as 'Мужской' | 'Женский')));
	};

	const setModeFilter = (v: string) => {
		dispatch(setMode(v as 'all' | 'canTeach' | 'wantToLearn'));
	};

	return {
		showAllSkills,
		setShowAllSkills,
		openGroups,
		handleGroupToggle,
		handleSkillCheck,
		handleCityCheck,
		handleReset,
		skillOptions,
		countSelectedOptions,
		checkedCityItems,
		showAllCities,
		setShowAllCities,
		filters,
		setGenderFilter,
		setModeFilter,
	};
};
