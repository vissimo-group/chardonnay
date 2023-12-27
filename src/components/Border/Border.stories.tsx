import React from 'react'
import type { Meta, Story } from '@storybook/react'
import { Border } from './index'
import { Card } from '../Card'
import { Text } from '../Text'
import { BorderProps } from './type'
import { CardProps } from '../Card/type'

export default {
  title: 'Components/Border',
  component: Border,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      defaultValue: 'light',
      control: { type: 'inline-radio' },
    },
    borderType: {
      options: ['left', 'right', 'top', 'bottom'],
      defaultValue: [],
      control: { type: 'multi-select' },
    },
  },
} as Meta<BorderProps>

const Template: Story<CardProps> = ({ theme, color, radius, borderType }) => (
  <Border
    theme={theme}
    color={color as string}
    radius={radius}
    borderType={borderType}
  >
    <Card selected theme={theme} borderRadius={radius}>
      <Text color="#212425">Lorem Ipsum</Text>
    </Card>
  </Border>
)

export const BorderDefault: Story<CardProps> = Template.bind({})
BorderDefault.args = {}

export const BorderColor: Story<CardProps> = Template.bind({})
BorderColor.args = {
  color: 'red',
  radius: '8px',
}

export const BorderPosition: Story<CardProps> = Template.bind({})
BorderPosition.args = {
  color: 'red',
  radius: '8px',
  borderType: ['top', 'bottom'],
}
