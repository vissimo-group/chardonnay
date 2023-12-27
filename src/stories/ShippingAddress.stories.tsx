import { Meta } from '@storybook/react'
import React from 'react'
import ShippingAddress, {
  ShippingAddressProps,
} from '../components/CardAddress/Shipping'

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

export const ShippingAddressLight = (args: ShippingAddressProps) => (
  <ShippingAddress {...args} />
)

export const ShippingAddressDark = (args: ShippingAddressProps) => (
  <ShippingAddress {...args} />
)
