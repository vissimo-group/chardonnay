import { Meta, StoryObj } from '@storybook/react'
import { Alemanha, Argentina } from 'semillon'
import { CreditCard } from './index'
import { CreditCardProps } from './type'

export default {
  title: 'Components/CreditCard',
  component: CreditCard,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of card holder',
    },
    date: {
      control: 'text',
      description: 'Month and year of card validity',
    },
    isFlipped: {
      control: 'boolean',
      description:
        'Value to control the front and back of the card to be displayed',
    },
    children: {
      control: '',
      description:
        'HTML element that can be inserted within the context in which it is available',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{ padding: '16px', backgroundColor: '#FFF', height: '390px' }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<CreditCardProps>

type Story = StoryObj<CreditCardProps>

export const FrontCreditCard: Story = {
  name: 'FrontCreditCard',
  args: {
    name: 'Jhon Smith',
    date: '05/27',
    isFlipped: false,
    CardBanner: <Alemanha size={24} />,
    logoCard: <Argentina size={24} />,
    backgroundCardColor: '#866EAF',
  },
  render: (args) => <CreditCard {...args}>5114 7706 9586 0783</CreditCard>,
}

export const BackCreditCard: Story = {
  name: 'BackCreditCard',
  args: {
    isFlipped: true,
    backgroundCardColor: '#866EAF',
  },
  render: (args) => <CreditCard {...args} />,
}

export const NewCreditCard: Story = {
  name: 'NewCreditCard',
  args: {
    name: 'Nome Completo',
    date: 'MM/AA',
    isFlipped: false,
    backgroundCardColor: '#969696',
    newCreditCard: true,
  },
  render: (args) => <CreditCard {...args}>**** **** **** ****</CreditCard>,
}
