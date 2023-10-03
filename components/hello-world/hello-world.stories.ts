import type { Meta, StoryObj } from '@storybook/react';
import { HelloWorld } from './hello-world';

const meta = {
  title: 'Hello World',
  component: HelloWorld,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LangdEn: Story = {
  args: {
    name: 'Jane Doe',
    lang: 'en',
  },
};

export const LangEs: Story = {
  args: {
    name: 'Jane Doe',
    lang: 'es',
  },
};
