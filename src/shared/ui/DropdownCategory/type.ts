import type { Option } from '../Dropdown/MultiSelectDropdown/type';

export type DropdownCategoryUIProps = {
	isChecked: boolean;
	onChange: () => void;
	options: Option[];
	onSelect: (value: string) => void;
	variant?: 'default' | 'no-border';
	displayText: string;
	isOpen: boolean;
};
