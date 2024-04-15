import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';

const meta = {
  title: 'Shopery/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    productImageSrc: '/images/apple.png',
    productImageAlt: 'apple',
    productName: 'Green apple',
    productPrice: 20,
    productOriginalPrice: 23,
    productRating: 4,
    onAddToCart: () => {},
    tags: [
      {text: "Sale 50%", color: 'bg-red-500'},
      {text: "Best sale", color: 'bg-blue-500'},
    ]
  },
};