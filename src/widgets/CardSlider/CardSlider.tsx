/* eslint-disable no-underscore-dangle */
import { SwiperArrows } from '@ui';
import styles from './CardSlider.module.scss';
import type { TUser } from '../../api/type';
import type { SwiperArrowsProps } from '../../shared/ui/SwiperArrows/type';
import { CardPresenter } from '../../features/CardPresenter/CardPresenter';

type CardSliderUIProps = {
	users: TUser[];
	swipeProps: SwiperArrowsProps;
};

export const CardSliderUI = ({ users, swipeProps }: CardSliderUIProps) => (
	<div className={styles.container}>
		<SwiperArrows {...swipeProps} />
		<div className={styles['card-slider']}>
			{users.map((user) => (
				<CardPresenter key={user._id} user={user} withDescription={false} />
			))}
		</div>
	</div>
);
