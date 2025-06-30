import { useEffect } from 'react';
import type { ModalUIProps } from './type';
import styles from './Modal.module.scss';

export const ModalUI = ({ onClose, children }: ModalUIProps) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = '';
		};
	}, []);

	return (
		<>
			<div className={styles.modal}>
				<div className={styles.content}>{children}</div>
			</div>
			<div className={styles.overlay} onClick={onClose} />
		</>
	);
};
