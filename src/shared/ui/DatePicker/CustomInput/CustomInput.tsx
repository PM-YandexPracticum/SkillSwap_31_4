import { forwardRef, type ChangeEvent } from 'react';
import clsx from 'clsx';
import { CalendarIcon } from './CalendarIcon';
import styles from './CustomInput.module.scss';

export const CustomInput = forwardRef(
	(
		props: {
			onClickOpen: () => void;
			onChange: (event: ChangeEvent) => void;
			value: string;
			error?: string;
		},
		ref: React.ForwardedRef<HTMLInputElement>
	) => (
		<label
			className={clsx(
				styles.inputContainer,
				props.error && styles.errorInputContainer
			)}>
			<input
				ref={ref}
				value={props.value}
				placeholder='дд.мм.гггг'
				maxLength={10}
				minLength={10}
				className={styles.input}
				onChange={props.onChange}
				readOnly={false}
				required
			/>
			<CalendarIcon onClick={props.onClickOpen} />
		</label>
	)
);
