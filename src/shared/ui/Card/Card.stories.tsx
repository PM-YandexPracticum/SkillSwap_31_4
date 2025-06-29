import type { Meta } from '@storybook/react-vite';
import { Card } from './Card';
import { useState } from 'react';

const meta = {
	title: 'Shared/UI/Card',
	component: Card,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#333' },
				{ name: 'light', value: '#fff' },
			],
		},
	},
} satisfies Meta<typeof Card>;

export default meta;

export const UICard = {
	render: () => {
		const [isLiked, setIsLiked] = useState(false);

		return (
			<div>
				<Card
					photo='https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					userName='Иван'
					userLocation='Санкт-Петербург'
					userAge={26}
					teachSkills={[
						{ tagText: 'Английский язык', category: 'Иностранные языки' },
					]}
					learnSkills={[
						{ tagText: 'Тайм менеджмент', category: 'Образование и развитие' },
						{ tagText: 'Медитация', category: 'Здоровье и лайфстайл' },
						{ tagText: 'Английский язык', category: 'Иностранные языки' },
						{
							tagText: 'Игра на барабанах',
							category: 'Творчество и искусство',
						},
					]}
					isLiked={isLiked}
					onClickLike={() => setIsLiked(!isLiked)}
					onClickDetails={() => alert('Подробности не подробны:)')}
				/>
			</div>
		);
	},
};
