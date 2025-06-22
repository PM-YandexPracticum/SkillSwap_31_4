export type TButtonUIProps = {
	onClick?: () => void;
	color: 'primary' | 'secondary' | 'tertiary';
	width?: string;
	text: string;
	isDisabled?: boolean;
};
