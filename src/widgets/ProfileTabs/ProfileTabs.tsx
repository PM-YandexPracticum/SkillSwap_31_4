/* eslint-disable react/jsx-curly-brace-presence */
import { MenuItemUI } from '@ui';
import styles from './ProfileTabs.module.scss';

export const ProfileTabs = () => (
	<div className={styles.sidebar}>
		<MenuItemUI
			to={'/requests'}
			text='Заявки'
			logoUrl='./src/images/icons/request.svg'
		/>
		<MenuItemUI
			to={'/orders'}
			text='Мои обмены'
			logoUrl='./src/images/icons/message-text.svg'
		/>
		<MenuItemUI
			to={'/favorites'}
			text='Избранное'
			logoUrl='./src/images/icons/like-empty.svg'
		/>
		<MenuItemUI
			to={'/skills'}
			text='Мои навыки'
			logoUrl='./src/images/icons/idea.svg'
		/>
		<MenuItemUI
			to={'/profile'}
			text='Личные данные'
			logoUrl='./src/images/icons/user.svg'
		/>
	</div>
);
