import { Meta, StoryObj } from '@storybook/react'
import { Barcode, Card, CardCheck, CardPending, Apple } from 'semillon'
import { PaymentMethods } from './index'
import { PaymentMethodsProps } from './type'

export default {
  title: 'Components/PaymentMethods',
  component: PaymentMethods,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'label that appears on top of the component',
    },
    paymentData: {
      control: {
        type: 'object',
      },
      description: 'List of payment data objects',
      defaultValue: [
        {
          id: 1,
          icon: <Card size={36} color="#585757" />,
          label: 'VISA **** 1352',
          installment: '2x de 59,85 sem juros',
        },
      ],
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
    title: 'Cartão de crédito',
    paymentData: [
      {
        id: 1,
        icon: <Card size={36} color="#585757" />,
        label: 'VISA **** 1352',
        installment: '2x de 59,85 sem juros',
      },
      {
        id: 2,
        icon: <Card size={36} color="#585757" />,
        label: 'MASTER **** 5450',
        installment: '2x de 59,85 sem juros',
      },
      {
        id: 3,
        icon: <CardCheck size={36} color="#585757" />,
        label: 'MASTER **** 1298',
        installment: '',
      },
      {
        id: 4,
        icon: <Card size={20} color="#585757" />,
        label: 'Novo Cartão de crédito',
        isNewCard: true,
        installment: '',
      },
    ],
  },
  render: (args) => (
    <PaymentMethods {...args}>
      <a href="/#">Alterar parcelas</a>
    </PaymentMethods>
  ),
}

export const PaymentOptions: Story = {
  args: {
    title: 'Outras formas de pagamento',
    paymentData: [
      {
        id: 5,
        icon: <CardPending size={17} color="#585757" />,
        label: 'Pix',
        isNewCard: false,
      },
      {
        id: 6,
        icon: <Apple size={17} color="#585757" />,
        label: 'Apple Pay',
        isNewCard: false,
      },
      {
        id: 7,
        icon: <Barcode size={17} color="#585757" />,
        label: 'Boleto bancário',
        isNewCard: false,
      },
    ],
  },
  render: (args) => (
    <PaymentMethods {...args}>Outras formas de pagamento</PaymentMethods>
  ),
}
