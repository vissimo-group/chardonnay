import type { Meta, StoryObj } from '@storybook/react'
import { WizardProgressBar } from '.'
import { WizardItemPoint } from '../WizardItem/WizardItemPoint'
import { WizardItemLabel } from '../WizardItem/WizardItemLabel'
import { WizardItemRoot } from '../WizardItem/WizardItemRoot'

const wizardPoints = (
  <>
    <WizardItemPoint variant="ACTIVE">1</WizardItemPoint>
    <WizardItemPoint variant="ACTIVE">2</WizardItemPoint>
    <WizardItemPoint>3</WizardItemPoint>
  </>
)

const wizardPointsWithLabels = (
  <>
    <WizardItemRoot>
      <WizardItemPoint variant="ACTIVE">1</WizardItemPoint>
      <WizardItemLabel content="Products" />
    </WizardItemRoot>

    <WizardItemRoot>
      <WizardItemPoint variant="ACTIVE">2</WizardItemPoint>
      <WizardItemLabel content="Delivery" bold />
    </WizardItemRoot>

    <WizardItemRoot>
      <WizardItemPoint>3</WizardItemPoint>
      <WizardItemLabel content="Payment" />
    </WizardItemRoot>
  </>
)

const meta: Meta<typeof WizardProgressBar> = {
  component: WizardProgressBar,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      type: 'number',
      description:
        'Percentage of progress as a number from "0" to "100". Not required property, default value "0"',
    },
    children: {
      control: { type: 'select' },
      options: ['WizardPoints', 'None'],
      mapping: {
        WizardPoints: wizardPoints,
        None: null,
      },
      description:
        'You can add "Wizard items" to be displayed on the progress bar. All items will be distributed side by side respecting the "space-between" css property. Not required property.',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Error variant, default value false.',
    },
    customColor: {
      control: { type: 'color' },
      description:
        'Custom color for the progress bar. Not required property. Overrides default colors, for example: error state color.',
    },
  },
}

export default meta
type Story = StoryObj<typeof WizardProgressBar>

export const WithPoints: Story = {
  args: { progress: 75, children: wizardPoints, customColor: '' },
  render: (args) => (
    <WizardProgressBar
      progress={args.progress}
      error={args.error}
      customColor={args.customColor}
    >
      {args.children}
    </WizardProgressBar>
  ),
}

export const WithPointsAndLabels: Story = {
  args: { progress: 75, children: wizardPointsWithLabels },
  render: (args) => (
    <WizardProgressBar progress={args.progress}>
      {args.children}
    </WizardProgressBar>
  ),
}

export const WithoutPoints: Story = {
  args: { progress: 75 },
  render: (args) => <WizardProgressBar progress={args.progress} />,
}

export const ErrorWithoutPoints: Story = {
  args: { progress: 75 },
  render: (args) => <WizardProgressBar progress={args.progress} error />,
}

export const WithCustomColor: Story = {
  args: { progress: 75, customColor: '#9573D5' },
  render: (args) => (
    <WizardProgressBar
      progress={args.progress}
      customColor={args.customColor}
    />
  ),
}
