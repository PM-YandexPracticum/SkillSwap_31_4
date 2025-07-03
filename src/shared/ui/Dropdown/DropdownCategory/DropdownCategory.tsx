import { MultiSelectDropdownUI } from '../MultiSelectDropdown/MultiSelectDropdown';
import { CheckboxCategoryUI } from '../../CheckboxCategory';
import type { DropdownCategoryUIProps } from './type';
import styles from './DropdownCategory.module.scss';

export const DropdownCategoryUI = ({
	idDropdown, // уникальный айди дропдауна
	isAbsolute,
	isChecked,
	onChange,
	options,
	onSelect,
	displayText,
	variant,
	isOpen,
}: DropdownCategoryUIProps) => {
	// проверяем, есть ли выбранные опции у текущего дропдауна
	const hasCheckedOptions = options.some((opt) => opt.checked);

	// итоговое состояние чекбокса — либо пользователь включил вручную, либо уже что-то выбрано
	const effectiveChecked = isChecked || hasCheckedOptions;

	return (
		<div className={styles.dropdownCategoryWrapper}>
			<CheckboxCategoryUI isChecked={effectiveChecked} onClick={onChange} />
			<MultiSelectDropdownUI
				idDropdown={idDropdown}
				isAbsolute={isAbsolute}
				options={options}
				isOpen={isOpen}
				onToggle={onChange}
				onSelect={onSelect}
				variant={variant}
				displayText={displayText} // всегда показываем переданный текст
			/>
		</div>
	);
};
