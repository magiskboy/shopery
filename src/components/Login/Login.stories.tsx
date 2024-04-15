import type { Meta, StoryObj } from '@storybook/react';
import Login from './Login';

const meta = {
  title: 'Shopery/Login',
  component: Login,
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {  },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    
  },
};