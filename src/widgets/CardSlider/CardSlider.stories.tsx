import type { Meta } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { CardSlider } from './CardSlider';

const meta = {
	title: 'Widgets/CardSlider',
	component: CardSlider,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CardSlider>;

export default meta;

export const CardSliderDefault = () => (
	<MemoryRouter>
		<CardSlider />
	</MemoryRouter>
);
