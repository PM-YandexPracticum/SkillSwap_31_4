import { ButtonUI } from '../Button';
import type { TNotificationProps } from './type';
import style from './notification.module.scss';
import lightIcon from '../../../images/icons/idea.svg';
import { formatDateLabel } from '../../lib/dateNotification/formatDateLabel';

export const NotificationUI = ({
	titleText,
	text,
	date,
}: TNotificationProps) => (
	<div className={style.container}>
		<div className={style.notification}>
			<img
				src={lightIcon}
				alt='Иконка лампочки(уведомлений)'
				className={style.icon}
			/>
			<div className={style.textBlock}>
				<div className={style.headerLine}>
					<h4 className={style.titleText}>{titleText}</h4>
					<span className={style.date}>{formatDateLabel(date)}</span>
				</div>
				<p className={style.text}>{text}</p>
			</div>
		</div>
		<ButtonUI color='primary' width='114px'>
			Перейти
		</ButtonUI>
	</div>
);
