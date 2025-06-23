import styles from './LikeButton.module.scss';
import type { LikeButtonProps } from './type';

export const LikeButtonUI = ({ isLiked, onClick }: LikeButtonProps) => (
	<button type='button' className={styles.button}>
		<svg
			className={styles.icon}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M7.95 4C5.21619 4 3 6.1521 3 8.80682C3 13.6136 8.85 17.9835 12 19C15.15 17.9835 21 13.6136 21 8.80682C21 6.1521 18.7838 4 16.05 4C14.3759 4 12.8958 4.80707 12 6.04238C11.1042 4.80707 9.62414 4 7.95 4Z'
				stroke={isLiked ? 'var(--color-accent)' : 'currentColor'}
				fill={isLiked ? 'var(--color-accent)' : 'currentColor'}
				fillOpacity={isLiked ? 1 : 0}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				onClick={onClick}
			/>
		</svg>
	</button>
);
