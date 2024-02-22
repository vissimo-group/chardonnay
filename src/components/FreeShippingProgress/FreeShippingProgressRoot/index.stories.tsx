import type { Meta, StoryObj } from '@storybook/react'
import { Delivery } from 'semillon'
import * as FreeShippingProgress from '../index'
import { FormattedShippingMessage } from '../FormattedShippingMessage'

const freeShippingMessage = 'Faltam R$17,90 para frete grátis.'

const withLabel = 'Faltam R$17,90 para frete grátis.'

const withFormattedLabel = (
  <FormattedShippingMessage message={freeShippingMessage} />
)

const withLabelAndBar = (
  <>
    <span>Faltam R$17,90 para frete grátis.</span>
    <FreeShippingProgress.Bar progress={75} />
  </>
)

const withLabelBarAndIcon = (
  <>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Delivery color="#007da6" size={32} />
      <span>Faltam R$17,90 para frete grátis.</span>
    </div>

    <FreeShippingProgress.Bar progress={75} />
  </>
)

const withLabelBarAndIconComplete = (
  <>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Delivery color="#00a650" size={32} />
      <span>Você alcançou frete grátis.</span>
    </div>

    <FreeShippingProgress.Bar progress={100} />
  </>
)

const meta: Meta<typeof FreeShippingProgress.Root> = {
  component: FreeShippingProgress.Root,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'select' },
      options: [
        'WithLabel',
        'WithFormattedLabel',
        'WithLabelAndBar',
        'WithLabelBarAndIcon',
      ],
      mapping: {
        WithLabel: withLabel,
        WithFormattedLabel: withFormattedLabel,
        WithLabelAndBar: withLabelAndBar,
        WithLabelBarAndIcon: withLabelBarAndIcon,
      },
      description:
        'You can add "FreeShippingProgress" with or without a label. The "FreeShippingProgressRoot" component will render all children\'s on flex column mode.',
    },
  },
}

export default meta
type Story = StoryObj<typeof FreeShippingProgress.Root>

export const WithLabel: Story = {
  args: { children: withLabel },
  render: (args) => (
    <FreeShippingProgress.Root>{args.children}</FreeShippingProgress.Root>
  ),
}

export const WithFormmatedLabel: Story = {
  args: { children: withFormattedLabel },
  render: (args) => (
    <FreeShippingProgress.Root>{args.children}</FreeShippingProgress.Root>
  ),
}

export const WithLabelAndBar: Story = {
  args: { children: withLabelAndBar },
  render: (args) => (
    <FreeShippingProgress.Root>{args.children}</FreeShippingProgress.Root>
  ),
}

export const WithLabelBarAndIcon: Story = {
  args: { children: withLabelBarAndIcon },
  render: (args) => (
    <FreeShippingProgress.Root>{args.children}</FreeShippingProgress.Root>
  ),
}

export const WithLabelBarAndIconComplete: Story = {
  args: { children: withLabelBarAndIconComplete },
  render: (args) => (
    <FreeShippingProgress.Root>{args.children}</FreeShippingProgress.Root>
  ),
}
