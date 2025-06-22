import clsx from 'clsx';
import type { TDropdownUIProps } from './type';
import styles from './Dropdown.module.scss';
import ArrowDownIcon from '../../../images/icons/chevron-down.svg';
import CheckboxChecked from '../../../images/icons/checkbox-done.svg';
import CheckboxUnchecked from '../../../images/icons/checkbox-empty.svg';

export const DropdownUI: React.FC<TDropdownUIProps> = ({
	label,
	options,
	placeholder = '',
	onChange,
	multiple = false,
	isOpen,
	onToggle,
	displayText,
	selectedMap,
}) => (
	<div className={clsx(styles.container, multiple && styles.multiple)}>
		<label className={styles.label}>{label}</label>
		<div className={clsx(styles.dropdown, { [styles.open]: isOpen })}>
			<button className={styles.button} onClick={onToggle} type='button'>
				<span
					className={clsx({
						[styles.placeholder]: displayText === placeholder,
					})}>
					{displayText}
				</span>
				<img
					src={ArrowDownIcon}
					className={clsx(styles.arrow, { [styles.arrowOpen]: isOpen })}
					alt='Стрелка'
				/>
			</button>
			{isOpen && (
				<div className={styles.options}>
					{options.map((option) => (
						<div
							key={option.value}
							className={clsx(styles.option, {
								[styles.selected]: selectedMap[option.value],
							})}
							onClick={() => onChange(option.value)}>
							<div className={styles.optionContent}>
								{multiple && (
									<img
										src={
											selectedMap[option.value]
												? CheckboxChecked
												: CheckboxUnchecked
										}
										className={styles.checkboxIcon}
										onClick={(e) => e.stopPropagation()}
									/>
								)}
								<span className={styles.optionText}>{option.text}</span>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	</div>
);

/* <DropdownUI не забыть использовать все что внизу компоненте. В сторибуке в целом есть неокторая логика
      label="Например города"
      options={какие-то опции}
      onChange={handleChange}
      isOpen={isOpen}
      onToggle={handleToggle}
      multiple -множественный дропдаун или нет
      placeholder="Не выбрано"
      selectedMap={selectedMap} //выбранные значения
      displayText={displayText} // текст выбранного значения (кол-ва) на "кнопке"
    />
    
    После написание компонента, примерное использование
    <Dropdown
    label="Города"
    options={options}
    multiple={true}
    placeholder="Не выбрано"
/> */
