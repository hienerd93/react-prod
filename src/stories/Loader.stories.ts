import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";

const meta = {
  title: "Example/Loader",
  component: Loader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    className: "simple",
    backgroundColor: "",
  },
};

export const Complex: Story = {
  args: {
    className: "complex",
    backgroundColor: "",
  },
};
