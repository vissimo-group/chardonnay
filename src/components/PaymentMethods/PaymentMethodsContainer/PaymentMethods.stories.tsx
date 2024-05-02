import { Meta, StoryObj } from '@storybook/react'
import {
  Card as CardIcon,
  Elo,
  Mastercard,
  Visa,
  Hipercard,
  Apple,
} from 'semillon'
import { Card } from '../../Card'
import { PaymentMethods } from './index'
import { PaymentMethodsInput as PaymentInput } from '../PaymentMethodsInput/index'
import { PaymentMethodsLabel as PaymentLabel } from '../PaymentMethodsLabel/index'
import { PaymentContainerInstallment as PaymentInstallment } from '../PaymentsMethodsInstallment'
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
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta<PaymentMethodsProps>

type Story = StoryObj<PaymentMethodsProps>

export const WithInstallment: Story = {
  args: {
    icon: <Visa size={36} color="#585757" />,
    installment: '1x de 59,85 sem juros',
    labelColor: '#585757',
  },
  render: (args) => (
    <Card theme="light" maxWidth="824px" borderRadius="8px">
      <PaymentMethods {...args}>
        <PaymentLabel labelColor={args.labelColor}>
          {args.icon}
          Visa **** 5490
        </PaymentLabel>
        <PaymentInstallment installment={args.installment}>
          <a href="/#">Alterar Parcelas</a>
        </PaymentInstallment>
        <PaymentInput />
      </PaymentMethods>
    </Card>
  ),
}

export const WithoutInstallment: Story = {
  args: {
    icon: <Visa size={36} color="#585757" />,
    installment: '1x de 59,85 sem juros',
  },
  render: (args) => (
    <Card theme="light" maxWidth="824px" borderRadius="8px">
      <PaymentMethods {...args}>
        <PaymentLabel labelColor="#585757">
          {args.icon}
          Visa **** 5490
        </PaymentLabel>
        <PaymentInput />
      </PaymentMethods>
    </Card>
  ),
}

export const WithoutIcon: Story = {
  args: {
    installment: '1x de 59,85 sem juros',
  },
  render: (args) => (
    <Card theme="light" maxWidth="824px" borderRadius="8px">
      <PaymentMethods {...args}>
        <PaymentLabel labelColor="#585757">Visa **** 5490</PaymentLabel>
        <PaymentInput />
      </PaymentMethods>
    </Card>
  ),
}
