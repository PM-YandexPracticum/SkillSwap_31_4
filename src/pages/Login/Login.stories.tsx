import type { Meta } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { Login } from './Login';

const meta = {
	title: 'pages/Login',
	component: Login,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Login>;

export default meta;

export const LoginDefault = () => (
	<MemoryRouter>
		<Login />
	</MemoryRouter>
);
