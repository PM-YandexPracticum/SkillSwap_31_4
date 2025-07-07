import type { Meta } from '@storybook/react-vite';
import { Card } from './Card';
import { useEffect, useState } from 'react';
import type { TUser } from '../../lib/types/user.ts';

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
		const [user, setUser] = useState<TUser | null>(null);

		useEffect(() => {
			fetch('https://skills-api.lukumka-dev.ru/api/users/')
				.then((res) => res.json())
				.then((data) => {
					setUser(data.users[4]);
				});
		}, []);
		if (!user) return <div>Loading...</div>;

		return (
			<div>
				<Card
					photo={user?.photo ?? ''}
					userName={user?.name ?? ''}
					userLocation={user?.city ?? ''}
					userAge={user?.age ?? 0}
					teachSkills={user?.canTeach ?? []}
					learnSkills={user?.wantsToLearn ?? []}
					isLiked={isLiked}
					onClickLike={() => setIsLiked(!isLiked)}
					onClickDetails={() => alert('Подробности не подробны:)')}
					withDescription={false}
					aboutMe={user.about ?? ''}
				/>
			</div>
		);
	},
};

export const UICardWithDescription = {
	render: () => {
		const [isLiked, setIsLiked] = useState(false);
		const [user, setUser] = useState<TUser | null>(null);

		useEffect(() => {
			fetch('https://skills-api.lukumka-dev.ru/api/users/')
				.then((res) => res.json())
				.then((data) => {
					setUser(data.users[4]);
				});
		}, []);
		if (!user) return <div>Loading...</div>;

		return (
			<div>
				<Card
					photo={user?.photo ?? ''}
					userName={user?.name ?? ''}
					userLocation={user?.city ?? ''}
					userAge={user?.age ?? 0}
					teachSkills={user?.canTeach ?? []}
					learnSkills={user?.wantsToLearn ?? []}
					isLiked={isLiked}
					onClickLike={() => setIsLiked(!isLiked)}
					onClickDetails={() => alert('Подробности не подробны:)')}
					withDescription={true}
					aboutMe={user.about ?? ''}
				/>
			</div>
		);
	},
};
