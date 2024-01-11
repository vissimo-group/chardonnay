import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
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
      defaultValue: 'light',
    },
    maxWidth: {
      control: 'text',
    },
    selected: {
      control: 'boolean',
    },
  },
} as Meta<CardProps>

type Story = StoryObj<CardProps>

export const CardDefault: Story = {
  args: {},
  render: function Render(args: CardProps) {
    return (
      <Card {...args}>
        <Text color="#212425">Lorem Ipsum</Text>
      </Card>
    )
  },
}

export const CardMaxWidth: Story = {
  args: {
    selected: true,
    maxWidth: '50%',
  },
  render: function Render(args: CardProps) {
    return (
      <Card {...args}>
        <Text color="#212425">Lorem Ipsum</Text>
      </Card>
    )
  },
}

export const CardIsSelected: Story = {
  args: {
    selected: false,
  },
  render: function Render(args: CardProps) {
    return (
      <Card {...args}>
        <Text color="#212425">Lorem Ipsum</Text>
      </Card>
    )
  },
}
