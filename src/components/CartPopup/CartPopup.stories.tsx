import type { Meta, StoryObj } from '@storybook/react';
import { CartPopup } from './CartPopup';

const meta = {
  title: 'Shopery/CartPopup',
  component: CartPopup,
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {  },
} satisfies Meta<typeof CartPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    products: [
      {
        imageUrl: "/images/orange.png",
        name: "Fresh Indian Orange",
        quantity: 1,
        price: 12.0,
      },
      {
        imageUrl: "/images/apple.png", 
        name: "Green Apple",
        quantity: 1,
        price: 14.0,
      },
    ]
  },
};