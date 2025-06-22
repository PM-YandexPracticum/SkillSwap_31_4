import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownSingleUI } from './DropdownSingle';
import type { TOption, TDropdownSingleUIProps } from './type';

const meta: Meta<TDropdownSingleUIProps> = {
  title: 'Shared/UI/DropdownSingle',
  component: DropdownSingleUI,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

const optionsMock: TOption[] = [
  { value: 'placeholder', text: 'Выберите значение' },
  { value: '1', text: 'Опция 1' },
  { value: '2', text: 'Опция 2' },
  { value: '3', text: 'Опция 3' },
];

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string>('');
    const [options, setOptions] = useState<TOption[]>(optionsMock);

    const handleChange = (value: string) => {
      setSelected(value);
      setOptions(prev =>
        prev.map(opt => ({ ...opt, selected: opt.value === value }))
      );
      setIsOpen(false);
    };

    const selectedOption = options.find(opt => opt.value === selected);
    const isPlaceholderActive = !selected;

    return (
      <DropdownSingleUI
        label="Сингл-дропдаун"
        placeholder="Выберите значение"
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        options={options}
        onChange={handleChange}
        displayText={selectedOption?.text || ''}
        isPlaceholderActive={isPlaceholderActive}
      />
    );
  },
};