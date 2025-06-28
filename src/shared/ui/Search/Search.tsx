import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Search.module.scss';

interface SearchProps {
	placeholder?: string;
	value: string;
	onChange: (value: string) => void;
	onSelect?: (value: string) => void;
	options?: string[];
	className?: string;
}

const SearchIcon = () => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		className={styles.search__icon}>
		<path
			d='M11.5349 21.0698C6.27908 21.0698 2 16.7907 2 11.5349C2 6.27908 6.27908 2 11.5349 2C16.7907 2 21.0698 6.27908 21.0698 11.5349C21.0698 16.7907 16.7907 21.0698 11.5349 21.0698ZM11.5349 3.39535C7.04187 3.39535 3.39535 7.05118 3.39535 11.5349C3.39535 16.0186 7.04187 19.6745 11.5349 19.6745C16.0279 19.6745 19.6745 16.0186 19.6745 11.5349C19.6745 7.05118 16.0279 3.39535 11.5349 3.39535Z'
			fill='currentColor'
		/>
		<path
			d='M21.3024 21.9996C21.1257 21.9996 20.9489 21.9345 20.8094 21.7949L18.9489 19.9345C18.6791 19.6647 18.6791 19.2182 18.9489 18.9484C19.2187 18.6787 19.6652 18.6787 19.935 18.9484L21.7954 20.8089C22.0652 21.0787 22.0652 21.5252 21.7954 21.7949C21.6559 21.9345 21.4791 21.9996 21.3024 21.9996Z'
			fill='currentColor'
		/>
	</svg>
);

const ClearIcon = ({ onClick }: { onClick: () => void }) => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		onClick={onClick}
		className={styles.search__icon}
		style={{ cursor: 'pointer' }}>
		<path
			d='M16.7438 8.28754L8.25847 16.7728C7.96856 17.0627 7.48772 17.0627 7.19781 16.7728C6.9079 16.4829 6.9079 16.0021 7.19781 15.7122L15.6831 7.22688C15.973 6.93697 16.4538 6.93697 16.7438 7.22688C17.0337 7.51679 17.0337 7.99763 16.7438 8.28754Z'
			fill='#253017'
		/>
		<path
			d='M16.7438 16.7728C16.4538 17.0627 15.973 17.0627 15.6831 16.7728L7.19781 8.28755C6.9079 7.99763 6.9079 7.5168 7.19781 7.22689C7.48772 6.93697 7.96856 6.93697 8.25847 7.22689L16.7438 15.7122C17.0337 16.0021 17.0337 16.4829 16.7438 16.7728Z'
			fill='#253017'
		/>
	</svg>
);

export const Search: React.FC<SearchProps> = ({
	placeholder = 'Искать навык',
	value,
	onChange,
	onSelect,
	options = [],
	className = '',
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const filteredOptions = options.filter((option) =>
		option.toLowerCase().startsWith(value.toLowerCase())
	);

	const handleSelect = (option: string) => {
		onChange(option);
		onSelect?.(option);
		setIsOpen(false);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
		setIsOpen(true);
	};

	return (
		<div className={clsx(styles.searchWrapper, className)}>
			<div
				className={clsx(
					styles.search,
					isOpen && value && options.length > 0 && styles.search_open
				)}
			>
				<SearchIcon />
				<input
					type='text'
					placeholder={placeholder}
					value={value}
					onChange={handleInputChange}
					onFocus={() => setIsOpen(true)}
					className={styles.search__input}
				/>
				{value && <ClearIcon onClick={() => onChange('')} />}
			</div>

			{isOpen && value && options.length > 0 && (
				<ul className={styles.dropdown}>
					{filteredOptions.length > 0 ? (
						filteredOptions.slice(0, 10).map((option) => (
							<li key={option}>
								<button
									type='button'
									className={styles.dropdownItem}
									onClick={() => handleSelect(option)}
								>
									{option}
								</button>
							</li>
						))
					) : (
						<li className={styles.dropdownEmpty}>Не найдено</li>
					)}
				</ul>
			)}
		</div>
	);
};
