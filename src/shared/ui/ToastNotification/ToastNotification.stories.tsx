import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ToastNotificationUI } from './ToastNotification';

const meta: Meta<typeof ToastNotificationUI> = {
	title: 'Shared/UI/ToastNotificationUI',
	component: ToastNotificationUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ToastNotificationUI>;

export default meta;

type Story = StoryObj<typeof ToastNotificationUI>;

export const Default: Story = {
	render: (args) => {
		const [isShow, setIsShow] = useState(true);
		const [ishide, setIsHide] = useState(!isShow);

		useEffect(() => {
			if (isShow) {
				setIsShow(true);
				setIsHide(false);
			} else {
				setIsShow(false);
				setTimeout(() => setIsHide(true), 500);
			}
		}, [isShow]);

		const onClickTest = () => {
			setIsShow((prev) => !prev);
		};

		const onClick = () => {
			setIsShow(false);
			alert('Navigate to Skills');
		};

		const onClose = () => setIsShow(false);

		return (
			<div style={{ width: 436, height: 200, padding: 20 }}>
				<button type='button' onClick={onClickTest}>
					{'Изменить isShow'}
				</button>
				<ToastNotificationUI
					{...args}
					isShow={isShow}
					isHide={ishide}
					onClick={onClick}
					onClose={onClose}
				/>
			</div>
		);
	},
	args: {
		message: 'Олег предлагает вам обмен',
		isAbsolute: false,
	},
};
