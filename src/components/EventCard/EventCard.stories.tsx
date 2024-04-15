const events = [
    {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31b28a6216536e2313db65dfbd7b6e88afdb86863797255e7b03b372920eac37?apiKey=19dd9cda44174f2b9e30a7b65a715630&",
    date: "18",
    month: "Nov",
    category: "Food",
    author: "Admin",
    comments: 65,
    title:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
    image: "{{ext_10}}",
    date: "22",
    month: "Dec",
    category: "Travel",
    author: "John Doe",
    comments: 42,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
    image: "{{ext_11}}",
    date: "05",
    month: "Jan",
    category: "Lifestyle",
    author: "Jane Smith",
    comments: 87,
    title:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];
  

import type { Meta, StoryObj } from '@storybook/react';
import EventCard from './EventCard';

const meta = {
  title: 'Shopery/EventCard',
  component: EventCard,
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {  },
} satisfies Meta<typeof EventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: events[0]
};