import { useEffect, useState } from 'react';
import { SkillFilterUI } from '../../shared/ui/SkillFilter';
import { CityFilter } from '../../shared/ui/CityFilter';
import { Radio } from '../../shared/ui/Radio';
import styles from './FiltersBar.module.scss';
import crossIcon from '../../images/icons/cross.svg';
import { roleOptions, optionsGender } from './type';
import type { FiltersBarProps, SkillOption } from './type';

export const FiltersBar = ({ skills, cities }: FiltersBarProps) => {
	const [selectedRole, setSelectedRole] = useState<string>('all');
	const [selectedGender, setSelectedGender] = useState<string>('not');
	const [showAllSkills, setShowAllSkills] = useState<boolean>(false);
	const [showAllCities, setShowAllCities] = useState<boolean>(false);
	const [skillsState, setSkillsState] = useState<SkillOption[]>([]);
	const [checkedCities, setCheckedCities] = useState<Record<string, boolean>>(
		{}
	);

	useEffect(() => {
		if (skills.length > 0) {
			setSkillsState(
				skills.map((s) => ({ ...s, checked: false, isOpen: false }))
			);
		}
	}, [skills]);

	useEffect(() => {
		const initialCheckedCities: Record<string, boolean> = {};
		cities.forEach((city) => {
			initialCheckedCities[city.id] = false;
		});
		setCheckedCities(initialCheckedCities);
	}, [cities]);

	const toggleSkillProperty = (id: string, property: 'checked' | 'isOpen') => {
		setSkillsState((prev) =>
			prev.map((item) => {
				if (item.id === id) {
					if (property === 'isOpen') {
						// меняем isOpen
						const newIsOpen = !item.isOpen;

						// получаем всех детей этой категории
						const children = prev.filter(
							(s) => s.parentId === id && s.id !== id
						);

						// если открываем — всегда выделяем категорию
						if (newIsOpen) {
							return { ...item, isOpen: newIsOpen, checked: true };
						}

						// если закрываем — проверяем: есть ли выбранные дети
						const hasCheckedChildren = children.some((s) => s.checked);
						return {
							...item,
							isOpen: newIsOpen,
							checked: hasCheckedChildren,
						};
					}

					// Для обычного переключения чекбокса
					return { ...item, [property]: !item[property] };
				}
				return item;
			})
		);
	};

	const handleSkillCheck = (id: string) => toggleSkillProperty(id, 'checked');
	const handleGroupToggle = (id: string) => toggleSkillProperty(id, 'isOpen');

	const handleCityCheck = (id: string) => {
		setCheckedCities((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const handleReset = () => {
		setSelectedRole('all');
		setSelectedGender('not');
		setSkillsState((prev) =>
			prev.map((s) => ({ ...s, checked: false, isOpen: false }))
		);
		setCheckedCities((prev) =>
			Object.fromEntries(Object.keys(prev).map((k) => [k, false]))
		);
		setShowAllSkills(false);
		setShowAllCities(false);
	};

	const countSelectedOptions = () => {
		const selectedSkillsCount = skillsState.filter((s) => s.checked).length;
		const selectedCitiesCount =
			Object.values(checkedCities).filter(Boolean).length;
		const selectedGenderCount = selectedGender !== 'not' ? 1 : 0;
		const selectedRoleCount = selectedRole !== 'all' ? 1 : 0;
		return (
			selectedSkillsCount +
			selectedCitiesCount +
			selectedGenderCount +
			selectedRoleCount
		);
	};

	const number = countSelectedOptions();

	return (
		<div className={styles.filterBar}>
			<div className={styles.title}>
				<h2>Фильтры {number > 0 && `(${number})`}</h2>
				{number > 0 && (
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
					value={selectedRole}
					name='role'
					onChange={setSelectedRole}
				/>
			</div>

			<div className={styles.skillsFilter}>
				<h3>Навык</h3>
				<SkillFilterUI
					isAllOpen={showAllSkills}
					textAllOpen='Все категории'
					textAllCLose='Свернуть'
					options={skillsState}
					onChangeSingle={handleSkillCheck}
					onChangeGroup={handleGroupToggle}
					onOpenAll={() => setShowAllSkills((prev) => !prev)}
				/>
			</div>

			<div className={styles.radioGender}>
				<h3>Пол</h3>
				<Radio
					options={optionsGender}
					value={selectedGender}
					name='gender'
					onChange={setSelectedGender}
				/>
			</div>

			<div className={styles.cityFilter}>
				<h3>Город</h3>
				<CityFilter
					items={cities}
					checkedItems={checkedCities}
					onChange={handleCityCheck}
					isAllOpen={showAllCities}
					onOpenAll={() => setShowAllCities((prev) => !prev)}
				/>
			</div>
		</div>
	);
};
