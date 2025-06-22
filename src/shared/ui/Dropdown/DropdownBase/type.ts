export type TDropdownBaseUIProps = {
	label?: string;
	placeholder?: string;
  	isPlaceholderActive: boolean; //чтобы сделать пресхолдер неактивным припервом открытии стр, даже если текст совпаладет с опцией
	isOpen: boolean;
	onToggle: () => void;
  	children?: React.ReactNode; //чтобы сделать базовый бропдаун и его переиспользовать
	displayText?: string; // текст на кнопке
};
