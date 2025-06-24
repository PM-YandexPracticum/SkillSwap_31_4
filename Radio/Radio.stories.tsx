import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {RadioUI} from './Radio';

const meta: Meta<typeof RadioUI> = {
    title: 'Shared/UI/Radio',
    component: RadioUI,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered',
    },
  } satisfies Meta<typeof RadioUI>;
  
  export default meta;
  
  type Story = StoryObj<typeof RadioUI>;
  
  export const Default: Story = {
    render: (args) => {
      const [selectedOption, setSelectedOption] = useState<string>(args.defaultValue ?? '');
  
      return (
        <div style={{ width: 284 }}>
          <RadioUI
            {...args}
            defaultValue={selectedOption}
            onChange={(value) => setSelectedOption(value)}
          />
        </div>
      );
    },
    args: {
      options: [
        { value: 'all', label: 'Всё' },
        { value: 'learn', label: 'Хочу научиться' },
        { value: 'teach', label: 'Могу научить' },
      ],
      defaultValue: 'all',
    },
  };