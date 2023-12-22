import type { Meta } from '@storybook/react'
import React from 'react'
import { Card } from '../components/Card'
import { CardProps } from '../components/Card/type'
import { Text } from '../components/Text'

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  render: () => Card,
} as Meta<CardProps>

const theme = 'light'

export const CardDefault = (args: CardProps) => (
  <Card theme={theme} {...args}>
    <Text color="#212425">Lorem Ipsum</Text>
  </Card>
)

export const CardSelect = (args: CardProps) => (
  <Card {...args} theme={theme} selected>
    <Text color="#212425">Lorem Ipsum</Text>
  </Card>
)

export const CardMaxWidth = (args: CardProps) => (
  <Card {...args} theme={theme} selected maxWidth="50%">
    <Text color="#212425">Lorem Ipsum</Text>
  </Card>
)
