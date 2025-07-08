import clsx from 'clsx';
import ArrowDownIcon from '@images/icons/chevron-down.svg';
import { CheckboxFilterCategoryUI } from '../CheckboxFilterCategory';
import style from './CityFilter.module.scss';

type TCityItem = {
	id: string;
	name: string;
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
}: TCityFilterProps) => (
	<div style={{ width: '500px' }}>
		{(isAllOpen ? items : items.slice(0, 5)).map((item) => (
			<CheckboxFilterCategoryUI
				key={item.id}
				id={item.id}
				text={item.name}
				isChecked={!!checkedItems[item.id]}
				onChange={() => onChange(item.id)}
			/>
		))}
		<button className={style.button} type='button' onClick={onOpenAll}>
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
