import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Line } from './index'
import { LineProps } from './type'

export default {
  title: 'Components/Line',
  component: Line,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
    dashed: {
      control: 'boolean',
    },
    thickness: {
      control: 'text',
    },
    maxWidth: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<LineProps>

type Story = StoryObj<LineProps>

export const DefaultLine = {
  args: {},
  render: function Render(args: LineProps) {
    return <Line {...args} />
  },
}
DefaultLine.args = {}

export const ColorLine: Story = {
  args: {
    color: 'red',
  },
  render: function Render(args: LineProps) {
    return <Line {...args} />
  },
}

export const DashedLine: Story = {
  args: {
    dashed: true,
  },
  render: function Render(args: LineProps) {
    return <Line {...args} />
  },
}

export const ThickLine: Story = {
  args: {
    thickness: '3',
  },
  render: function Render(args: LineProps) {
    return <Line {...args} />
  },
}

export const DashedThickLine: Story = {
  args: {
    dashed: true,
    thickness: '3',
  },
  render: function Render(args: LineProps) {
    return <Line {...args} />
  },
}

export const MaxWidthLine: Story = {
  args: {
    maxWidth: '50%',
  },
  render: function Render(args: LineProps) {
    return <Line {...args} />
  },
}
