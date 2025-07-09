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
		const [withDescription, setWithDescription] = useState(false);

		useEffect(() => {
			fetch('https://skills-api.lukumka-dev.ru/api/users/')
				.then((res) => res.json())
				.then((data) => {
					setUser(data.users[4]);
				});
		}, []);
		if (!user) return <div>Loading...</div>;

		return (
			<div
				style={{
					width: '100vw',
					height: '100vh',
					backgroundColor: '#333',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<div>
					{withDescription && (
						<button
							type='button'
							style={{ marginBlockEnd: '20px', cursor: 'pointer' }}
							onClick={() => setWithDescription(false)}>
							Вернуться назад
						</button>
					)}
					<Card
						photo={user?.photo ?? ''}
						userName={user?.name ?? ''}
						userLocation={user?.city ?? ''}
						userAge={user?.age ?? 0}
						teachSkills={user?.canTeach ?? []}
						learnSkills={user?.wantsToLearn ?? []}
						isLiked={isLiked}
						onClickLike={() => setIsLiked(!isLiked)}
						onClickDetails={() => setWithDescription(true)}
						withDescription={withDescription}
						aboutMe={user.about ?? ''}
					/>
				</div>
			</div>
		);
	},
};
