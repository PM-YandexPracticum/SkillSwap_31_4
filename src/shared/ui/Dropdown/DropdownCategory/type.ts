import type { Option } from '../MultiSelectDropdown/type';

export type DropdownCategoryUIProps = {
	isChecked: boolean;
	onChange: () => void;
	options: Option[];
	onSelect: (value: string) => void;
	variant?: 'default' | 'no-border';
	displayText: string;
	isOpen: boolean;
	idDropdown: string;
	isAbsolute: boolean;
};
