import type { Meta, StoryFn } from '@storybook/react-vite';
import { StepOne } from './StepOne';

const meta: Meta<typeof StepOne> = {
	title: 'Widgets/StepOne',
	component: StepOne,
	argTypes: {
		onNext: {
			action: 'onNext',
			description: 'Callback при нажатии кнопки "Далее"',
		},
		onGoogleAuth: {
			action: 'onGoogleAuth',
			description: 'Callback при авторизации через Google',
		},
		onAppleAuth: {
			action: 'onAppleAuth',
			description: 'Callback при авторизации через Apple',
		},
	},
};

export default meta;

const Template: StoryFn<typeof StepOne> = (args) => <StepOne {...args} />;

export const Default = Template.bind({});
Default.args = {
	onNext: () => {},
	onGoogleAuth: () => {},
	onAppleAuth: () => {},
};
