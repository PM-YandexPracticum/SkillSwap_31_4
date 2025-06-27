import { DropdownBaseUI } from '../DropdownBase/DropdownBase';
import { CheckboxSubcategoryUI } from '../../CheckboxSubcategory';
import styles from './MultiSelectDropdown.module.scss'
import type {MultiSelectDropdownUIProps} from './type'

export const MultiSelectDropdownUI = ({
	label,
	placeholder,
	options,
	isOpen,
	onToggle,
	onSelect,
    displayText,
    variant
}: MultiSelectDropdownUIProps) => {

	return (
		<DropdownBaseUI
			label={label}
			placeholder={placeholder}
            displayText={displayText}
			isOpen={isOpen}
			onToggle={onToggle}
			onSelect={onSelect}
			options={options.map((opt) => ({
				value: opt.value,
				text: (
					<div className={styles.optionWrapper}>
						<CheckboxSubcategoryUI
							isChecked={opt.checked}
							onClick={() => onSelect(opt.value)}
						/>
						<span>{opt.text}</span>
					</div>
				),
			}))}
            variant={variant}
		/>
	);
};