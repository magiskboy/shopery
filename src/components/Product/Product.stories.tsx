import type { Meta, StoryObj } from '@storybook/react';
import Product from './Product';

const meta = {
  title: 'Shopery/Product',
  component: Product,
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {  },
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    image: '/images/apple.png',
    price: 14.99,
    name: 'Apple',
    rate: 4,
  },
};