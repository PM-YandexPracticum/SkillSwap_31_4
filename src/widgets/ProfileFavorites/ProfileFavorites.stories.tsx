import type { Meta } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { ProfileFavoritesUI } from './ProfileFavorites';
import { ProfileTabs } from '../ProfileTabs/ProfileTabs';

const meta = {
	title: 'Widgets/ProfileFavorites',
	component: ProfileFavoritesUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ProfileFavoritesUI>;

export default meta;

export const ProfileTabsDefault = () => (
	<div
		style={{
			display: 'flex',
			backgroundColor: '#F9FAF7',
			gap: '24px',
			width: '1368px',
		}}>
		<MemoryRouter>
			<ProfileTabs />
			<ProfileFavoritesUI />
		</MemoryRouter>
	</div>
);
