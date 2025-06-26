import { Logo } from '../Logo';
import styles from './Footer.module.scss';

export const Footer = () => (
	<footer className={styles.footer}>
		<Logo />
		<ul className={styles.footerLinkContainer}>
			<li>
				<a
					href='#1'
					style={{
						textDecoration: 'none',
						color: 'var(--color-text-primary)',
					}}>
					О проекте
				</a>
			</li>
			<li>
				<a
					href='#2'
					style={{
						textDecoration: 'none',
						color: 'var(--color-text-primary)',
					}}>
					Контакты
				</a>
			</li>
			<li>
				<a
					href='#3'
					style={{
						textDecoration: 'none',
						color: 'var(--color-text-primary)',
					}}>
					Политика конфиденциальности
				</a>
			</li>
			<li>
				<a
					href='#4'
					style={{
						textDecoration: 'none',
						color: 'var(--color-text-primary)',
					}}>
					Все навыки
				</a>
			</li>
			<li>
				<a
					href='#5'
					style={{
						textDecoration: 'none',
						color: 'var(--color-text-primary)',
					}}>
					Блог
				</a>
			</li>
			<li>
				<a
					href='#6'
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
