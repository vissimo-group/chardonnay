import { Meta, StoryObj } from '@storybook/react'
import { BillingAddressProps } from './type'
import { BillingAddress } from './index'

export default {
  title: 'Components/BillingAddress',
  component: BillingAddress,
  tags: ['autodocs'],
  argTypes: {
    address: {
      control: 'text',
    },
    postcode: {
      control: 'text',
    },
    complement: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
  },
} as Meta<BillingAddressProps>

type Story = StoryObj<BillingAddressProps>

export const BillingAddressNotChecked: Story = {
  args: {
    label: 'Endereço de cobrança',
    address: 'Rua Bela Cintra, 986',
    postcode: 'CEP 01415-000',
    complement: '15° andar, Consolação, São Paulo - SP',
    checked: false,
    labelLink: 'Alterar',
  },
  render: function Render(args: BillingAddressProps) {
    return <BillingAddress {...args} />
  },
}

export const BillingAddressDefault: Story = {
  args: {
    label: 'Endereço de cobrança',
    address: 'Rua Bela Cintra, 986',
    postcode: 'CEP 01415-000',
    complement: '15° andar, Consolação, São Paulo - SP',
    checked: true,
    labelLink: 'Alterar',
  },
  render: function Render(args: BillingAddressProps) {
    return <BillingAddress {...args} />
  },
}
