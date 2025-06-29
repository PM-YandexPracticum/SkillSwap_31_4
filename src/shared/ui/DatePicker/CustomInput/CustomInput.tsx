import { forwardRef, type ChangeEvent } from 'react';
import clsx from 'clsx';
import Cleave from 'cleave.js/react';
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
			<Cleave
				options={{
					date: true,
					datePattern: ['d', 'm', 'Y'],
					delimiter: '.',
					delimiterLazyShow: true,
				}}
				placeholder='дд.мм.гггг'
				onChange={props.onChange}
				value={props.value}
				className={styles.input}
				htmlRef={
					ref as ((instance: HTMLInputElement | null) => void) | undefined
				}
				readOnly={false}
				required
			/>
			<CalendarIcon onClick={props.onClickOpen} />
		</label>
	)
);
