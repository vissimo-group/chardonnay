import type { Meta, StoryObj } from '@storybook/react'
import { WizardItemLabel } from '.'

const meta: Meta<typeof WizardItemLabel> = {
  component: WizardItemLabel,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'Label content',
    },
    inactive: {
      control: { type: 'boolean' },
      description: 'Inactive label',
    },
    bold: {
      control: { type: 'boolean' },
      description: 'Bold label',
    },
  },
}

export default meta
type Story = StoryObj<typeof WizardItemLabel>

export const Active: Story = {
  args: { content: 'Product', inactive: false, bold: false },
  render: (args) => (
    <WizardItemLabel
      content={args.content}
      inactive={args.inactive}
      bold={args.bold}
    />
  ),
}

export const Bold: Story = {
  args: { content: 'Product', inactive: false, bold: true },
  render: (args) => (
    <WizardItemLabel
      content={args.content}
      inactive={args.inactive}
      bold={args.bold}
    />
  ),
}

export const Inactive: Story = {
  args: { content: 'Product', inactive: true, bold: false },
  render: (args) => (
    <WizardItemLabel
      content={args.content}
      inactive={args.inactive}
      bold={args.bold}
    />
  ),
}
