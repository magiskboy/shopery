import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ReactComponent as HeartIcon } from '../../../public/icons/heart.svg';


const meta = {
  title: 'Shopery/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    children: 'Button',
    type: 'fill'
  },
};

export const Border: Story = {
  args: {
    children: "Button",
    type: 'border'
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    type: 'shost'
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button'
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button'
  },
};

export const Icon: Story = {
  args: {
    children: <img src="/icons/heart.svg" alt="heart" />
  }
}