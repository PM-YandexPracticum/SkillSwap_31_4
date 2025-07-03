import error500 from '@images/error-500.png';
import { ButtonUI } from '@ui';
import { useNavigate } from 'react-router-dom';
import styles from './Error500.module.scss';

export const Error500 = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<img className={styles.img} src={error500} alt='Изоброжения ошибки' />
			<div className={styles.containerText}>
				<h2 className={styles.title}>На сервере произошла ошибка</h2>
				<p className={styles.text}>
					Попробуйте позже или вернитесь на главную страницу
				</p>
			</div>
			<div className={styles.containerButton}>
				<ButtonUI
					onClick={() => {
						alert('На сервере произошла ошибка');
					}}
					width='218'
					color='secondary'>
					Сообщить об ошибке
				</ButtonUI>
				<ButtonUI
					onClick={() => {
						navigate('/');
					}}
					width='218'
					color='primary'>
					На главную
				</ButtonUI>
			</div>
		</div>
	);
};
