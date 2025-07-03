import type { Meta, StoryObj } from '@storybook/react';
import { ReviewModalUI } from './ReviewModal';

import ImageMain from '../../../images/ImageMain-ModalSkills.jpg';
import image1 from '../../../images/Image1-ModalSkills.jpg';
import image2 from '../../../images/Image2-ModalSkills.jpg';
import image3 from '../../../images/Image3-ModalSkills.jpg';

const meta = {
	title: 'Shared/UI/ReviewModal',
	component: ReviewModalUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div style={{ padding: '300px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof ReviewModalUI>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockImage1 = ImageMain;
const mockImage2 = image1;
const mockImage3 = image2;
const mockImage4 = image3;
const mockImage5 = image3;
const mockImage6 = image3;

const mockData = {
	title: 'Игра на барабанах',
	category: 'Творчество и искусство',
	subcategory: 'Музыка и звук',
	description:
		'Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без партитуры.',
	images: [
		mockImage1,
		mockImage2,
		mockImage3,
		mockImage4,
		mockImage5,
		mockImage6,
	],
};

export const Default: Story = {
	args: {
		data: mockData,
		onClose: () => alert(`Закрыли`),
		onSave: () => alert(`Сохранено`),
	},
};
