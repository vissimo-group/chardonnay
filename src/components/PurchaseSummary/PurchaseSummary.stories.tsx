import { Meta, StoryObj } from '@storybook/react'
import { PurchaseSummary } from './index'
import { PurchaseSummaryProps } from './type'

export default {
  title: 'Components/PurchaseSummary',
  component: PurchaseSummary,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the component',
    },
    totalitems: {
      control: 'text',
      description: 'Total number of items',
    },
    productsPrice: {
      control: 'number',
      description: 'Price of the products',
    },
    deliveryCost: {
      control: 'number',
      description: 'Price of the delivery Cost',
    },
    totalDiscount: {
      control: 'number',
      description: 'Total value of all discounts applied',
    },
    totalPrice: {
      control: 'Total value of the purchase summary',
      description: 'Total value of the purchase summary',
    },
    installmentPayment: {
      control: 'text',
      description: 'Number of installments and monthly amount',
    },
    discounts: {
      control: 'object',
      description: 'Array of discounts applied to the purchase',
      label: {
        options: ['Cupom de desconto', 'Cashback'],
        mapping: {
          'Cupom de desconto': {
            title: 'Cupom de desconto',
            price: '31,00',
          },
          Cashback: {
            title: 'Cashback',
            price: '11,50',
          },
        },
      },
    },
    deliveryValue: {
      control: 'text',
      description: 'Label for the delivery value',
    },
    productsLabel: {
      control: 'text',
      description: 'Label for the products value',
    },
    totalItems: {
      control: 'number',
      description: 'Total number of items',
    },
    labelItensText: {
      control: 'text',
      description: 'Label for the items',
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

export const WithDiscounts: Story = {
  name: 'WithDiscounts',
  args: {
    title: '',
    productsLabel: 'Valor dos produtos',
    deliveryValue: 'Valor da entrega',
    totalItems: 1,
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

export const WithoutDiscounts: Story = {
  args: {
    productsLabel: 'Valor dos produtos',
    deliveryValue: 'Valor da entrega',
    totalItems: 2,
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
