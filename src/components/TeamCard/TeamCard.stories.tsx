import type { Meta, StoryObj } from '@storybook/react';
import TeamCard from './TeamCard';

const meta = {
  title: 'Shopery/TeamCard',
  component: TeamCard,
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {  },
} satisfies Meta<typeof TeamCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    imageSrc: "/images/profile1.png",
    name: "Jenny Wilson",
    title: "CEO & Founder",
  },
};