import type { Meta } from '@storybook/react'
import React from 'react'
import { Border } from './index'
import { CardProps } from '../Card/type'
import { Card } from '../Card'
import { Text } from '../Text'
import { BorderProps } from './type'

export default {
  title: 'Components/Border',
  component: Border,
  tags: ['autodocs'],
} as Meta<BorderProps>

const theme = 'light'

export const BorderDefault = (args: CardProps) => (
  <Border theme={theme} {...args}>
    <Card selected theme={theme}>
      <Text color="#212425">Lorem Ipsum</Text>
    </Card>
  </Border>
)

export const BorderColor = (args: CardProps) => (
  <Border color="red" radius="8px" theme={theme} {...args}>
    <Card borderRadius="8px" selected theme={theme}>
      <Text color="#212425">Lorem Ipsum</Text>
    </Card>
  </Border>
)
