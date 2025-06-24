import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeToggleButton } from '@ui';
import { useEffect, useState } from 'react';

const meta = {
	title: 'Shared/UI/ThemeToggleButton',
	component: ThemeToggleButton,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ThemeToggleButton>;

export default meta;
type Story = StoryObj<typeof ThemeToggleButton>;
type TTheme = 'light' | 'dark';

const ThemeToggleComponent = () => {
	const [theme, setTheme] = useState<TTheme>(() => {
		if (typeof window !== 'undefined') {
			return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
		}
		return 'light';
	});

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return <ThemeToggleButton theme={theme} onClick={toggleTheme} />;
};

export const ToggleTheme: Story = {
	render: () => <ThemeToggleComponent />,
};
