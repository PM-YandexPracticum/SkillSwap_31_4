import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import {
	setGender,
	setMode,
	toggleCityId,
	toggleSkillId,
	resetFilters,
} from '../../features/filterSlice/filterSlice';

import { SkillFilterUI } from '../../shared/ui/SkillFilter';
import { CityFilter } from '../../shared/ui/CityFilter';
import { Radio } from '../../shared/ui/Radio';
import styles from './FiltersBar.module.scss';
import crossIcon from '../../images/icons/cross.svg';
import { roleOptions, optionsGender } from './type';
import type { FiltersBarProps } from './type';
import type { TOption } from '../../shared/ui/SkillFilter/type';

export const FiltersBar = ({ skills, cities }: FiltersBarProps) => {
	const dispatch = useDispatch();
	const filters = useSelector((state) => state.filters);

	const [showAllSkills, setShowAllSkills] = useState(false);
	const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
	const [showAllCities, setShowAllCities] = useState(false);

	// UI-флаг: открыть/закрыть подкатегории
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

		skills.forEach(({ category, skills: categorySkills }) => {
			const categoryId = category;

			// Флаг: есть выбранные навыки в категории
			const hasChecked = categorySkills.some((skill) =>
				filters.skillIds.includes(skill.id)
			);

			// Флаг: открыт дропдаун
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
		});

		return options;
	}, [skills, filters.skillIds, openGroups]);

	const countSelectedOptions = useMemo(() => {
		return (
			filters.skillIds.length +
			filters.cityIds.length +
			Number(!!filters.gender) +
			Number(filters.mode !== 'all')
		);
	}, [filters]);

	const checkedCityItems = useMemo(() => {
		const checkedSet = new Set(filters.cityIds);
		return cities.reduce(
			(acc, city) => {
				return {
					...acc,
					[city.id]: checkedSet.has(city.id),
				};
			},
			{} as Record<string, boolean>
		);
	}, [cities, filters.cityIds]);

	return (
		<div className={styles.filterBar}>
			<div className={styles.title}>
				<h2>
					Фильтры {countSelectedOptions > 0 && `(${countSelectedOptions})`}
				</h2>
				{countSelectedOptions > 0 && (
					<button className={styles.reset} onClick={handleReset}>
						<span>Сбросить</span>
						<img
							src={crossIcon}
							className={styles.icon}
							alt='Сбросить фильтры'
						/>
					</button>
				)}
			</div>

			<div className={styles.radioRole}>
				<Radio
					options={roleOptions}
					value={filters.mode}
					name='role'
					onChange={(v) =>
						dispatch(setMode(v as 'all' | 'canTeach' | 'wantToLearn'))
					}
				/>
			</div>

			<div className={styles.skillsFilter}>
				<h3>Навык</h3>
				<SkillFilterUI
					isAllOpen={showAllSkills}
					textAllOpen='Все категории'
					textAllCLose='Свернуть'
					options={skillOptions}
					onChangeSingle={handleSkillCheck}
					onChangeGroup={handleGroupToggle}
					onOpenAll={() => setShowAllSkills((prev) => !prev)}
				/>
			</div>

			<div className={styles.radioGender}>
				<h3>Пол автора</h3>
				<Radio
					options={optionsGender}
					value={filters.gender || 'not'}
					name='gender'
					onChange={(v) =>
						dispatch(
							setGender(v === 'not' ? null : (v as 'Мужской' | 'Женский'))
						)
					}
				/>
			</div>

			<div className={styles.cityFilter}>
				<h3>Город</h3>
				<CityFilter
					items={cities}
					checkedItems={checkedCityItems}
					onChange={handleCityCheck}
					isAllOpen={showAllCities}
					onOpenAll={() => setShowAllCities((prev) => !prev)}
				/>
			</div>
		</div>
	);
};
