import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Radio } from './index'
import { RadioContentProps } from './type'

export default {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    checked: {
      control: 'boolean',
    },
    size: {
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
} as Meta<RadioContentProps>

type Story = StoryObj<RadioContentProps & { size: string }>

export const EmptyRadio: Story = {
  args: {},
  render: function Render(args: RadioContentProps) {
    return <Radio {...args} />
  },
}

export const CheckedRadio: Story = {
  args: {
    checked: true,
  },
  render: function Render(args: RadioContentProps) {
    return <Radio {...args} />
  },
}

export const BigRadio: Story = {
  args: {
    size: '50px',
  },
  render: function Render(args: RadioContentProps) {
    return <Radio {...args} />
  },
}
