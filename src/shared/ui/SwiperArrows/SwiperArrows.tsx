import Arrow from '@images/icons/chevron-right.svg';
import styles from './SwiperArrows.module.scss';

type SwiperArrowsProps = {
	onPrev: () => void;
	onNext: () => void;
	disabledPrev: boolean;
	disabledNext: boolean;
};

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
			<img src={Arrow} alt='Previous' />
		</button>
		<button
			type='button'
			onClick={onNext}
			disabled={disabledNext}
			className={styles.swiper__button}>
			<img src={Arrow} alt='Next' />
		</button>
	</div>
);
