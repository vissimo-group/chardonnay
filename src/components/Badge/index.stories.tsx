import type { Meta, StoryObj } from '@storybook/react'
import { Money } from 'semillon'
import { Badge } from '.'

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      size: {
        control: { type: 'select' },
        options: ['small', 'normal'],
        description: 'The size of the Badge.',
      },
      description: 'The size of the Badge.',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'The background color of the Badge.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => <Badge {...args}>A nice label</Badge>,
}

export const Normal: Story = {
  args: {
    size: 'normal',
  },
  render: (args) => <Badge {...args}>A nice label</Badge>,
}

export const WithIcon: Story = {
  args: {
    size: 'normal',
  },
  render: (args) => (
    <Badge {...args}>
      <Money color="white" size={16} />A nice label
    </Badge>
  ),
}

export const WithCustomTextColor: Story = {
  args: {
    size: 'normal',
  },
  render: (args) => (
    <Badge {...args}>
      <Money color="#1B6AA3" size={16} />

      <span style={{ color: '#1B6AA3', fontSize: '12px', lineHeight: '1' }}>
        A nice label
      </span>
    </Badge>
  ),
}

export const WithCustomBackgroundColor: Story = {
  args: {
    backgroundColor: '#CE2A36',
    size: 'normal',
  },
  render: (args) => (
    <Badge {...args}>
      <Money size={16} />A nice label
    </Badge>
  ),
}
