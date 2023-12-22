import type { Meta } from '@storybook/react'
import React from 'react'
import { Radio } from '../components/Radio'
import { RadioContentProps } from '../components/Radio/type'

export default {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
} as Meta<RadioContentProps>

const theme = 'light'

export const EmptyRadio = (args: RadioContentProps) => (
  <Radio theme={theme} {...args} />
)

export const CheckedRadio = (args: RadioContentProps) => (
  <Radio {...args} theme={theme} checked />
)

export const BigRadio = (args: RadioContentProps) => (
  <Radio {...args} theme={theme} size="50px" />
)
