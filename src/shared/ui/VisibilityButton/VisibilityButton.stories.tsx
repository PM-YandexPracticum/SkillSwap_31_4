import type { Meta, StoryObj } from '@storybook/react-vite';
import { VisibilityButton } from '@ui';
import { useEffect, useState } from 'react';

const meta = {
	title: 'Shared/UI/VisibilityButton',
	component: VisibilityButton,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof VisibilityButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VisButton: Story = {
	args: {
		isHidden: true,
		onClick: () => {
			alert('Скрыто/Доступно');
		},
	},

	render: (args) => {
		const [hidden, setHidden] = useState(args.isHidden);

		useEffect(() => {
			setHidden(args.isHidden);
		}, [args.isHidden]);

		const handleClick = () => {
			setHidden((prev) => !prev);
			args.onClick?.();
		};

		return (
			<VisibilityButton {...args} isHidden={hidden} onClick={handleClick} />
		);
	},
};
