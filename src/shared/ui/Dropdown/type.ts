export type TOption = {
	value: string;
	text: string;
};

export type TDropdownUIProps = {
	label?: string;
	options: TOption[];
	placeholder?: string;
	onChange: (value: string) => void;
	multiple?: boolean;
	isOpen: boolean;
	onToggle: () => void;
	displayText: string; // текст на кнопке
	selectedMap: Record<string, boolean>; // выбранные значения
};
