import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { ru } from 'date-fns/locale';
import type DataPickerProps from './type';
import styles from './DatePicker.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker-styles.scss';
import { ButtonUI } from '../Button';
import { CustomInput } from './CustomInput/CustomInput';

export const DatePickerUI: React.FC<DataPickerProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const { onInput, title, error, maxDate, minDate } = props;
	const [datePicker, setDatePicker] = useState(new Date());
	const [savedDate, setSavedDate] = useState(new Date());

	const saveInputValue = (value: string) => {
		const dateArray = value.split('.');
		const day = parseInt(dateArray[0]);
		const month = parseInt(dateArray[1]) - 1;
		const year = parseInt(dateArray[2]);

		if (isNaN(day) || isNaN(month) || isNaN(year)) {
			setSavedDate(new Date());
			return;
		}

		if (day > 31 || month > 12) {
			setSavedDate(new Date());
			return;
		}

		const dateObj = new Date(year, month, day);

		if (dateObj.toLocaleString().slice(0, 10) !== value) {
			setSavedDate(new Date());
		}
		if (maxDate) {
			if (dateObj.getTime() > maxDate.getTime()) {
				setSavedDate(new Date());
				return;
			}
		}
		if (minDate) {
			if (dateObj.getTime() > minDate.getTime()) {
				setSavedDate(new Date());
				return;
			}
		}
		setSavedDate(dateObj);
		onInput(dateObj);
	};

	const onClickIcon = () => {
		setIsOpen(!isOpen);
	};

	const onClickButtonChoose = () => {
		setSavedDate(datePicker);
		onInput(datePicker);
		setIsOpen(!isOpen);
	};

	const onCancel = () => {
		setIsOpen(!isOpen);
	};

	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<div className={styles.inputContainer}>
			{title}
			<DatePicker
				dateFormat='dd.MM.yyyy'
				open={isOpen}
				customInput={
					<CustomInput
						onClickOpen={onClickIcon}
						onChange={() => {}}
						value=''
						error={error}
						ref={inputRef}
					/>
				}
				locale={ru}
				popperClassName={styles.customPopper}
				popperPlacement='bottom-start'
				onChange={(date) => {
					if (date) {
						setDatePicker(date);
					}
				}}
				onChangeRaw={(event) => {
					if (event?.type === 'change') {
						const { value } = event.target as HTMLInputElement;
						if (value.length === 10) {
							saveInputValue(value);
						}
					}
				}}
				selected={savedDate}
				showMonthDropdown
				useShortMonthInDropdown
				showYearDropdown
				yearDropdownItemNumber={120}
				maxDate={maxDate}
				minDate={minDate}
				showPopperArrow={false}
				scrollableYearDropdown>
				<div className={styles.calendarButtonOptions}>
					<ButtonUI onClick={onCancel} text='Отменить' color='secondary' />
					<ButtonUI
						onClick={onClickButtonChoose}
						text='Выбрать'
						color='primary'
					/>
				</div>
			</DatePicker>
			<span className={styles.error}>{props.error}</span>
		</div>
	);
};
