import clsx from 'clsx';
import { CheckboxFilterCategoryUI } from '../CheckboxFilterCategory';
import style from './CityFilter.module.scss';
import ArrowDownIcon from '@images/icons/chevron-down.svg';

type TCityItem = {
	id: string;
	city: string;
};

type TCityFilterProps = {
	items: TCityItem[];
	checkedItems: Record<string, boolean>;
	onChange: (id: string) => void;
	isAllOpen: boolean;
  	onOpenAll: () => void;
};
export const CityFilter = ({
	items,
	checkedItems,
	onChange,
	isAllOpen,
  	onOpenAll,
}: TCityFilterProps) => {
	
	return (
		<div style={{ width: '500px' }}>
			{(isAllOpen ? items : items.slice(0, 5)).map((item) => (
				<CheckboxFilterCategoryUI
					key={item.id}
					id={item.id}
					text={item.city}
					isChecked={!!checkedItems[item.id]}
					onChange={() => onChange(item.id)}
				/>
			))}
			<button
				className={style.button}
				type='button'
				onClick={onOpenAll}>
				 {isAllOpen ? 'Свернуть' : 'Все города'}
				<img
						src={ArrowDownIcon}
						className={clsx(style.arrow, {
							[style.arrowOpen]: isAllOpen,
						})}
						alt='Стрелка вниз'
					/>
			</button>
		</div>
	);
};
