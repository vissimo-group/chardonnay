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
    nameColor: {
      control: 'color',
      description: 'Color of card holder name',
    },
    date: {
      control: 'text',
      description: 'Month and year of card validity',
    },
    cardNumber: {
      control: 'text',
      description: 'Card number',
    },
    cardNumberColor: {
      control: 'color',
      description: 'Color of card number',
    },
    isFlipped: {
      control: 'boolean',
      description:
        'Value to control the front and back of the card to be displayed',
    },
    cardBanner: {
      control: 'object',
      description: 'Banner displayed on the card',
      label: {
        options: ['Alemanha', 'Argentina'],
        mapping: {
          Alemanha: {
            title: '<Alemanha />',
            size: '24',
          },
          Argentina: {
            title: '<Argentina />',
            size: '24',
          },
        },
      },
    },
    children: {
      control: '',
      description:
        'HTML element that can be inserted within the context in which it is available',
    },
  },
  decorators: [
    (Story) => (
      <div>
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
    nameColor: '#FFFFFF',
    date: '05/27',
    isFlipped: false,
    CardBanner: <Alemanha size={24} />,
    logoCard: <Argentina size={24} />,
    backgroundCardColor: '#866EAF',
    cardNumber: '5114 7706 9586 0783',
    cardNumberColor: '#FFFFFF',
  },
  render: (args) => <CreditCard {...args} />,
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
    isFlipped: false,
    cardNumber: '**** **** **** ****',
  },
  render: (args) => <CreditCard {...args} />,
}
