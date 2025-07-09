import type { Meta, StoryObj } from '@storybook/react';
import { PhotoGalleryUI } from './PhotoGallery.tsx';
import photo1 from '../../../images/Image1-ModalSkills.jpg';
import photo2 from '../../../images/Image2-ModalSkills.jpg';
import photo3 from '../../../images/Image3-ModalSkills.jpg';
import photo4 from '../../../images/ImageMain-ModalSkills.jpg';
import photo5 from '../../../images/ImageMain-ModalSkills.jpg';

const meta = {
	title: 'Shared/UI/PhotoGalleryUI',
	component: PhotoGalleryUI,
	decorators: [
		(Story) => (
			<div style={{ maxHeight: '324px', maxWidth: '440px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof PhotoGalleryUI>;

const photos = [photo1, photo2, photo3, photo4, photo5];

export default meta;
type Story = StoryObj<typeof PhotoGalleryUI>;

export const Default: Story = {
	render: () => {
		return <PhotoGalleryUI photos={photos} />;
	},
};
