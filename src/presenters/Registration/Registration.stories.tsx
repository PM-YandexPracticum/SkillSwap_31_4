import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Registration } from './Registration';
import store from '../../services/store';

const meta = {
	title: 'Pages/Registration',
	component: Registration,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Registration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	render: (args) => (
		<MemoryRouter>
			<Provider store={store}>
				<Registration {...args} />
			</Provider>
		</MemoryRouter>
	),
	args: {},
};
