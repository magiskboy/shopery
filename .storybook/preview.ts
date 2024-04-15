import type { Preview } from "@storybook/react";
import '../src/styles/deps.css';
import '../src/styles/colors.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
