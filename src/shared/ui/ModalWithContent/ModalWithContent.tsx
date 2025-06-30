import { ButtonUI } from '../Button';
import styles from './ModalWithContent.module.scss';

type ModalWithContentUIProps = {
	title: string;
	subtitle: string;
	onClose: () => void;
	icon: string;
};

export const ModalWithContentUI = ({
	title,
	subtitle,
	onClose,
	icon,
}: ModalWithContentUIProps) => (
	<div className={styles.modal}>
		<div className={styles.icon}>
			<img src={icon} alt='icon' />
		</div>
		<h2 className={styles.title}>{title}</h2>
		<p className={styles.subtitle}>{subtitle}</p>
		<ButtonUI color='primary' width='436px' onClick={onClose}>
			Готово
		</ButtonUI>
	</div>
);
