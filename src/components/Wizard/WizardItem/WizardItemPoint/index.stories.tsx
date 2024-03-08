import type { Meta, StoryObj } from '@storybook/react'
import { WizardItemPoint } from '.'

const meta: Meta<typeof WizardItemPoint> = {
  component: WizardItemPoint,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['ACTIVE', 'INACTIVE', 'ERROR'],
      description:
        'Available variants "active", "inactive" and "error". Choose the most suitable one according to progress status. Default value "inactive".',
    },
    customColor: {
      control: { type: 'color' },
      description:
        'Custom color for the progress bar. Not required property. Overrides default colors, for example: error state color.',
    },
  },
}

const checkIcon = (color = 'white') => (
  <svg
    width="13"
    height="9"
    viewBox="0 0 13 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.92598 8.49432C3.92006 8.48877 3.91422 8.48311 3.90844 8.47734L1.0683 5.6372C0.77541 5.34431 0.77541 4.86943 1.0683 4.57654C1.3612 4.28364 1.83607 4.28364 2.12896 4.57654L4.47358 6.92116L10.9319 0.462834C11.2248 0.169941 11.6997 0.169941 11.9926 0.462834C12.2854 0.755727 12.2854 1.2306 11.9926 1.52349L5.0039 8.51216C4.71101 8.80505 4.23613 8.80505 3.94324 8.51216C3.93737 8.50628 3.93161 8.50034 3.92598 8.49432Z"
      fill={color}
    />
  </svg>
)

export default meta
type Story = StoryObj<typeof WizardItemPoint>

export const Active: Story = {
  args: { variant: 'ACTIVE', customColor: '' },
  render: (args) => (
    <WizardItemPoint variant={args.variant} customColor={args.customColor}>
      1
    </WizardItemPoint>
  ),
}

export const ActiveWithIcon: Story = {
  args: { variant: 'ACTIVE' },
  render: (args) => (
    <WizardItemPoint variant={args.variant}>{checkIcon()}</WizardItemPoint>
  ),
}

export const Inactive: Story = {
  args: { variant: 'INACTIVE' },
  render: (args) => <WizardItemPoint variant={args.variant}>1</WizardItemPoint>,
}

export const InactiveWithIcon: Story = {
  args: { variant: 'INACTIVE' },
  render: (args) => (
    <WizardItemPoint variant={args.variant}>
      {checkIcon('gray')}
    </WizardItemPoint>
  ),
}

export const Error: Story = {
  args: { variant: 'ERROR' },
  render: (args) => <WizardItemPoint variant={args.variant}>1</WizardItemPoint>,
}

export const ErrorWithIcon: Story = {
  args: { variant: 'ERROR' },
  render: (args) => (
    <WizardItemPoint variant={args.variant}>{checkIcon()}</WizardItemPoint>
  ),
}

export const WithCustomColor: Story = {
  args: { variant: 'ACTIVE', customColor: '#9573D5' },
  render: (args) => (
    <WizardItemPoint variant={args.variant} customColor={args.customColor}>
      1
    </WizardItemPoint>
  ),
}
