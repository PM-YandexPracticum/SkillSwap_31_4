import type { ReactNode } from 'react';

export type Option = {
	text: string;
	id: string;
	checked: boolean;
};

export type MultiSelectDropdownUIProps = {
	idDropdown: string;
	isAbsolute: boolean;
	label?: string;
	placeholder?: string;
	options: Option[];
	isOpen: boolean;
	onToggle: () => void;
	onSelect: (value: string) => void;
	displayText?: ReactNode;
	variant?: 'default' | 'no-border';
};
