import { Meta } from '@storybook/react'
import React, { useState } from 'react'
import SelectAddressComponent, {
  CardAddressProps,
} from '../components/CardAddress/Select'

export default {
  title: 'Components/Card Address/Select',
  component: SelectAddressComponent,
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

const SelectAddress = ({
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
    <SelectAddressComponent
      checked={isChecked}
      typeAddress={typeAddress}
      address={address}
      postcode={postcode}
      complement={complement}
      onClick={handleRadioChange}
      isEditable
      onEdit={() => null}
      {...args}
    />
  )
}

export const SelectAddressLight = (args: CardAddressProps) => (
  <SelectAddress {...args} />
)

SelectAddressLight.args = {
  theme: 'light',
  typeAddress: 'Casa',
  address: 'Rua Pires da Mota, 974 - Aclimação, São Paulo - SP',
  postcode: '29172-009',
  complement: '15º andar - Escritório Evino',
}

export const SelectAddressDark = (args: CardAddressProps) => (
  <SelectAddress {...args} />
)

SelectAddressDark.args = {
  theme: 'dark',
  checked: true,
  typeAddress: 'Casa',
  address: 'Rua jhon, 000 - Aclimação, Espirito Santo - ES',
  postcode: '00000-000',
  complement: 'Apto 41 - Ao lado do cartório',
}
