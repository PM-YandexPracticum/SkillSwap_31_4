import type { Meta } from "@storybook/react-vite";
import { useState } from "react";
import { CheckboxSubcategoryUI } from "./CheckboxSubcategory";

const meta = {
  title: 'Shared/UI/CheckboxSubcategory',
  component: CheckboxSubcategoryUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof CheckboxSubcategoryUI>;

export default meta;

export const CheckboxSubcategoryDefault = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div>
        <CheckboxSubcategoryUI isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
      </div>
    )
  }
}