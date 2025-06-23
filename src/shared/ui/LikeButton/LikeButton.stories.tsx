import type { Meta, StoryObj } from "@storybook/react-vite";
import { LikeButtonUI } from "./LikeButton";

const meta = {
  title: 'Shared/UI/LikeButton',
  component: LikeButtonUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof LikeButtonUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LikeButton: Story = {
  render: () => (
    <div>
      <LikeButtonUI />
    </div>
  )
}