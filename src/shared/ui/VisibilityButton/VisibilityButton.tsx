import visibleEye from '@images/icons/eye.svg';
import unVisibleEye from '@images/icons/eye-slash.svg';
import type { TVisibilityButtonProps } from './type';
import styles from './VisibilityButton.module.scss';

export const VisibilityButton = ({
	isHidden,
	onClick,
}: TVisibilityButtonProps) => {
	return (
		<button className={styles.button} type='button' onClick={onClick}>
			{isHidden ? (
				<img className={styles.image} src={unVisibleEye} alt='Иконка скрыто' />
			) : (
				<img className={styles.image} src={visibleEye} alt='Иконка не скрыто' />
			)}
		</button>
	);
};
