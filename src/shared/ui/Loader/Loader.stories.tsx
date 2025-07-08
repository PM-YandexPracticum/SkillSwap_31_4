import type { Meta } from '@storybook/react-vite';

import { Loader } from '@ui';

const meta = {
	title: 'Shared/UI/Loader',
	component: Loader,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Loader>;

export default meta;

export const Default = {
	render: () => {
		return (
			<div>
				<Loader />
			</div>
		);
	},
};
