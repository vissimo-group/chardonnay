import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Card } from './index'
import { Text } from '../Text'
import { CardProps } from './type'

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    maxWidth: {
      control: 'text',
    },
    selected: {
      control: 'boolean',
    },
  },
} as Meta<CardProps>

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <Text color="#212425">Lorem Ipsum</Text>
  </Card>
)

const theme = 'light'

export const CardDefault = Template.bind({})
CardDefault.args = {
  theme,
}

export const CardMaxWidth = Template.bind({})
CardMaxWidth.args = {
  theme,
  selected: true,
  maxWidth: '50%',
}

export const CardIsSelected = Template.bind({})
CardIsSelected.args = {
  theme,
  selected: false,
}
