export type TRadioOption = {
	value: string;
	label: string;
};

export type TRadioUIProps = {
	options: TRadioOption[];
	value: string;
	onChange?: (value: string) => void;
	name: string;
};
