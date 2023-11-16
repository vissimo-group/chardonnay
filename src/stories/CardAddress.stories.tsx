import { Meta } from '@storybook/react'
import React, { useState } from 'react'
import { CardAddress } from '../components'

interface CardAddressProps {
  theme?: 'light' | 'dark'
  checked?: boolean
  typeAddress: string
  address: string
  postcode: string
  complement: string
}

export default {
  title: 'Components/Card Address',
  component: CardAddress,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      defaultValue: 'light',
    },
    checked: { control: 'boolean' },
    typeAddress: { control: 'text' },
    address: { control: 'text' },
    postcode: { control: 'text' },
    complement: { control: 'text' },
  },
} as Meta<CardAddressProps>

const Template = ({
  typeAddress,
  address,
  postcode,
  complement,
  ...args
}: CardAddressProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleRadioChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <CardAddress
      checked={isChecked}
      typeAddress={typeAddress}
      address={address}
      postcode={postcode}
      complement={complement}
      onClick={handleRadioChange}
      {...args}
    />
  )
}

export const CardAddressLight = (args) => <Template {...args} />
CardAddressLight.args = {
  theme: 'light',
  typeAddress: 'Casa',
  address: 'Rua Pires da Mota, 974 - Aclimação, São Paulo - SP',
  postcode: '29172-009',
  complement: 'Complemento',
}

export const CardAddressDark = (args) => <Template {...args} />
CardAddressDark.args = {
  theme: 'dark',
  checked: true,
  typeAddress: 'Casa',
  address: 'Rua jhon, 000 - Aclimação, Espirito Santo - ES',
  postcode: '00000-000',
  complement: 'Complemento',
}
