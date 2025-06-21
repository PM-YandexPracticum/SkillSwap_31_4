export type TButtonUIProps = {
	onClick?: () => void;
	color: 'primary' | 'secondary' | 'tertiary';
	size?: 'small' | 'medium' | 'large';
	text: string;
	isDisabled?: boolean;
};
