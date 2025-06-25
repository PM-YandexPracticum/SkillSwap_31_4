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

export const CheckboxFilterCategoryMain = {
	render: () => {
		const [isChecked, setIsChecked] = useState(false);

		return (
			<div>
				<CheckboxFilterCategoryUI
					categoryType='main'
					text='Иностранные языки'
					isChecked={isChecked}
					onChange={() => setIsChecked(!isChecked)}
				/>
			</div>
		);
	},
};

export const CheckboxFilterCategorySub = {
	render: () => {
		const [isChecked, setIsChecked] = useState(false);

		return (
			<div>
				<CheckboxFilterCategoryUI
					categoryType='sub'
					text='Английский'
					isChecked={isChecked}
					onChange={() => setIsChecked(!isChecked)}
				/>
			</div>
		);
	},
};
