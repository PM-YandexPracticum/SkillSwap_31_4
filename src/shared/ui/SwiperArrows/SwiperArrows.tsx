import Arrow from '@images/icons/chevron-right.svg';
import styles from './SwiperArrows.module.scss';
import type { SwiperArrowsProps } from './type';

export const SwiperArrows = ({
	onPrev,
	onNext,
	disabledPrev,
	disabledNext,
}: SwiperArrowsProps) => (
	<div className={styles.swiperArrows}>
		<button
			type='button'
			onClick={onPrev}
			disabled={disabledPrev}
			className={`${styles.swiper__button} ${styles.swiper__button_left}`}>
			<img src={Arrow} alt='Стрелка лево' />
		</button>
		<button
			type='button'
			onClick={onNext}
			disabled={disabledNext}
			className={styles.swiper__button}>
			<img src={Arrow} alt='Стрелка право' />
		</button>
	</div>
);
