import notFound404 from '@images/error-404.png';
import { ButtonUI } from '@ui';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound404.module.scss';

export const NotFound404 = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<img className={styles.img} src={notFound404} alt='Изоброжения ошибки' />
			<div className={styles.containerText}>
				<h2 className={styles.title}>Страница не найдена</h2>
				<p className={styles.text}>
					К сожалению, эта страница недоступна. Вернитесь на главную страницу
					или попробуйте позже
				</p>
			</div>
			<div className={styles.containerButton}>
				<ButtonUI
					onClick={() => {
						alert('Страница не найдена');
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
