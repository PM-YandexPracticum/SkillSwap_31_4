import type { ReactNode } from "react";

export type Option = {
	text: string;
	value: string;
	checked: boolean;
};

export type MultiSelectDropdownUIProps = {
	label?: string;
	placeholder?: string;
	options: Option[];
	isOpen: boolean;
	onToggle: () => void;
	onSelect: (value: string) => void;
	displayText?: ReactNode;
    variant?: 'default' | 'no-border'
};