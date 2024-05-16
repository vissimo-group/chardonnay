import { Meta, StoryObj } from '@storybook/react'
import {
  Apple,
  Elo,
  Hipercard,
  Mastercard,
  Visa,
  Card as CardIcon,
} from 'semillon'
import { NewPaymentMethodsProps } from './type'
import { Radio } from '../Radio'
import * as PaymentMethodsContainer from './index'
import { Text } from '../Text'

export default {
  title: 'Components/NewPaymentMethods',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      description: 'icon that appears on the left side of the component',
      options: ['Visa', 'Mastercard', 'Elo', 'Hipercard', 'Apple', 'CardIcon'],
      mapping: {
        Visa: <Visa size={36} color="#01326F" />,
        Mastercard: <Mastercard size={36} color="#01326F" />,
        Hipercard: <Hipercard size={36} color="#B3131B" />,
        Elo: <Elo size={36} color="#000000" />,
        Apple: <Apple size={36} color="#1A1919" />,
        CardIcon: <CardIcon size={36} color="#585757" />,
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
  },
} as Meta<NewPaymentMethodsProps>

type Story = StoryObj<NewPaymentMethodsProps>

export const WithInstallment: Story = {
  args: {
    installment: '1x de 59,85 sem juros',
    label: '4115 **** 1989',
    icon: <Visa size={36} color="#01326F" />,
  },
  render: (args) => (
    <PaymentMethodsContainer.Root>
      <PaymentMethodsContainer.Content>
        <PaymentMethodsContainer.Title>
          {args.icon}
          {args.label}
        </PaymentMethodsContainer.Title>

        <PaymentMethodsContainer.Items>
          <PaymentMethodsContainer.SubItems>
            <Text>{args.installment}</Text>
            <a href="/#">Alterar</a>
          </PaymentMethodsContainer.SubItems>
          <div>
            <Radio theme="light" />
          </div>
        </PaymentMethodsContainer.Items>
      </PaymentMethodsContainer.Content>
    </PaymentMethodsContainer.Root>
  ),
}

export const WithoutInstallment: Story = {
  args: {
    label: '4115 **** 1989',
    icon: <Visa size={36} color="#01326F" />,
  },
  render: (args) => (
    <PaymentMethodsContainer.Root>
      <PaymentMethodsContainer.Content>
        <PaymentMethodsContainer.Title>
          {args.icon}
          {args.label}
        </PaymentMethodsContainer.Title>

        <PaymentMethodsContainer.Items>
          <PaymentMethodsContainer.SubItems>
            <Text>{args.installment}</Text>
          </PaymentMethodsContainer.SubItems>
          <div>
            <Radio theme="light" />
          </div>
        </PaymentMethodsContainer.Items>
      </PaymentMethodsContainer.Content>
    </PaymentMethodsContainer.Root>
  ),
}

export const WithoutIcon: Story = {
  args: {
    installment: '1x de 59,85 sem juros',
    label: '4115 **** 1989',
  },
  render: (args) => (
    <PaymentMethodsContainer.Root>
      <PaymentMethodsContainer.Content>
        <PaymentMethodsContainer.Title>
          {args.icon}
          {args.label}
        </PaymentMethodsContainer.Title>

        <PaymentMethodsContainer.Items>
          <PaymentMethodsContainer.SubItems>
            <Text>{args.installment}</Text>
            <a href="/#">Alterar</a>
          </PaymentMethodsContainer.SubItems>
          <div>
            <Radio theme="light" />
          </div>
        </PaymentMethodsContainer.Items>
      </PaymentMethodsContainer.Content>
    </PaymentMethodsContainer.Root>
  ),
}

export const WithoutText: Story = {
  args: {
    icon: <Visa size={36} color="#01326F" />,
  },
  render: (args) => (
    <PaymentMethodsContainer.Root>
      <PaymentMethodsContainer.Content>
        <PaymentMethodsContainer.Title>
          {args.icon}
          {args.label}
        </PaymentMethodsContainer.Title>

        <PaymentMethodsContainer.Items>
          <Text>{args.installment}</Text>
          <div>
            <Radio theme="light" />
          </div>
        </PaymentMethodsContainer.Items>
      </PaymentMethodsContainer.Content>
    </PaymentMethodsContainer.Root>
  ),
}
