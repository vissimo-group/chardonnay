import { Meta } from '@storybook/react'
import React, { useState } from 'react'
import SelectAddress from '../components/CardAddress/Select'

interface CardAddressProps {
  theme?: 'light' | 'dark'
  checked?: boolean
  typeAddress: string
  address: string
  postcode: string
  complement: string
}

export default {
  title: 'Components/Card Address/Select',
  component: SelectAddress,
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
    <SelectAddress
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

export const SelectAddressLight = (args: CardAddressProps) => (
  <Template {...args} />
)
SelectAddressLight.args = {
  theme: 'light',
  typeAddress: 'Casa',
  address: 'Rua Pires da Mota, 974 - Aclimação, São Paulo - SP',
  postcode: '29172-009',
  complement: '15º andar - Escritório Evino',
}

export const SelectAddressDark = (args: CardAddressProps) => (
  <Template {...args} />
)
SelectAddressDark.args = {
  theme: 'dark',
  checked: true,
  typeAddress: 'Casa',
  address: 'Rua jhon, 000 - Aclimação, Espirito Santo - ES',
  postcode: '00000-000',
  complement: 'Apto 41 - Ao lado do cartório',
}
