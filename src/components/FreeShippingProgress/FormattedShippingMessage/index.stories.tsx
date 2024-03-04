import type { Meta, StoryObj } from '@storybook/react'
import { FormattedShippingMessage } from '.'

const meta: Meta<typeof FormattedShippingMessage> = {
  component: FormattedShippingMessage,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: { type: 'text' },
      description:
        'The text will be formatted by adding a colored "strong" tag to the shipping value. (pattern: R$999.99 or R$999,99) A span tag is used to embrace the rest of the message, if necessary.',
    },
  },
}

export default meta
type Story = StoryObj<typeof FormattedShippingMessage>

export const WithMoneyValue: Story = {
  args: { message: 'Faltam R$17,90 para frete grátis.' },
  render: (args) => <FormattedShippingMessage {...args} />,
}

export const WithMoneyValueWithDot: Story = {
  args: { message: 'Faltam R$999.90 para frete grátis.' },
  render: (args) => <FormattedShippingMessage {...args} />,
}

export const WithMoneyValueOnly: Story = {
  args: { message: 'R$698.10' },
  render: (args) => <FormattedShippingMessage {...args} />,
}

export const WithoutMoneyValue: Story = {
  args: { message: 'Você alcançou frete grátis!' },
  render: (args) => <FormattedShippingMessage {...args} />,
}
