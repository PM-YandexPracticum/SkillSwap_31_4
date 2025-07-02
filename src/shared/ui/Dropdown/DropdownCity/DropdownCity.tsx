import clsx from 'clsx';
import ArrowDownIcon from '@images/icons/chevron-down.svg';
import CrossIcon from '@images/icons/cross.svg';
import type { TDropdownCityUIProps, TOption } from './type';
import styles from './DropdownCity.module.scss';

export const DropdownCityUI = ({
	label,
	placeholder = '',
	selectedOption,
	isOpen,
	options = [],
	onClick,
	onClear,
	onInputChange,
	onSelect,
}: TDropdownCityUIProps) => {
	const filterOption = (values: TOption[]): TOption[] => {
		const filterOptions = values.filter(
			(option) =>
				option.text
					.toLowerCase()
					.indexOf(selectedOption ? selectedOption.toLowerCase() : '') === 0
		);

		return filterOptions.slice(0, 10);
	};

	return (
		<div className={styles.container}>
			{label && (
				<label htmlFor='dropdown' className={styles.label}>
					{label}
				</label>
			)}

			<div className={clsx(styles.dropdown, { [styles.open]: isOpen })}>
				<div className={styles.searchPanel}>
					<input
						type='text'
						className={styles.inputSearch}
						value={selectedOption || ''}
						placeholder={placeholder}
						onChange={onInputChange}
						onClick={onClick}
					/>
					{!selectedOption && (
						<button
							type='button'
							className={styles.buttonSearch}
							onClick={onClick}>
							<img
								src={ArrowDownIcon}
								className={clsx(styles.arrow, {
									[styles.arrowOpen]: isOpen,
								})}
								alt='Стрелка вниз'
							/>
						</button>
					)}
					{selectedOption && (
						<button
							type='button'
							className={styles.buttonSearch}
							onClick={onClear}>
							<img
								src={CrossIcon}
								className={clsx(styles.arrow)}
								alt='Очистить'
							/>
						</button>
					)}
				</div>

				{isOpen && (
					<ul className={clsx(styles.dropdownList, styles.scrollContainer)}>
						{filterOption(options).length !== 0 &&
							filterOption(options).map((option) => (
								<li key={Math.random() * options.length * 10}>
									<button
										type='button'
										className={clsx(styles.optionItem, {
											[styles.selected]: option.text === selectedOption,
										})}
										onClick={() => onSelect?.(option.text)}>
										<p className={styles.itemText}>{option.text}</p>
									</button>
								</li>
							))}
						{filterOption(options).length === 0 && (
							<li key={Math.random() * 10}>
								<p className={styles.itemEmpty}>Не найдено</p>
							</li>
						)}
					</ul>
				)}
			</div>
		</div>
	);
};
