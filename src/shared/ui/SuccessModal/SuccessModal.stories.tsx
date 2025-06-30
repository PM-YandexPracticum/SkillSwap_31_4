import type { Meta } from '@storybook/react-vite';
import { SuccessModalUI } from './SuccessModal';

const meta = {
	title: 'Shared/UI/SuccessModalUI',
	component: SuccessModalUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SuccessModalUI>;

export default meta;

export const SuccessModalDefault = {
	render: () => (
		<div
			style={{
				width: '800px',
				height: '800px',
				backgroundColor: '#8E8E8E99',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<SuccessModalUI onClose={() => console.log('Click')} />
		</div>
	),
};
