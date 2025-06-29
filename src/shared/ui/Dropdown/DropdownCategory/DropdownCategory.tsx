import { MultiSelectDropdownUI } from '../MultiSelectDropdown/MultiSelectDropdown';
import { CheckboxCategoryUI } from '../../CheckboxCategory';
import type { DropdownCategoryUIProps } from './type';
import styles from './DropdownCategory.module.scss';

export const DropdownCategoryUI = ({
	idDropdown, // уникальный айди дропдауна
	isChecked,
	onChange,
	options,
	onSelect,
	displayText,
	variant,
	isOpen,
}: DropdownCategoryUIProps) => (
	<div className={styles.dropdownCategoryWrapper}>
		<CheckboxCategoryUI isChecked={isChecked} onClick={onChange} />
		<MultiSelectDropdownUI
			idDropdown={idDropdown}
			options={options}
			isOpen={isOpen}
			onToggle={onChange}
			onSelect={onSelect}
			variant={variant}
			displayText={displayText} // всегда показываем переданный текст
		/>
	</div>
);
