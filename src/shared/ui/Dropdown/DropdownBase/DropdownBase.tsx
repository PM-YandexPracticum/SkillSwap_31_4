import clsx from 'clsx';
import type { DropdownBaseUIProps } from './type';
import styles from './DropdownBase.module.scss';
import ArrowDownIcon from '../../../../images/icons/chevron-down.svg';

export const DropdownBaseUI = ({
	label,
	placeholder,
	selectedOption,
	isOpen,
	onToggle,
	options = [],
	onSelect,
	displayText,
	variant,
}: DropdownBaseUIProps) => (
	<div className={styles.container}>
		{label && (
			<label htmlFor='dropdown' className={styles.label}>
				{label}
			</label>
		)}

		<div className={clsx(styles.dropdown, { [styles.open]: isOpen })}>
			<button
				type='button'
				className={clsx(styles.button, {
					[styles.noBorderButton]: variant === 'no-border',
				})}
				onClick={onToggle}>
				<span
					className={clsx({
						[styles.placeholder]: !selectedOption && !displayText,
					})}>
					{displayText || placeholder}
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
				<ul
					className={clsx(styles.dropdownList, {
						[styles.noBorderDropdownList]: variant === 'no-border',
					})}>
					{options.map((option) => (
						<li key={option.value}>
							<button
								type='button'
								className={clsx(styles.optionItem, {
									[styles.selected]: option.value === selectedOption,
								})}
								onClick={() => onSelect?.(option.value)}>
								<p className={styles.itemText}>{option.text}</p>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	</div>
);
