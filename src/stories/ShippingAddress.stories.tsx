import { Meta } from '@storybook/react'
import React from 'react'
import ShippingAddress from '../components/CardAddress/Shipping'

export default {
  title: 'Components/Card Address/Shipping',
  component: ShippingAddress,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<null>

export const ShippingAddressLight = (args) => <ShippingAddress />

export const ShippingAddressDark = (args) => <ShippingAddress theme="dark" />
