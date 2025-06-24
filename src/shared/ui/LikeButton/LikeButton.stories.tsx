import type { Meta } from '@storybook/react-vite';
import { LikeButtonUI } from './LikeButton';
import { useState } from 'react';

const meta = {
	title: 'Shared/UI/LikeButton',
	component: LikeButtonUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof LikeButtonUI>;

export default meta;

export const LikeButton = {
	render: () => {
		const [isLiked, setIsLiked] = useState(false);
		return (
			<div>
				<LikeButtonUI isLiked={isLiked} onClick={() => setIsLiked(!isLiked)} />
			</div>
		);
	},
};

export const HeaderLikeButton = {
	render: () => {
		return (
			<div>
				<LikeButtonUI onClick={() => console.log('Hello')} />
			</div>
		);
	},
};
