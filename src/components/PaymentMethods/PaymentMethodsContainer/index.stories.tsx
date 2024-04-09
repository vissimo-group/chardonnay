import type { Meta, StoryObj } from '@storybook/react'
import {
  Barcode,
  Card,
  CardCheck,
  CardPending,
  CardRefresh,
  Apple,
} from 'semillon'
import {
  PaymentMethodsContainerItems,
  PaymentMethodsContainerNewCreditCard,
} from './style'
import { PaymentMethodsContainer } from '.'
import { PaymentMethodsInput as PaymentInput } from '../PaymentMethodsInput'
import { PaymentMethodsLabel as PaymentLabel } from '../PaymentMethodsLabel'
import { Line } from '../../Line'

const meta: Meta<typeof PaymentMethodsContainer> = {
  component: PaymentMethodsContainer,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the container',
      control: {
        type: 'node',
      },
    },
    installment: {
      description: 'The installment value',
      control: {
        type: 'number',
      },
    },
    link: {
      description: 'The link to the installment',
      control: {
        type: 'string',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof PaymentMethodsContainer>

export const creditCardPayment: Story = {
  render: (args) => {
    return (
      <PaymentMethodsContainer
        {...args}
        installment="2x de 59,85 sem juros"
        link="Alterar parcelas"
      >
        <PaymentMethodsContainerItems>
          <PaymentInput />
          <PaymentLabel icon={<CardCheck size={17} color="#585757" />}>
            MASTER **** 5450
          </PaymentLabel>
        </PaymentMethodsContainerItems>
        <Line theme="dark" />

        <PaymentMethodsContainerItems>
          <PaymentInput />
          <PaymentLabel icon={<CardPending size={17} color="#585757" />}>
            VISA **** 1352
          </PaymentLabel>
        </PaymentMethodsContainerItems>
        <Line theme="dark" />

        <PaymentMethodsContainerItems>
          <PaymentInput />
          <PaymentLabel icon={<CardRefresh size={17} color="#585757" />}>
            MASTER **** 1298
          </PaymentLabel>
        </PaymentMethodsContainerItems>
        <Line theme="dark" />

        <PaymentMethodsContainerItems>
          <PaymentInput />
          <PaymentLabel icon={<Card size={17} color="#585757" />}>
            <PaymentMethodsContainerNewCreditCard>
              Novo Cartão de crédito
            </PaymentMethodsContainerNewCreditCard>
          </PaymentLabel>
        </PaymentMethodsContainerItems>
        <Line theme="dark" />
      </PaymentMethodsContainer>
    )
  },
}

export const Default: Story = {
  render: (args) => {
    return (
      <PaymentMethodsContainer {...args}>
        <PaymentMethodsContainerItems>
          <PaymentInput />
          <PaymentLabel icon={<Barcode size={17} color="#585757" />}>
            PIX
          </PaymentLabel>
        </PaymentMethodsContainerItems>
        <Line theme="dark" />

        <PaymentMethodsContainerItems>
          <PaymentInput />
          <PaymentLabel icon={<Apple size={17} color="#585757" />}>
            Apple Pay
          </PaymentLabel>
        </PaymentMethodsContainerItems>
        <Line theme="dark" />

        <PaymentMethodsContainerItems>
          <PaymentInput />
          <PaymentLabel icon={<Barcode size={17} color="#585757" />}>
            Boleto bancário
          </PaymentLabel>
        </PaymentMethodsContainerItems>
        <Line theme="dark" />
      </PaymentMethodsContainer>
    )
  },
}
