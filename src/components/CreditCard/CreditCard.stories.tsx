import { Meta, StoryObj } from '@storybook/react'
import { Hipercard, Dinersclub } from 'semillon'
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
    textColor: {
      control: 'color',
      description:
        'Property to set the color of the card texts, by default its value is #707070',
    },
    date: {
      control: 'text',
      description: 'Month and year of card validity',
    },
    cardNumber: {
      control: 'text',
      description:
        'Card number is the value that is passed to display the users card number, by default if nothing is passed it will display ***',
    },
    isFlipped: {
      control: 'boolean',
      description:
        'Value to control the front and back of the card to be displayed, by default its value is false, which means that if the property is not passed it will receive false.',
    },
    cardBanner: {
      control: {
        type: 'select',
      },
      description:
        'cardBanner is displayed in the top left corner, it represents the users card flag.',
      options: ['cardBanner', 'logoCard'],
      mapping: {
        cardBanner: <Hipercard size={24} color="#FF0000" />,
        logoCard: <Dinersclub size={24} color="#000" />,
      },
    },
    logoCard: {
      control: {
        type: 'select',
      },
      description:
        'LogoCard refers to the logo displayed on the top right side of the card, if no value is entered, nothing will be displayed.',
      options: ['logoCard', 'cardBanner'],
      mapping: {
        logoCard: <Hipercard size={24} color="#FF0000" />,
        cardBanner: <Dinersclub size={24} color="#000" />,
      },
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

export const WithCardData: Story = {
  args: {
    name: 'Jhon Smith',
    textColor: '#FFFFFF',
    date: '05/27',
    isFlipped: false,
    cardBanner: <Hipercard size={24} color="#000" />,
    logoCard: <Dinersclub size={24} color="#000" />,
    backgroundCardColor: '#866EAF',
    cardNumber: '5114 7706 9586 0783',
  },
  render: (args) => <CreditCard {...args} />,
}

export const BackCreditCard: Story = {
  args: {
    isFlipped: true,
  },
  render: (args) => <CreditCard {...args} />,
}

export const WithCustomBackgroundColor: Story = {
  args: {
    backgroundCardColor: '#000',
  },
  render: (args) => <CreditCard {...args} />,
}

export const WithBanners: Story = {
  args: {
    cardBanner: <Hipercard size={24} color="#000" />,
    logoCard: <Dinersclub size={24} color="#000" />,
  },
  render: (args) => <CreditCard {...args} />,
}

export const NewCreditCard: Story = {
  args: {
    isFlipped: false,
  },
  render: (args) => <CreditCard {...args} />,
}
