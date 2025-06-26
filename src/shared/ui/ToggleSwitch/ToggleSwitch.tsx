import styles from './ToggleSwitch.module.scss';
import type { ToggleSwitchProps } from './type';

export const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => (
	<label htmlFor='switch' className={styles.switch}>
		<input
			className={styles.checkbox}
			type='checkbox'
			id='switch'
			checked={checked}
			onChange={onChange}
			aria-label='Enable'
		/>
		<span className={styles.switch__slider} />
	</label>
);
