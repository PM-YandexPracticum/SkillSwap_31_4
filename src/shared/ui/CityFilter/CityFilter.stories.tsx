import type { Meta } from '@storybook/react-vite';
import { CityFilter } from './CityFilter';
import { useState } from 'react';

const meta = {
	title: 'Shared/UI/CityFilter',
	component: CityFilter,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CityFilter>;

export default meta;

export const CityFilterDefault = {
	render: () => {
		const items = [
			{ id: '1', city: 'Москва' },
			{ id: '2', city: 'Санкт-Петербург' },
			{ id: '3', city: 'Новосибирск' },
			{ id: '4', city: 'Екатеринбург' },
			{ id: '5', city: 'Казань' },
			{ id: '6', city: 'Красноярск' },
			{ id: '7', city: 'Иркутск' },
			{ id: '8', city: 'Владивосток' },
		];

		const [checkedItems, setIsChecked] = useState<Record<string, boolean>>(
			items.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
		);

		const handleChange = (id: string) => {
			setIsChecked((prev) => ({
				...prev,
				[id]: !prev[id],
			}));
		};

		return (
			<div style={{ width: '500px' }}>
				<CityFilter
					items={items}
					checkedItems={checkedItems}
					onChange={handleChange}
				/>
			</div>
		);
	},
};
