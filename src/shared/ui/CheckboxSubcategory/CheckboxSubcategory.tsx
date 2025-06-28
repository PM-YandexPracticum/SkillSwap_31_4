import type { CheckboxSubcategoryUIProps } from './type';
import styles from './CheckboxSubcategory.module.scss';

export const CheckboxSubcategoryUI = ({
	isChecked,
	onClick,
	id,
}: CheckboxSubcategoryUIProps) => (
	<label className={styles.label}>
		<input
			type='checkbox'
			checked={isChecked}
			onChange={onClick}
			className={styles.checkbox}
			id={id}
		/>
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={styles.icon}>
			<path
				d='M14.7907 22H9.2093C4.15814 22 2 19.8419 2 14.7907V9.2093C2 4.15814 4.15814 2 9.2093 2H14.7907C19.8419 2 22 4.15814 22 9.2093V14.7907C22 19.8419 19.8419 22 14.7907 22ZM9.2093 3.39535C4.92093 3.39535 3.39535 4.92093 3.39535 9.2093V14.7907C3.39535 19.0791 4.92093 20.6047 9.2093 20.6047H14.7907C19.0791 20.6047 20.6047 19.0791 20.6047 14.7907V9.2093C20.6047 4.92093 19.0791 3.39535 14.7907 3.39535H9.2093Z'
				fill={isChecked ? 'var(--color-accent)' : 'var(--color-text-primary)'}
			/>

			<path
				d='M14.791 2C19.8418 2.00009 21.9999 4.15815 22 9.20898V14.791C21.9999 19.8418 19.8418 21.9999 14.791 22H9.20898C4.15815 21.9999 2.00009 19.8418 2 14.791V9.20898C2.00009 4.15816 4.15816 2.00009 9.20898 2H14.791ZM16.7803 8.62988C16.4903 8.33988 16.0097 8.33988 15.7197 8.62988L10.5801 13.7695L8.28027 11.4697C7.99028 11.1797 7.50973 11.1797 7.21973 11.4697C6.92973 11.7597 6.92973 12.2403 7.21973 12.5303L10.0498 15.3604C10.1898 15.5003 10.3801 15.5801 10.5801 15.5801C10.78 15.58 10.9704 15.5003 11.1104 15.3604L16.7803 9.69043C17.0702 9.40047 17.0702 8.9199 16.7803 8.62988Z'
				fill={isChecked ? 'var(--color-accent)' : 'transparent'}
			/>
		</svg>
	</label>
);
