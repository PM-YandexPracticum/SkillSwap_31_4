import { ButtonUI } from '../Button';
import styles from './ModalWithContent.module.scss';

type ModalWithContentUIProps = {
	title: string;
	subtitle: string;
	onClose: () => void;
	svg?: string;
};

export const ModalWithContentUI = ({
	title,
	subtitle,
	onClose,
	svg,
}: ModalWithContentUIProps) => (
	<div className={styles.modal}>
		<div className={styles.icon}>
			<svg width={75} height={75} viewBox='0 0 78 78'>
				<use href={svg} />
			</svg>
		</div>

		<h2 className={styles.title}>{title}</h2>
		<p className={styles.subtitle}>{subtitle}</p>
		<ButtonUI color='primary' text='Готово' width='436px' onClick={onClose} />
	</div>
);
