import type { Meta } from '@storybook/react-vite';
import { CheckboxFilterCategoryUI } from './CheckboxFilterCategory';
import { useState } from 'react';

const meta = {
	title: 'Shared/UI/CheckboxFilterCategory',
	component: CheckboxFilterCategoryUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CheckboxFilterCategoryUI>;

export default meta;

export const CheckboxFilterCategory = {
	render: () => {
		const items = [
			{ id: '1', text: 'Английский' },
			{ id: '2', text: 'Испанский' },
			{ id: '3', text: 'Японский' },
		];

		const [isChecked, setIsChecked] = useState<{ [key: string]: boolean }>(
			() => {
				return items.reduce<{ [key: string]: boolean }>((acc, item) => {
					acc[item.id] = false;
					return acc;
				}, {});
			}
		);

		const handleChange = (id: string) => {
			setIsChecked((prev) => ({
				...prev,
				[id]: !prev[id],
			}));
		};

		return (
			<div style={{ width: '500px' }}>
				{items.map((item) => (
					<CheckboxFilterCategoryUI
						key={item.id}
						id={item.id}
						text={item.text}
						isChecked={isChecked[item.id]}
						onChange={() => handleChange(item.id)}
					/>
				))}
			</div>
		);
	},
};
