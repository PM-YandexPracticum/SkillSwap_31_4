import type { Meta } from '@storybook/react-vite';
import lightBulb from '@images/light-bulb.png';
import userInfo from '@images/user-info.png';
import schoolBoard from '@images/school-board.png';
import { StepInfoBlockUI } from './StepInfoBlock';

const meta = {
	title: 'Widgets/StepInfoBlockUI',
	component: StepInfoBlockUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof StepInfoBlockUI>;

export default meta;

export const StepInfoBlockLight = {
	render: () => (
		<StepInfoBlockUI
			title='С возвращением в SkillSwap!'
			subtitle='Обменивайтесь знаниями и навыками с другими людьми'
			urlIcon={lightBulb}
		/>
	),
};

export const StepInfoBlockUser = {
	render: () => (
		<StepInfoBlockUI
			title='С возвращением в SkillSwap!'
			subtitle='Обменивайтесь знаниями и навыками с другими людьми'
			urlIcon={userInfo}
		/>
	),
};

export const StepInfoBlockBoard = {
	render: () => (
		<StepInfoBlockUI
			title='С возвращением в SkillSwap!'
			subtitle='Обменивайтесь знаниями и навыками с другими людьми'
			urlIcon={schoolBoard}
		/>
	),
};
