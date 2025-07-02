import type { Meta } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import { ProfileTabs } from './ProfileTabs';

const meta = {
	title: 'Widgets/ProfileTabs',
	component: ProfileTabs,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ProfileTabs>;

export default meta;

export const ProfileTabsDefault = () => (
	<MemoryRouter>
		<ProfileTabs />
	</MemoryRouter>
);
