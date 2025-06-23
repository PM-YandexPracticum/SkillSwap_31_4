import styles from './ToggleSwitch.module.scss';

export const ToggleSwitch = () => (
	<label htmlFor='switch' className={styles.switch}>
		<input
			className={styles.checkbox}
			type='checkbox'
			id='switch'
			aria-label='Enable'
		/>
		<span className={styles.switch__slider} />
	</label>
);
