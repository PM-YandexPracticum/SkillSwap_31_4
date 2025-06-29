import clsx from 'clsx';
import CrossIcon from '@images/icons/cross.svg';
import IdeaIcon from '@images/icons/idea.svg';
import type { TToastNotificationUIProps } from './type';
import styles from './ToastNotification.module.scss';

export const ToastNotificationUI = ({
	message,
	isAbsolute,
	isShow,
	isHide,
	onClick,
	onClose,
}: TToastNotificationUIProps) => {
	const notificationElement = !isHide ? (
		<div
			className={clsx(
				styles.notification,
				{ [styles.hiddenElement]: !isShow },
				{ [styles.showElement]: isShow },
				{ [styles.showAbsolute]: isAbsolute }
			)}>
			<button type='button' className={styles.buttonClose} onClick={onClose}>
				<img src={CrossIcon} className={clsx(styles.cross)} alt='Закрыть' />
			</button>

			<button type='button' className={styles.buttonNavigate} onClick={onClick}>
				<img
					src={IdeaIcon}
					className={clsx(styles.idea)}
					alt='Лампочка сообщения'
				/>
				<h3 className={clsx(styles.message)}>{message}</h3>
			</button>
		</div>
	) : null;

	return notificationElement;
};
