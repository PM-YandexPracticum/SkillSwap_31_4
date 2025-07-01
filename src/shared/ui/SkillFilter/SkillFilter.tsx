import clsx from 'clsx';
import ArrowDownIcon from '@images/icons/chevron-down.svg';
import type { TSkillFilterUIProps, TOption } from './type';
import { CheckboxFilterCategoryUI } from '../CheckboxFilterCategory';
import { DropdownCategoryUI } from '../Dropdown';
import styles from './SkillFilter.module.scss';

export const SkillFilterUI = ({
	label,
	options,
	isAllOpen,
	textAllOpen,
	onChangeSingle,
	onOpenAll,
	onChangeGroup,
}: TSkillFilterUIProps) => {
	const filterParent = (values: TOption[], count: number): TOption[] => {
		const filterOptions = values.filter(
			(option) => option.parentId === '' || option.parentId === option.id
		);
		return !isAllOpen ? filterOptions.slice(0, count) : filterOptions;
	};

	const filterChild = (values: TOption[], id: string): TOption[] => {
		const filterOptions = values.filter(
			(option) => option.parentId === id && option.parentId !== option.id
		);
		return filterOptions;
	};

	return (
		<div className={styles.container}>
			{label && <h3 className={clsx(styles.label)}>{label}</h3>}
			<div className={clsx(styles.skills)}>
				{filterParent(options, 6).map((option) => {
					if (option.parentId === '') {
						return (
							<CheckboxFilterCategoryUI
								key={option.id}
								id={option.id}
								text={option.text}
								isChecked={option.checked}
								onChange={() => onChangeSingle(option.id)}
							/>
						);
					}
					return (
						<DropdownCategoryUI
							key={option.id}
							idDropdown={option.id}
							isAbsolute={false}
							isChecked={option.checked}
							onChange={() => onChangeGroup(option.id)}
							options={filterChild(options, option.id)}
							onSelect={onChangeSingle}
							displayText={option.text}
							variant='no-border'
							isOpen={option.isOpen}
						/>
					);
				})}
			</div>
			{textAllOpen && filterParent(options, options.length).length > 6 && (
				<div className={clsx(styles.allOptions)} onClick={onOpenAll}>
					<span>{textAllOpen}</span>
					<img
						src={ArrowDownIcon}
						className={clsx(styles.arrow, {
							[styles.arrowOpen]: isAllOpen,
						})}
						alt='Стрелка вниз'
					/>
				</div>
			)}
		</div>
	);
};
