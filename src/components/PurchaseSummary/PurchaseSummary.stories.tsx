import { Meta, StoryObj } from '@storybook/react'
import { PurchaseSummary } from './index'
import { PurchaseSummaryProps } from './type'

export default {
  title: 'Components/PurchaseSummary',
  component: PurchaseSummary,
  tags: ['autodocs'],
  argTypes: {
    description: {
      control: 'text',
    },
    totalitems: {
      control: 'text',
    },
    productsPrice: {
      control: 'number',
    },
    deliveryCost: {
      control: 'number',
    },
    totalDiscount: {
      control: 'number',
    },
    totalPrice: {
      control: 'number',
    },
    installmentPayment: {
      control: 'text',
    },
    discounts: {
      control: 'object',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<PurchaseSummaryProps>

type Story = StoryObj<PurchaseSummaryProps>

export const EmptyDiscounts: Story = {
  args: {
    productsLabel: 'Valor dos produtos',
    deliveryValue: 'Valor da entrega',
    totalitems: 2,
    labelItensText: 'itens',
    productsPrice: 178.6,
    deliveryCost: 15.0,
    totalDiscount: 29.35,
    totalPrice: 90,
    installmentPayment: '2x de 59,85 sem juros',
    discounts: [],
  },
  render: (args) => <PurchaseSummary {...args} />,
}

export const Default: Story = {
  name: 'Default',
  args: {
    title: '',
    productsLabel: 'Valor dos produtos',
    deliveryValue: 'Valor da entrega',
    totalitems: 1,
    labelItensText: 'item',
    productsPrice: 178.6,
    deliveryCost: 15.0,
    totalDiscount: 29.35,
    totalPrice: 90,
    installmentPayment: '2x de 59,85 sem juros',
    discounts: [
      {
        id: 1,
        title: 'Cupom de desconto',
        price: '31,00',
      },
      {
        id: 2,
        title: 'Cashback',
        price: '11,50',
      },
    ],
  },
  render: (args) => <PurchaseSummary {...args} />,
}
