import type { Meta } from '@storybook/react-vite';
import { CheckboxCategoryUI } from './CheckboxCategory';
import { useState } from 'react';

const meta = {
	title: 'Shared/UI/CheckboxCategory',
	component: CheckboxCategoryUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CheckboxCategoryUI>;

export default meta;

export const CheckboxCategoryDefault = {
	render: () => {
		const [isChecked, setIsChecked] = useState(false);

		return (
			<div>
				<CheckboxCategoryUI
					isChecked={isChecked}
					onClick={() => setIsChecked(!isChecked)}
				/>
			</div>
		);
	},
};
