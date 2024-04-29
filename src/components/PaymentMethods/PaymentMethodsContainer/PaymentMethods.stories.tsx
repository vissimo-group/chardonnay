import { Meta, StoryObj } from '@storybook/react'
import { Card, Elo, Mastercard, Visa, Hipercard, Apple } from 'semillon'
import { PaymentMethods } from './index'
import { PaymentMethodsProps } from './type'

export default {
  title: 'Components/PaymentMethods',
  component: PaymentMethods,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'number',
      description: 'id of the component',
    },
    title: {
      control: 'text',
      description: 'label that appears on top of the component',
    },
    icon: {
      control: {
        type: 'select',
      },
      description: 'icon that appears on the left side of the component',
      options: ['Visa', 'Mastercard', 'Elo', 'Hipercard', 'Apple'],
      mapping: {
        Visa: <Visa size={36} color="#01326F" />,
        Mastercard: <Mastercard size={36} color="#01326F" />,
        Hipercard: <Hipercard size={36} color="#B3131B" />,
        Elo: <Elo size={36} color="#000000" />,
        Apple: <Apple size={36} color="#1A1919" />,
      },
    },
    label: {
      control: 'text',
      description: 'label that appears on the right side of the component',
    },
    installment: {
      control: 'text',
      description:
        'installment that appears on the right side of the component',
    },
    isNewCard: {
      control: 'boolean',
      description: 'if the card is new or not',
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta<PaymentMethodsProps>

type Story = StoryObj<PaymentMethodsProps>

export const Default: Story = {
  args: {
    id: 1,
    icon: <Card size={36} color="#585757" />,
  },
  render: (args) => (
    <PaymentMethods {...args}>
      <a href="/#">Alterar parcelas</a>
    </PaymentMethods>
  ),
}

export const WithInstallment: Story = {
  args: {
    id: 1,
    icon: <Card size={36} color="#585757" />,
    installment: '1x de 59,85 sem juros',
  },
  render: (args) => (
    <PaymentMethods {...args}>
      <a href="/#">Alterar parcelas</a>
    </PaymentMethods>
  ),
}
