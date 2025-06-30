import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonUI } from './Button';

const meta = {
	title: 'Shared/UI/Button',
	component: ButtonUI,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ButtonUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
	args: {
		onClick: () => alert('Primary Button Clicked'),
		color: 'primary',
		width: '200px',
		isDisabled: false,
	},

	render: (args) => (
		<div
			style={{
				width: '400px',
				height: '400px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#F9FAF7',
			}}>
			<ButtonUI {...args}>Primary</ButtonUI>
		</div>
	),
};

export const ButtonWithArrowIcon: Story = {
	args: {
		onClick: () => alert('Primary Button Clicked'),
		color: 'tertiary',
		width: '187px',
		isDisabled: false,
	},

	render: (args) => (
		<div
			style={{
				width: '400px',
				height: '400px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#F9FAF7',
			}}>
			<ButtonUI {...args}>
				Смотреть все
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M8.68983 20C8.51449 20 8.33915 19.9354 8.20072 19.797C7.93309 19.5293 7.93309 19.0864 8.20072 18.8187L14.2177 12.8017C14.6607 12.3588 14.6607 11.6389 14.2177 11.196L8.20072 5.17895C7.93309 4.91132 7.93309 4.46835 8.20072 4.20072C8.46835 3.93309 8.91132 3.93309 9.17895 4.20072L15.196 10.2177C15.6666 10.6884 15.9342 11.3252 15.9342 11.9988C15.9342 12.6725 15.6758 13.3093 15.196 13.78L9.17895 19.797C9.04052 19.9262 8.86518 20 8.68983 20Z'
						fill='#253017'
					/>
				</svg>
			</ButtonUI>
		</div>
	),
};

export const ButtonWithFilterIcon: Story = {
	args: {
		onClick: () => alert('Primary Button Clicked'),
		color: 'tertiary',
		width: '187px',
		isDisabled: false,
	},

	render: (args) => (
		<div
			style={{
				width: '400px',
				height: '400px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#F9FAF7',
			}}>
			<ButtonUI {...args}>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M10.5636 7.82219C10.3881 7.82219 10.2125 7.75755 10.074 7.61898L7.12706 4.67207L4.18015 7.61898C3.91225 7.88688 3.46883 7.88688 3.20093 7.61898C2.93302 7.35108 2.93302 6.90766 3.20093 6.63976L6.63748 3.20321C6.76681 3.07388 6.9423 3 7.12706 3C7.31182 3 7.48737 3.07388 7.6167 3.20321L11.0532 6.63976C11.3211 6.90766 11.3211 7.35108 11.0532 7.61898C10.9146 7.75755 10.7391 7.82219 10.5636 7.82219Z'
						fill='#253017'
					/>
					<path
						d='M7.12669 21.014C6.74793 21.014 6.43384 20.6999 6.43384 20.3212V3.69285C6.43384 3.31409 6.74793 3 7.12669 3C7.50544 3 7.81953 3.31409 7.81953 3.69285V20.3212C7.81953 20.6999 7.50544 21.014 7.12669 21.014Z'
						fill='#253017'
					/>
					<path
						d='M16.8729 21.0133C16.6882 21.0133 16.5126 20.9394 16.3833 20.8101L12.9468 17.3735C12.6789 17.1056 12.6789 16.6622 12.9468 16.3943C13.2147 16.1264 13.6581 16.1264 13.926 16.3943L16.8729 19.3412L19.8198 16.3943C20.0877 16.1264 20.5311 16.1264 20.799 16.3943C21.0669 16.6622 21.0669 17.1056 20.799 17.3735L17.3625 20.8101C17.2332 20.9394 17.0484 21.0133 16.8729 21.0133Z'
						fill='#253017'
					/>
					<path
						d='M16.8637 21.014C16.485 21.014 16.1709 20.6999 16.1709 20.3212V3.69285C16.1709 3.31409 16.485 3 16.8637 3C17.2425 3 17.5566 3.31409 17.5566 3.69285V20.3212C17.5566 20.6999 17.2517 21.014 16.8637 21.014Z'
						fill='#253017'
					/>
				</svg>
				Сначала новые
			</ButtonUI>
		</div>
	),
};
