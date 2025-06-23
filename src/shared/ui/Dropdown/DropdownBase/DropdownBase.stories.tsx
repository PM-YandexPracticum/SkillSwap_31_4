import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownBaseUI } from './DropdownBase';

const meta: Meta<typeof DropdownBaseUI> = {
  title: 'Components/DropdownBaseUI',
  component: DropdownBaseUI,
};

export default meta;

type Story = StoryObj<typeof DropdownBaseUI>;

export const Default: Story = {
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>();
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ width: 436, padding: 20 }}>
        <DropdownBaseUI
          {...args}
          selectedOption={selectedOption}
          isOpen={isOpen}
          onToggle={() => setIsOpen((prev) => !prev)}
          onSelect={(value) => {
            setSelectedOption(value);
            setIsOpen(false);
          }}
        />
      </div>
    );
  },
  args: {
    label: 'Выберите значение',
    placeholder: 'Плейсхолдер',
    options: [ 
	{ value: '1', text: 'Опция 1' },
	{ value: '2', text: 'Опция 2' },
	{ value: '3', text: 'Опция 3' },
	],
  },
};