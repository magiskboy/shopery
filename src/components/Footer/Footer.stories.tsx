import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import { Subscribe } from "../Subscribe/Subscribe";

const MyComponent: React.FC = () => {
  const socialIcons: string[] = [];
  const logo =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/909a39a118b5bfd5a2d2ca66d8c40dfd53e721590788804aff7f73a3c7a2f225?apiKey=1d65eaa227da48a9908a318b50c4785b&";
  const paymentIcons = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a91f2560c3703c5f77d35490d05d45a8c957ad47e748fda4d02b08c13e7ea158?apiKey=1d65eaa227da48a9908a318b50c4785b&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c983c2142cb80ea1262a504a8b01b87ac4c68eaaea272dc869cfa58a33d3333f?apiKey=1d65eaa227da48a9908a318b50c4785b&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/38d6cb0e8b8cd630fb87860d2302a0e0c03af3ecfe1df239d1e262bd01450419?apiKey=1d65eaa227da48a9908a318b50c4785b&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/de808fa852ea3d60b84261a3878504d31c7952cf41e34221928668afe2a2b830?apiKey=1d65eaa227da48a9908a318b50c4785b&",
  ];

  return (
    <div className="flex flex-col w-full">
      <Subscribe
        socialIcons={socialIcons}
        logo={logo}
        paymentIcons={paymentIcons}
      />
      <Footer logo={logo} paymentIcons={paymentIcons} />
    </div>
  );
};

const meta = {
  title: "Shopery/Footer",
  component: MyComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {},
};
