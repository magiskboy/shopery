import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Price } from './Price';

const meta = {
  title: 'Shopery/Price',
  component: Price,
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {  },
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    price: 19.43,
    size: 'medium',
  },
};