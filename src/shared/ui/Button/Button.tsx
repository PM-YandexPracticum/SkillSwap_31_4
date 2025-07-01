import clsx from 'clsx';
import type { TButtonUIProps } from './type';
import styles from './Button.module.scss';

export const ButtonUI = ({
	onClick,
	color,
	width,
	children,
	isDisabled = false,
	htmlType = 'button',
}: TButtonUIProps) => (
	<button
		type={htmlType}
		style={{ maxWidth: width }}
		className={clsx(styles.button, styles[color])}
		onClick={onClick}
		disabled={isDisabled}>
		{children}
	</button>
);
