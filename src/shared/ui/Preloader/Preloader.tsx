import clsx from 'clsx';
import styles from './Preloader.module.scss';
import type { TPreloaderProps } from './type';

export const Preloader = ({ isAbsolute }: TPreloaderProps) => (
	<div
		className={clsx(styles.preloader, { [styles.preloaderFixed]: isAbsolute })}>
		<div
			className={clsx(styles.preloader__row, {
				[styles.preloaderAbsolute]: isAbsolute,
			})}>
			<div className={clsx(styles.preloader__item)} />
			<div className={clsx(styles.preloader__item)} />
		</div>
	</div>
);
