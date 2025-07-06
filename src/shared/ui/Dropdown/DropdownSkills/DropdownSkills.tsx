import clsx from 'clsx';
import { useState } from 'react';
import styles from './DropdownSkills.module.scss';
import ArrowDownIcon from '../../../../images/icons/chevron-down.svg';
import { SkillIcon } from '../../SkillIcon';
import type { TDropdownSkillsUIProps } from './type';

export const DropdownSkillsUI = ({
	skillsData,
	onTagClick,
	onTitleClick,
}: TDropdownSkillsUIProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};
	return (
		<div className={clsx(styles.dropdown, { [styles.open]: isOpen })}>
			<button type='button' className={styles.button} onClick={handleClick}>
				<span>Все навыки</span>
				<img
					src={ArrowDownIcon}
					className={clsx(styles.arrow, {
						[styles.arrowOpen]: isOpen,
					})}
					alt='Стрелка вниз'
				/>
			</button>

			{isOpen && (
				<div className={styles.menu}>
					{skillsData.map((item) => (
						<div key={item.category._id} className={styles.menuGroup}>
							<SkillIcon category={item.category.name} />
							<div className={styles.tagsContainer}>
								<button onClick={() => onTitleClick && onTitleClick(item)}>
									<h2 className={styles.title}>{item.category.name}</h2>
								</button>
								{item.skills.map((skill) => (
									<button
										key={skill._id}
										type='button'
										className={styles.tag}
										onClick={() => onTagClick && onTagClick(skill)}>
										<span className={styles.text}>{skill.name}</span>
									</button>
								))}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
