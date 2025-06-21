import clsx from 'clsx';
import type { TButtonUIProps } from './type';
import styles from './Button.module.scss';

export const ButtonUI = ({
	onClick,
	color,
	size = 'large',
	text,
	isDisabled = false,
}: TButtonUIProps) => (
	<button
		type='button'
		className={clsx(styles.button, styles[color], styles[size])}
		onClick={onClick}
		disabled={isDisabled}>
		{text}
	</button>
);
