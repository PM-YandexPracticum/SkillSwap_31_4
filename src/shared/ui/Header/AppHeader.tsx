import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './AppHeader.module.scss';
import cross from '../../../images/icons/cross.svg';
import logout from '../../../images/icons/logout.svg';
import type { TAppHeaderUIProps } from './type';
import { ButtonUI } from '../Button';
import { Logo } from '../Logo';
import { Search } from '../Search';
import { ThemeToggleButton } from '../ThemeToggleButton';
import { NotificationButton } from '../Notification';
import { LikeButtonUI } from '../LikeButton';
import { DropdownSkillsUI } from '../Dropdown/DropdownSkills';

export const AppHeaderUI = ({
	isModal,
	isAuth,
	isNotification,
	categories,
	user,
	handleRegisterButtonClick,
	handleLoginButtonClick,
	handleCloseButtonClick,
	handleSkillTagClick,
	handleSkillTitleClick,
	searchValue,
	setSearchValue,
	searchOptions,
}: TAppHeaderUIProps) => {
	const [isOpen, setIsOpen] = useState(false);
	if (isModal)
		return (
			<div className={styles.header}>
				<Logo />
				<ButtonUI
					color='tertiary'
					onClick={handleCloseButtonClick}
					htmlType='button'
					width='147px'>
					<span>Закрыть</span>
					<img src={cross} alt='Иконка крестика' />
				</ButtonUI>
			</div>
		);
	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.menu}>
				<a href='#1' className={styles.link}>
					О проекте
				</a>
				<DropdownSkillsUI
					skillsData={categories}
					onTagClick={handleSkillTagClick}
					onTitleClick={handleSkillTitleClick}
				/>
			</div>
			<Search
				value={searchValue}
				onChange={setSearchValue}
				options={searchOptions}
			/>
			<div className={styles.toolbar}>
				<ThemeToggleButton theme='light' />
				{isAuth && (
					<>
						<NotificationButton hasNotification={isNotification} />
						<Link to='profile/favorites'>
							<LikeButtonUI />
						</Link>
					</>
				)}
			</div>

			{isAuth ? (
				<div className={styles.profile}>
					<p className={styles.name}>{user.name}</p>
					<div
						className={styles.profileButton}
						onClick={() => {
							setIsOpen((prevState) => !prevState);
						}}>
						<img
							className={styles.avatar}
							src={user.photo}
							alt='Фото пользователя'
						/>
					</div>
					{isOpen && (
						<div className={styles.dropdown}>
							<Link className={styles.dropdownButton} to='/profile'>
								Личный кабинет
							</Link>
							<Link className={styles.dropdownButton} to='/'>
								Выйти из аккаунта
								<img src={logout} alt='Иконка выхода' />
							</Link>
						</div>
					)}
				</div>
			) : (
				<div>
					<div className={styles.authButtons_container}>
						<ButtonUI
							color='secondary'
							onClick={handleLoginButtonClick}
							htmlType='button'
							width='92px'>
							Войти
						</ButtonUI>
						<ButtonUI
							color='primary'
							onClick={handleRegisterButtonClick}
							htmlType='button'
							width='208px'>
							Зарегистрироваться
						</ButtonUI>
					</div>
				</div>
			)}
		</div>
	);
};
