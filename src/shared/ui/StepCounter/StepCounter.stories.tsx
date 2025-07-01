import type { Meta, StoryObj } from '@storybook/react';
import StepCounter from './StepCounter';

const meta: Meta<typeof StepCounter> = {
	title: 'Shared/UI/StepCounter',
	component: StepCounter,
	argTypes: {
		currentStep: { control: { type: 'number', min: 1 } },
		totalSteps: { control: { type: 'number', min: 1 } },
	},
};

export default meta;

type Story = StoryObj<typeof StepCounter>;

export const Step1: Story = {
	args: {
		currentStep: 1,
		totalSteps: 3,
	},
};

export const Step2: Story = {
	args: {
		currentStep: 2,
		totalSteps: 3,
	},
};

export const Step3: Story = {
	args: {
		currentStep: 3,
		totalSteps: 3,
	},
};
