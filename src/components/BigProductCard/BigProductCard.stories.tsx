import type { Meta, StoryObj } from '@storybook/react';
import BigProductCard from './BigProductCard';

const meta = {
  title: 'Shopery/BigProductCard',
  component: BigProductCard,
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {  },
} satisfies Meta<typeof BigProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    productImage: '/images/apple.png',
    productName: 'Green apple',
    discountedPrice: 20,
    originalPrice: 23,
    totalRatings: 4,
    daysRemaining: 1,
    hoursRemaining: 3,
    minutesRemaining: 12,
    secondsRemaining: 34,
  },
};