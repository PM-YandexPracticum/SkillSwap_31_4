import { Logo } from '../Logo';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo />
			<div className={styles.footerLinkContainer}>
				<a
					href='#'
					style={{
						textDecoration: 'none',
						color: 'var(--color-text-primary)',
					}}>
					О проекте
				</a>
				<a
					href='#'
					style={{
						textDecoration: 'none',
						color: 'var(--color-text-primary)',
					}}>
					Контакты
				</a>
				<a
					href='#'
					style={{
						textDecoration: 'none',
						color: 'var(--color-text-primary)',
					}}>
					Политика конфиденциальности
				</a>
				<a
					href='#'
					style={{
						textDecoration: 'none',
						color: 'var(--color-text-primary)',
					}}>
					Все навыки
				</a>
				<a
					href='#'
					style={{
						textDecoration: 'none',
						color: 'var(--color-text-primary)',
					}}>
					Блог
				</a>
				<a
					href='#'
					style={{
						textDecoration: 'none',
						color: 'var(--color-text-primary)',
					}}>
					Пользовательское соглашение
				</a>
			</div>
			<p className={styles.copyright}>SkillSwap - 2025</p>
		</footer>
	);
};
