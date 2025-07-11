/* eslint-disable react/destructuring-assignment */
import { SkillFilterUI } from '../../shared/ui/SkillFilter';
import { CityFilter } from '../../shared/ui/CityFilter';
import { Radio } from '../../shared/ui/Radio';
import styles from './FiltersBar.module.scss';
import crossIcon from '../../images/icons/cross.svg';
import { roleOptions, optionsGender } from './type';
import type { FiltersBarProps } from './type';
import { useFiltersBarLogic } from '../../features/FiltersBar/FiltersBar';

export const FiltersBar = ({ cities, ...props }: FiltersBarProps) => {
	const {
		showAllSkills,
		setShowAllSkills,
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
	} = useFiltersBarLogic({ ...props, cities });

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
					onChange={setModeFilter}
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
					onChange={setGenderFilter}
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
