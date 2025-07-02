import { useState } from 'react';
import { CheckboxFilterCategoryUI } from '../CheckboxFilterCategory';
import style from './CityFilter.module.scss';

type TCityItem = {
	id: string;
	city: string;
};

type TCityFilterProps = {
	items: TCityItem[];
	checkedItems: Record<string, boolean>;
	onChange: (id: string) => void;
};
export const CityFilter = ({
	items,
	checkedItems,
	onChange,
}: TCityFilterProps) => {
	const [fullFilter, setFullFilter] = useState(false);
	return (
		<div style={{ width: '500px' }}>
			{items.slice(0, fullFilter ? items.length : 5).map((item) => (
				<CheckboxFilterCategoryUI
					key={item.id}
					id={item.id}
					text={item.city}
					isChecked={checkedItems[item.id]}
					onChange={() => onChange(item.id)}
				/>
			))}
			<button
				className={style.button}
				type='button'
				onClick={() => setFullFilter(!fullFilter)}>
				{fullFilter ? 'Свернуть' : 'Все города'}
				{fullFilter ? (
					<img
						src='src/images/icons/chevron-up.svg'
						alt='Стрелка вверх'
						width={24}
						height={24}
					/>
				) : (
					<img
						src='src/images/icons/chevron-down.svg'
						alt='Стрелка вниз'
						width={24}
						height={24}
					/>
				)}
			</button>
		</div>
	);
};
