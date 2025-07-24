import clsx from 'clsx';
import notificationIcon from '@images/icons/notification.svg';
import type { TNotificationButtonProps } from './NotificationButtonType';
import styles from './NotificationButton.module.scss';

export const NotificationButton = ({
	onClick,
	hasNotification = false,
}: TNotificationButtonProps) => (
	<button
		type='button'
		className={clsx(styles.notificationButton)}
		onClick={onClick}
		disabled={false}>
		<img
			src={notificationIcon}
			className={clsx(styles.notificationImage)}
			alt='Уведомления'
		/>
		{hasNotification && (
			<span className={clsx(styles.notificationButtonFill)} />
		)}
	</button>
);
