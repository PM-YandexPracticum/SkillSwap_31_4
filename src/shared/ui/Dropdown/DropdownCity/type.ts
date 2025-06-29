export type TDropdownCityUIProps = {
	label?: string;
	placeholder?: string;
	selectedOption?: string;
	isOpen: boolean;
	options: TOption[];
	onClick: () => void;
	onClear: () => void;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSelect?: (value: string) => void;
};

export type TOption = {
	text: string; // текст опции
};
