import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import ShippingAddress, { ShippingAddressProps } from './index'
import { ThemeType } from '../../../theme'

export default {
  title: 'Components/Card Address/Shipping',
  component: ShippingAddress,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      defaultValue: 'light',
    },
    typeAddress: { control: 'text' },
    address: { control: 'text' },
    deadline: { control: 'text' },
    name: { control: 'text' },
    tel: { control: 'text' },
  },
} as Meta<ShippingAddressProps>

type Story = StoryObj<ShippingAddressProps & { theme: ThemeType }>

export const ShippingAddressDefault: Story = {
  args: {
    typeAddress: 'Casa',
    address:
      'Rua Bela Cintra, 986 - Escritório / Bairro Consolação - São Paulo, SP - CEP 01415-000',
    deadline: 'Até 18 de Dezembro',
    deliveryDeadlineLabel: 'Prazo de entrega: ',
    name: 'Giovanni Antony',
    tel: '(11) 99910 2030',
  },
  render: (args) => <ShippingAddress {...args} />,
}

export const ShippingAddressWithoutDeliveryDeadlineLabel: Story = {
  args: {
    typeAddress: 'Casa',
    address:
      'Rua Bela Cintra, 986 - Escritório / Bairro Consolação - São Paulo, SP - CEP 01415-000',
    deadline: 'Até 18 de Dezembro',
    name: 'Giovanni Antony',
    tel: '(11) 99910 2030',
  },
  render: (args) => <ShippingAddress {...args} />,
}

export const ShippingAddressWithoutName: Story = {
  args: {
    typeAddress: 'Casa',
    address:
      'Rua Bela Cintra, 986 - Escritório / Bairro Consolação - São Paulo, SP - CEP 01415-000',
    deadline: 'Até 18 de Dezembro',
    tel: '(11) 99910 2030',
  },
  render: (args) => <ShippingAddress {...args} />,
}
