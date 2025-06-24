import styles from './Radio.module.scss';
import type { TRadioUIProps } from './type';

export const Radio = ({ options, value, onChange, name }: TRadioUIProps) => (
	<div className={styles.radioGroup}>
		{options.map((option) => {
			const inputId = `radio-${name}-${option.value}`;
			return (
				<div key={option.value} className={styles.radioWrapper}>
					<input
						id={inputId}
						type='radio'
						name={name}
						value={option.value}
						checked={option.value === value}
						className={styles.input}
						onChange={() => onChange?.(option.value)}
					/>
					<label htmlFor={inputId} className={styles.label}>
						<span className={styles.customCircle} />
						{option.label}
					</label>
				</div>
			);
		})}
	</div>
);
