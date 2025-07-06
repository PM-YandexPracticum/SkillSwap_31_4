import styles from './AppHeader.module.scss';
import cross from '../../../images/icons/cross.svg';
import type { TAppHeaderUIProps } from './type';
import { ButtonUI } from '../Button';
import { Logo } from '../Logo';
import { DropdownSkillsUI } from '../Dropdown';
import { Search } from '../Search';
import { ThemeToggleButton } from '../ThemeToggleButton';
import { NotificationButton } from '../Notification';
import { LikeButtonUI } from '../LikeButton';

export const AppHeaderUI = ({
	isModal,
	isAuth,
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
						<NotificationButton />
						<LikeButtonUI />
					</>
				)}
			</div>

			{isAuth ? (
				<div className={styles.profile}>
					<p>{user.name}</p>
					<img
						className={styles.avatar}
						src={user.photo}
						alt='Фото пользователя'
					/>
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
