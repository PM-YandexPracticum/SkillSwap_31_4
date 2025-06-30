import { ButtonUI } from '../Button';
import styles from './ModalWithContent.module.scss';

type ModalWithContentUIProps = {
	title: string;
	subtitle: string;
	onClose: () => void;
	svg: string;
};

export const ModalWithContentUI = ({
	title,
	subtitle,
	onClose,
	svg,
}: ModalWithContentUIProps) => (
	<div className={styles.modal}>
		<div className={styles.icon}>
			<div
				style={{
					width: '100%',
					height: '100%',
					backgroundSize: 'cover',
					backgroundImage: `url("${svg}")`,
				}}
			/>
		</div>

		<h2 className={styles.title}>{title}</h2>
		<p className={styles.subtitle}>{subtitle}</p>
		<ButtonUI color='primary' text='Готово' width='436px' onClick={onClose} />
	</div>
);
