export default interface DataPickerProps {
	onInput: (date: Date) => void;
	title: string;
	error?: string;
	maxDate?: Date;
	minDate?: Date;
}
