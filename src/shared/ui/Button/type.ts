import type { ReactNode } from 'react';

export type TButtonUIProps = {
	onClick?: () => void;
	color: 'primary' | 'secondary' | 'tertiary';
	width?: string;
	children?: ReactNode;
	isDisabled?: boolean;
	icon?: ReactNode;
	iconPosition?: 'left' | 'right';
	htmlType?: 'button' | 'submit' | 'reset';
	className?: string;
};
