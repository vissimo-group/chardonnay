import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ButtonProps } from '../components/Button'
import { Button } from '../components'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    onClick: {
      action: 'click',
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    severity: {
      control: 'inline-radio',
      options: ['primary', 'success', 'warning', 'danger'],
    },
  },
} as Meta<TypeArgs>

interface TypeArgs {
  label?: string
  disabled?: boolean
  loading?: boolean
  sizeLoading?: number
  theme?: 'light' | 'dark' | undefined
  severity?: 'primary' | 'success' | 'warning' | 'danger'
}

const defaultArgs: TypeArgs = {
  disabled: false,
  loading: false,
  label: 'Buscar',
  sizeLoading: 26,
  theme: 'light',
  severity: 'primary',
}

export const ButtonLight: Story<ButtonProps> = (args) => <Button {...args} />
ButtonLight.args = {
  ...defaultArgs,
  theme: 'light',
}

export const ButtonDark: Story<ButtonProps> = (args) => <Button {...args} />
ButtonDark.args = {
  ...defaultArgs,
  theme: 'dark',
}

export const ButtonPrimary: Story<ButtonProps> = (args) => <Button {...args} />
ButtonPrimary.args = {
  ...defaultArgs,
  loading: false,
}

export const ButtonSecondary: Story<ButtonProps> = (args) => (
  <Button {...args} />
)
ButtonSecondary.args = {
  ...defaultArgs,
  label: 'Remover',
  severity: 'danger',
}

export const ButtonLoading: Story<ButtonProps> = (args) => <Button {...args} />
ButtonLoading.args = {
  ...defaultArgs,
  loading: true,
}

export const ButtonDisabled: Story<ButtonProps> = (args) => <Button {...args} />
ButtonDisabled.args = {
  ...defaultArgs,
  disabled: true,
}
