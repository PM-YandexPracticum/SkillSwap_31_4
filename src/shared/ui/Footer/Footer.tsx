import { Logo } from '../Logo';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo />
			<ul className={styles.footerLinkContainer}>
				<li>
					<a
						href='#'
						style={{
							textDecoration: 'none',
							color: 'var(--color-text-primary)',
						}}>
						О проекте
					</a>
				</li>
				<li>
					<a
						href='#'
						style={{
							textDecoration: 'none',
							color: 'var(--color-text-primary)',
						}}>
						Контакты
					</a>
				</li>
				<li>
					<a
						href='#'
						style={{
							textDecoration: 'none',
							color: 'var(--color-text-primary)',
						}}>
						Политика конфиденциальности
					</a>
				</li>
				<li>
					<a
						href='#'
						style={{
							textDecoration: 'none',
							color: 'var(--color-text-primary)',
						}}>
						Все навыки
					</a>
				</li>
				<li>
					<a
						href='#'
						style={{
							textDecoration: 'none',
							color: 'var(--color-text-primary)',
						}}>
						Блог
					</a>
				</li>
				<li>
					<a
						href='#'
						style={{
							textDecoration: 'none',
							color: 'var(--color-text-primary)',
						}}>
						Пользовательское соглашение
					</a>
				</li>
			</ul>
			<p className={styles.copyright}>SkillSwap - 2025</p>
		</footer>
	);
};
