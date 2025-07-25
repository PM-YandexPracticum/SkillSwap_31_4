import { forwardRef, useState, useEffect, useRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import { VisibilityButton } from '../VisibilityButton';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	variant?: 'default' | 'password' | 'editable';
	multiline?: boolean;
	rows?: number;
}

type CombinedRefType = HTMLInputElement | HTMLTextAreaElement;

export const Input = forwardRef<CombinedRefType, InputProps>(
	(
		{
			label = '',
			error = '',
			className = '',
			id,
			type = 'text',
			variant = 'default',
			value: propValue,
			multiline = false,
			rows = 3,
			...props
		},
		ref
	) => {
		const innerRef = useRef<CombinedRefType>(null);
		const combinedRef = (node: CombinedRefType | null) => {
			const externalRef = ref;

			if (typeof externalRef === 'function') {
				externalRef(node);
			} else if (externalRef && 'current' in externalRef) {
				(
					externalRef as React.MutableRefObject<CombinedRefType | null>
				).current = node;
			}

			innerRef.current = node;
		};

		const [showPassword, setShowPassword] = useState(false);
		const [isEditing, setIsEditing] = useState(false);
		const [localValue, setLocalValue] = useState(propValue || '');

		useEffect(() => {
			setLocalValue(propValue || '');
		}, [propValue]);

		useEffect(() => {
			if (variant === 'editable' && isEditing) {
				innerRef.current?.focus();
			}
		}, [isEditing, variant]);

		const inputType = type === 'password' && showPassword ? 'text' : type;

		const handleEditClick = () => {
			setIsEditing(true);
		};

		const handleChange = (
			e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
		) => {
			setLocalValue(e.target.value);
			props.onChange?.(e as React.ChangeEvent<HTMLInputElement>);
		};

		const handleBlur = () => {
			setIsEditing(false);
		};

		const displayValue = variant === 'editable' ? localValue : propValue;

		return (
			<div className={`${styles.container} ${className}`}>
				{label && (
					<label htmlFor={id} className={styles.label}>
						{label}
					</label>
				)}
				<div className={styles.inputContainer}>
					{multiline ? (
						<textarea
							ref={combinedRef as React.Ref<HTMLTextAreaElement>}
							id={id}
							value={displayValue}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`${styles.input} ${styles.textarea} ${
								variant === 'editable' ? styles.editableTextarea : ''
							} ${error ? styles.error : ''}`}
							readOnly={variant === 'editable' && !isEditing}
							placeholder={props.placeholder}
							name={props.name}
							disabled={props.disabled}
							rows={rows}
						/>
					) : (
						<input
							ref={combinedRef as React.Ref<HTMLInputElement>}
							id={id}
							type={inputType}
							value={displayValue}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`${styles.input} ${error ? styles.error : ''}`}
							readOnly={variant === 'editable' && !isEditing}
							placeholder={props.placeholder}
							name={props.name}
							disabled={props.disabled}
							autoComplete={props.autoComplete}
							{...props}
						/>
					)}

					{variant === 'password' && (
						<div className={styles.iconWrapper}>
							<VisibilityButton
								isHidden={showPassword}
								onClick={() => setShowPassword(!showPassword)}
							/>
						</div>
					)}

					{variant === 'editable' && !isEditing && (
						<div className={styles.iconWrapper}>
							<button
								type='button'
								onClick={handleEditClick}
								className={styles.editButton}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M6.08593 18.9705C5.5138 18.9705 4.97919 18.7735 4.59464 18.4078C4.10692 17.9482 3.87244 17.2541 3.95686 16.5038L4.30389 13.4649C4.36954 12.8928 4.71657 12.1331 5.11988 11.7204L12.8202 3.56987C14.7429 1.53458 16.7501 1.47831 18.7854 3.40105C20.8206 5.32378 20.8769 7.33093 18.9542 9.36621L11.2539 17.5167C10.8599 17.9388 10.1284 18.3327 9.55623 18.4265L6.53613 18.9424C6.37669 18.9518 6.236 18.9705 6.08593 18.9705ZM15.8309 3.39167C15.1087 3.39167 14.4803 3.84187 13.8425 4.51717L6.14221 12.6771C5.95462 12.874 5.7389 13.343 5.70139 13.615L5.35436 16.6538C5.31684 16.9634 5.39187 17.2166 5.5607 17.376C5.72952 17.5355 5.98276 17.5918 6.29227 17.5449L9.31238 17.029C9.58437 16.9821 10.0346 16.7383 10.2222 16.5413L17.9225 8.39078C19.0855 7.15272 19.5076 6.00846 17.8099 4.414C17.0596 3.6918 16.4124 3.39167 15.8309 3.39167Z'
										fill='currentColor'
									/>
									<path
										d='M17.1531 10.9325C17.1343 10.9325 17.1062 10.9325 17.0874 10.9325C14.1611 10.6418 11.8069 8.41889 11.3567 5.51134C11.3004 5.1268 11.5631 4.77039 11.9476 4.70473C12.3321 4.64846 12.6886 4.91108 12.7542 5.29562C13.1106 7.56539 14.9489 9.30992 17.2375 9.53502C17.622 9.57254 17.9034 9.91956 17.8659 10.3041C17.819 10.6605 17.5095 10.9325 17.1531 10.9325Z'
										fill='currentColor'
									/>
									<path
										d='M20.586 22H3.70344C3.31889 22 3 21.6811 3 21.2966C3 20.912 3.31889 20.5931 3.70344 20.5931H20.586C20.9705 20.5931 21.2894 20.912 21.2894 21.2966C21.2894 21.6811 20.9705 22 20.586 22Z'
										fill='currentColor'
									/>
								</svg>
							</button>
						</div>
					)}
				</div>
				{error && <span className={styles.errorMessage}>{error}</span>}
			</div>
		);
	}
);

Input.displayName = 'Input';
