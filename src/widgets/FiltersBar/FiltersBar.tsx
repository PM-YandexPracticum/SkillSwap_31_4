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

	const countSelectedOptions = useMemo(() => {
		const skillsCount = filters.skillIds.length;
		const cityCount = filters.cityIds.length;
		const genderCount = filters.gender ? 1 : 0;
		const modeCount = filters.mode !== 'all' ? 1 : 0;
		return skillsCount + cityCount + genderCount + modeCount;
	}, [filters]);

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
					onChange={(v) => dispatch(setMode(v))}
				/>
			</div>

			<div className={styles.skillsFilter}>
				<h3>Навык</h3>
				<SkillFilterUI
					isAllOpen={showAllSkills}
					textAllOpen='Все категории'
					textAllCLose='Свернуть'
					options={skills.map((s) => ({
						id: s.id,
						text: s.name,
						parentId: '', // если навыки не группируются — оставить пустым
						checked: filters.skillIds.includes(s.id),
						isOpen: openGroups[s.id] || false,
					}))}
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
					onChange={(v) => dispatch(setGender(v === 'not' ? null : v))}
				/>
			</div>

			<div className={styles.cityFilter}>
				<h3>Город</h3>
				<CityFilter
					items={cities}
					checkedItems={cities.reduce(
						(acc, city) => {
							acc[city.id] = filters.cityIds.includes(city.id);
							return acc;
						},
						{} as Record<string, boolean>
					)}
					onChange={handleCityCheck}
					isAllOpen={showAllCities}
					onOpenAll={() => setShowAllCities((prev) => !prev)}
				/>
			</div>
		</div>
	);
};
