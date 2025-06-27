import type { ReactNode } from 'react';

export type DropdownBaseUIProps = {
	label?: string;
	placeholder?: string;
	selectedOption?: string;
	isOpen: boolean;
	onToggle: () => void;
	options: Option[];
	onSelect: (value: string) => void;
	displayText?: ReactNode;
	variant?: 'default' | 'no-border';
};

export type Option = {
	value: string; // идентификатор
	text: ReactNode; // текст опции
};
