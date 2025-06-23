import type { CheckboxCategoryUIProps } from './type';
import styles from './CheckboxCategory.module.scss';

export const CheckboxCategoryUI = ({
	isChecked,
	onClick,
}: CheckboxCategoryUIProps) => (
	<button type='button' className={styles.button} onClick={onClick}>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M14.7907 22H9.2093C4.15814 22 2 19.8419 2 14.7907V9.2093C2 4.15814 4.15814 2 9.2093 2H14.7907C19.8419 2 22 4.15814 22 9.2093V14.7907C22 19.8419 19.8419 22 14.7907 22ZM9.2093 3.39535C4.92093 3.39535 3.39535 4.92093 3.39535 9.2093V14.7907C3.39535 19.0791 4.92093 20.6047 9.2093 20.6047H14.7907C19.0791 20.6047 20.6047 19.0791 20.6047 14.7907V9.2093C20.6047 4.92093 19.0791 3.39535 14.7907 3.39535H9.2093Z'
					fill='#253017'
				/>

        <path
					d='M14.791 2C19.8418 2.00009 21.9999 4.15815 22 9.20898V14.791C21.9999 19.8418 19.8418 21.9999 14.791 22H9.20898C4.15815 21.9999 2.00009 19.8418 2 14.791V9.20898C2.00009 4.15816 4.15816 2.00009 9.20898 2H14.791ZM8 11.25C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25H8Z'
					fill='#ABD27A'
				/>
			</svg>
	</button>
);
