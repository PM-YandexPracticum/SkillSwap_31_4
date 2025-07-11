import type { Meta, StoryObj } from '@storybook/react-vite';

import { CardDetailsUI } from './CardDetails';
import photo1 from '../../images/Image1-ModalSkills.jpg';
import photo2 from '../../images/Image2-ModalSkills.jpg';
import photo3 from '../../images/Image3-ModalSkills.jpg';
import photo4 from '../../images/ImageMain-ModalSkills.jpg';

const meta = {
	title: 'Widgets/CardDetails',
	component: CardDetailsUI,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CardDetailsUI>;

const photos = [photo1, photo2, photo3, photo4];
const skill = {
	isLiked: false,
	skillName: 'Навык',
	skillCategory: 'Творчество и искусство',
	skillSubCategory: 'Музыка и звук',
	skillDescription:
		'Игра на флейте - профессиональный навык исполнения академического и современного репертуара. Опыт сольных концертов, участия в оркестре и камерных ансамблях. Владение техникой дыхания, звукоизвлечения, динамики, артикуляции. Умение работать над интерпретацией произведения и взаимодействовать с другими музыкантами.',
};
export default meta;
type Story = StoryObj<typeof CardDetailsUI>;

export const Default: Story = {
	render: () => (
		<CardDetailsUI
			photos={photos}
			{...skill}
			onShareButtonClick={() => alert('Share button clicked')}
			onLikeButtonClick={() => alert('Like button clicked')}
			onMoreButtonClick={() => alert('More button clicked')}
			onOfferButtonClick={() => alert('Offer button clicked')}
		/>
	),
};
