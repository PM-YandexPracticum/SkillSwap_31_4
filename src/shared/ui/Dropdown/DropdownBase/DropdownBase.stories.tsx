import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownBaseUI } from './DropdownBase';
import type { TDropdownBaseUIProps } from './type';

const meta: Meta<typeof DropdownBaseUI> = {
  title: 'Shared/UI/DropdownBaseUI',
  component: DropdownBaseUI,
  parameters: {
    layout: 'centered',
  },
};
  
  export default meta;
  type Story = StoryObj<TDropdownBaseUIProps>;
  
  export const Default: Story = {
	args: {
	  label: 'Базовый дропдаун',
	  placeholder: 'Выберите значение',
	  isOpen: true,
	  isPlaceholderActive: true,
	  displayText: '',
	  onToggle: () => alert('toggle!'),
	  children: (
		<>
		  <li style={{ padding: 8, paddingLeft: 20 }}>Опция 1</li>
		  <li style={{ padding: 8, paddingLeft: 20 }}>Опция 2</li>
		  <li style={{ padding: 8, paddingLeft: 20 }}>Опция 3</li>
		</>
	  ),
	},
  };