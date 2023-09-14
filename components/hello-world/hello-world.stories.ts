import type { Meta, StoryObj } from '@storybook/react';
import { HelloWorld } from './hello-world';

const meta = {
  title: 'Example/Header',
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

export const LoggedIn: Story = {
  args: {
    name: 'Jane Doe',
  },
};

export const LoggedOut: Story = {};
