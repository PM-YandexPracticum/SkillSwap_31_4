import type { ReactNode } from 'react';

export type TButtonUIProps = {
	onClick?: () => void;
	color: 'primary' | 'secondary' | 'tertiary';
	width?: string;
	children?: ReactNode;
	isDisabled?: boolean;
	htmlType?: 'button' | 'submit' | 'reset';
	className?: string;
};
