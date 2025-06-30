import type { Meta } from '@storybook/react-vite';
import { ModalWithContentUI } from '../ModalWithContent';
import { ModalUI } from './Modal';
import { useState } from 'react';
import { ButtonUI } from '../Button';

const meta = {
	title: 'Shared/UI/Modal',
	component: ModalUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ModalUI>;

export default meta;

export const ModalDefault = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		const modalToggle = () => setIsOpen(!isOpen);

		return (
			<div>
				<ButtonUI onClick={modalToggle} text='Открыть' color='primary' />
				{isOpen && (
					<ModalUI
						onClose={modalToggle}
						children={
							<ModalWithContentUI
								title='Ваше предложение создано'
								subtitle='Теперь вы можете предложить обмен'
								icon='src/images/icons/user-circleModal.svg'
								onClose={modalToggle}
							/>
						}
					/>
				)}
			</div>
		);
	},
};
