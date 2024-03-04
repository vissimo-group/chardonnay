import type { Meta, StoryObj } from '@storybook/react'
import { FreeShippingProgressBar } from '.'

const meta: Meta<typeof FreeShippingProgressBar> = {
  component: FreeShippingProgressBar,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      type: 'number',
      description:
        'Percentage of progress as a number from "0" to "100". Not required property, default value "0". When at 100% the bar turns green.',
    },
  },
}

export default meta
type Story = StoryObj<typeof FreeShippingProgressBar>

export const InProgress: Story = {
  args: { progress: 75 },
  render: (args) => <FreeShippingProgressBar progress={args.progress} />,
}

export const Complete: Story = {
  args: { progress: 100 },
  render: (args) => <FreeShippingProgressBar progress={args.progress} />,
}
