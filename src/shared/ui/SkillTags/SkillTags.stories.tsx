import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkillTags } from './SkillTags';

const meta = {
	title: 'Shared/UI/SkillTags',
	component: SkillTags,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SkillTags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkillTag: Story = {
	args: {
		category: 'Иностранные языки',
		children: 'Английский',
	},
	render: (args) => {
		return <SkillTags {...args} />;
	},
};
