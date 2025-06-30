import clsx from 'clsx';
import type { TButtonUIProps } from './type';
import styles from './Button.module.scss';

export const ButtonUI = ({
	onClick,
	color,
	width,
	children,
	isDisabled = false,
}: TButtonUIProps) => (
	<button
		type='button'
		style={{ maxWidth: width }}
		className={clsx(styles.button, styles[color])}
		onClick={onClick}
		disabled={isDisabled}>
		{children}
	</button>
);
