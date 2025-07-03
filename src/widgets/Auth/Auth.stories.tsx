import type { Meta } from '@storybook/react-vite';
import type { SyntheticEvent } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Auth } from './Auth';

const meta = {
	title: 'widgets/Auth',
	component: Auth,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Auth>;

export default meta;

export const AuthDefault = {
	render: () => {
		const handleSubmit = (e: SyntheticEvent) => {
			e.preventDefault();
			console.log(e);
		};

		return (
			<MemoryRouter>
				<Auth handleSubmit={handleSubmit} />
			</MemoryRouter>
		);
	},
};
