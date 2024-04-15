import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Form';

const meta = {
  title: 'Shopery/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    type: 'email',
    placeholder: 'nguyenkhacthanh244@gmail.com',
    className: 'w-[500px]'
  },
};