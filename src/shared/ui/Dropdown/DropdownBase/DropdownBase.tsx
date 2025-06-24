import clsx from 'clsx';
import type { TDropdownBaseUIProps } from './type';
import styles from '../DropdownBase/DropdownBase.module.scss';
import ArrowDownIcon from '../../../../images/icons/chevron-down.svg';

export const DropdownBaseUI: React.FC<TDropdownBaseUIProps> = ({
	label,
	placeholder = '',
	selectedOption,
	isOpen,
	onToggle,
	options = [],
	onSelect,
}) => (
	<div className={styles.container}>
		{label && <label className={styles.label}>{label}</label>}

		<div className={clsx(styles.dropdown, { [styles.open]: isOpen })}>
			<button type='button' className={styles.button} onClick={onToggle}>
				<span
					className={clsx({
						[styles.placeholder]: !selectedOption,
					})}>
					{selectedOption || placeholder}
				</span>
				<img
					src={ArrowDownIcon}
					className={clsx(styles.arrow, {
						[styles.arrowOpen]: isOpen,
					})}
					alt='Стрелка вниз'
				/>
			</button>

			{isOpen && (
				<ul className={styles.dropdownList}>
					{options.map((option) => (
						<li
							key={option.value}
							className={clsx(styles.optionItem, {
								[styles.selected]: option.value === selectedOption,
							})}
							onClick={() => onSelect?.(option.value)}>
							{option.text}
						</li>
					))}
				</ul>
			)}
		</div>
	</div>
);
