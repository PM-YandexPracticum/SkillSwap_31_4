import type { Meta } from '@storybook/react-vite';
import type { SyntheticEvent } from 'react';
import { LoginUI } from './Login';

const meta = {
	title: 'Shared/UI/LoginUI',
	component: LoginUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof LoginUI>;

export default meta;

export const Login = {
	render: () => {
		const handleSubmit = (e: SyntheticEvent) => {
			e.preventDefault();
			console.log(e);
		};

		return <LoginUI handleSubmit={handleSubmit} />;
	},
};
