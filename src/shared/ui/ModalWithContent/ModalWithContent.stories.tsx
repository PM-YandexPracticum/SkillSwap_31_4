import type { Meta, StoryObj } from '@storybook/react-vite';
import { ModalWithContentUI } from './ModalWithContent';

const meta = {
	title: 'Shared/UI/ModalWithContentUI',
	component: ModalWithContentUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ModalWithContentUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalWithContentDefault: Story = {
	args: {
		title: 'Ваше предложение создано',
		subtitle: 'Теперь вы можете предложить обмен',
		onClose: () => alert('Закрытие модалки'),
		svg: '/svg/user-circle.svg',
	},
	render: (args) => (
		<div
			style={{
				width: '800px',
				height: '800px',
				backgroundColor: '#8E8E8E99',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<ModalWithContentUI {...args} />
		</div>
	),
};
