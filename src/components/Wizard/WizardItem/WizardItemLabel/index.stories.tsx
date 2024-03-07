import type { Meta, StoryObj } from '@storybook/react'
import { WizardItemLabel } from '.'

const meta: Meta<typeof WizardItemLabel> = {
  component: WizardItemLabel,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'Label text content.',
    },
    inactive: {
      control: { type: 'boolean' },
      description:
        'Inactive state. Equivalent to "INACTIVE" state of WizardItemPoint component.',
    },
    bold: {
      control: { type: 'boolean' },
      description: 'If true, add font-weight bold to the label.',
    },
    customFontSize: {
      control: { type: 'text' },
      description:
        'Custom font-size for the label. Fixed or relative units as "px" or "rem".',
    },
  },
}

export default meta
type Story = StoryObj<typeof WizardItemLabel>

export const Active: Story = {
  args: {
    content: 'Product',
    inactive: false,
    bold: false,
    customFontSize: '',
  },
  render: (args) => (
    <WizardItemLabel
      content={args.content}
      inactive={args.inactive}
      bold={args.bold}
      customFontSize={args.customFontSize}
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

export const WithCustomFontSize: Story = {
  args: {
    content: 'Smaller font',
    inactive: false,
    bold: false,
    customFontSize: '0.75rem',
  },
  render: (args) => (
    <WizardItemLabel
      content={args.content}
      inactive={args.inactive}
      bold={args.bold}
      customFontSize={args.customFontSize}
    />
  ),
}
