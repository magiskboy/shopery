import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

const meta = {
  title: 'Shopery/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    
  },
};