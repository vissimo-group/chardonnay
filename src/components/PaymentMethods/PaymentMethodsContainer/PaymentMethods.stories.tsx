import { Meta, StoryObj } from '@storybook/react'
import {
  Card as CardIcon,
  Elo,
  Mastercard,
  Visa,
  Hipercard,
  Apple,
} from 'semillon'

import { PaymentMethods } from './index'
import { PaymentContainerInstallment as PaymentInstallment } from '../PaymentsMethodsInstallment'
import { PaymentMethodsProps } from './type'

import { PaymentMethodsLabel } from '../PaymentMethodsLabel'

import { Card } from '../../Card'

export default {
  title: 'Components/PaymentMethods',
  component: PaymentMethods,
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
    labelColor: {
      control: 'color',
      defaultValue: '#1c1c1c',
      description:
        'color of the label, if not passed, the default color is #1c1c1c',
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
} as Meta<PaymentMethodsProps>

type Story = StoryObj<PaymentMethodsProps>

export const teste: StoryType = (args) => (
  <Card style={{ flexDirection: 'column', borderRadius: '8px' }}>
    {Array(3)
      .fill('')
      .map((_, index, array) => (
        <div>
          <PaymentMethods {...args}>
            <PaymentMethodsLabel
              label={args.label}
              labelColor={args.labelColor}
              icon={args.icon}
            />
            <PaymentInstallment installment={args.installment} key={index}>
              <a href="/#">Alterar</a>
            </PaymentInstallment>
          </PaymentMethods>

          {index !== array.length - 1 && (
            <div>
              <hr style={{ border: '1px solid #E7E7E7', width: '100%' }} />
            </div>
          )}
        </div>
      ))}
  </Card>
)

export const WithInstallment: Story = {
  args: {
    icon: <Visa size={36} color="#585757" />,
    installment: '1x de 59,85 sem juros',
    labelColor: '#585757',
    label: 'Visa **** 5490',
  },
  render: (args) => (
    <PaymentMethods {...args}>
      {args.installment && (
        <PaymentInstallment installment={args.installment}>
          <a href="/#">Alterar Parcelas</a>
        </PaymentInstallment>
      )}
    </PaymentMethods>
  ),
}

teste.args = {
  icon: <Visa size={36} color="#585757" />,
  installment: '1x de 59,85 sem juros',
  labelColor: '#585757',
  label: 'Visa **** 5490',
}

export const WithoutInstallment: Story = {
  args: {
    icon: <Visa size={36} color="#585757" />,
    labelColor: '#585757',
    label: 'Visa **** 5490',
  },
  render: (args) => <PaymentMethods {...args} />,
}

export const WithoutIcon: Story = {
  args: {
    installment: '1x de 59,85 sem juros',
    label: 'Visa **** 5490',
    labelColor: '#585757',
  },
  render: (args) => <PaymentMethods {...args} />,
}
