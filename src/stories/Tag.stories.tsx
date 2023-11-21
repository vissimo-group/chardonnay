import React from 'react'
import type { Meta } from '@storybook/react'
import { Delivery } from 'semillon'
import { Tag } from '../components'
import { TagProps } from '../components/Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false },
    severity: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'error'],
      },
    },
    value: { control: 'text' },
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
  },
} as Meta<TagProps>

export const LightTag = (args) => <Tag {...args} />
LightTag.args = {
  icon: <Delivery size={26} />,
  severity: 'info',
  theme: 'light',
  value: 'Frete grátis em toda loja!',
}

export const DarkTag = (args) => <Tag {...args} />
DarkTag.args = {
  icon: <Delivery size={26} />,
  severity: 'error',
  theme: 'dark',
  value: 'Frete grátis em toda loja!',
}
