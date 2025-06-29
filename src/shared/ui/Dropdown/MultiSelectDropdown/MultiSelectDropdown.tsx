import { DropdownBaseUI } from '../DropdownBase/DropdownBase';
import type { MultiSelectDropdownUIProps } from './type';
import { CheckboxFilterCategoryUI } from '../../CheckboxFilterCategory';

export const MultiSelectDropdownUI = ({
	label,
	placeholder,
	options,
	isOpen,
	onToggle,
	onSelect,
	displayText,
	variant,
	idDropdown,
}: MultiSelectDropdownUIProps) => (
	<DropdownBaseUI
		idDropdown={idDropdown}
		label={label}
		placeholder={placeholder}
		displayText={displayText}
		isOpen={isOpen}
		onToggle={onToggle}
		onSelect={onSelect}
		variant={variant} // стили для кнопки
		options={options.map((item) => ({
			value: item.id,
			text: (
				<CheckboxFilterCategoryUI
					id={item.id}
					text={item.text}
					isChecked={item.checked}
					onChange={() => onSelect(item.id)}
				/>
			),
		}))}
	/>
);
