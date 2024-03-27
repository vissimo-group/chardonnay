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
      description: 'Address of the billing',
    },
    postcode: {
      control: 'text',
      description: 'Postcode of the billing',
    },
    complement: {
      control: 'text',
      description: 'Complement of the billing',
    },
    label: {
      control: 'text',
      description: 'Label of the component',
    },
  },
} as Meta<BillingAddressProps>

type Story = StoryObj<BillingAddressProps>

export const BillingAddressDefault: Story = {
  args: {
    label: 'Endereço de cobrança',
    address: 'Rua Bela Cintra, 986',
    postcode: 'CEP 01415-000',
    complement: '15° andar, Consolação, São Paulo - SP',
    labelLink: 'Alterar',
  },
  render: function Render(args: BillingAddressProps) {
    return <BillingAddress {...args} />
  },
}
