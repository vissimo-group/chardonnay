import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Border } from './index'
import { Card } from '../Card'
import { Text } from '../Text'
import { BorderProps } from './type'
import { ThemeType } from '../../types'

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

type Story = StoryObj<BorderProps & { theme: ThemeType }>

export const BorderDefault: Story = {
  args: {},
  render: function Render({ theme, color, radius, borderType }) {
    return (
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
  },
}

export const BorderColor: Story = {
  args: {
    color: 'red',
    radius: '8px',
  },
  render: function Render({ theme, color, radius, borderType }) {
    return (
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
  },
}

export const BorderPosition: Story = {
  args: {
    color: 'red',
    radius: '8px',
    borderType: ['top', 'bottom'],
  },
  render: function Render({ theme, color, radius, borderType }) {
    return (
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
  },
}
