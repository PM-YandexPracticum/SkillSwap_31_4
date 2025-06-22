import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownMultiUI } from './DropdownMulti';
import type { TOption } from '../DropdownSingle/type';
import type {TDropdownMultiUIProps} from './type'

const meta: Meta<typeof DropdownMultiUI> = {
    title: 'Shared/UI/DropdownMultiUI',
    component: DropdownMultiUI,
    parameters: {
      layout: 'centered',
    },
  };
export default meta;

type Story = StoryObj<TDropdownMultiUIProps>;

export const Default: Story = {
    render: () => {
      const [isOpen, setIsOpen] = React.useState(false);
      const [options, setOptions] = React.useState<TOption[]>([
        { value: 'cat1', text: 'Категория 1', selected: false },
        { value: 'cat2', text: 'Категория 2', selected: false },
        { value: 'cat3', text: 'Категория 3', selected: false },
        { value: 'cat4', text: 'Категория 4', selected: false },
      ]);
  
      const handleToggle = () => setIsOpen(prev => !prev);
      const handleChange = (value: string) => {
        setOptions(prev =>
          prev.map(option =>
            option.value === value
              ? { ...option, selected: !option.selected }
              : option
          )
        );
      };

  const displayText =
  options.filter(o => o.selected).length > 0
    ? `Выбрано: ${options.filter(o => o.selected).length}`
    : '';

  return (
    <DropdownMultiUI
      label="Категория навыка, которому хотите научиться"
      placeholder="Выберите категорию"
      isOpen={isOpen}
      onToggle={handleToggle}
      isPlaceholderActive={options.every(opt => !opt.selected)}
      options={options}
      onChange={handleChange}
      displayText={displayText}
    />
  );
}
}