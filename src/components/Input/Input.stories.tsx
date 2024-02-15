import { Meta, StoryObj } from '@storybook/react'
import { Search, Close } from 'semillon'
import React from 'react'
import { Input } from '../index'
import { InputProps } from './types'

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: 'Informe seu CEP',
    error: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
      defaultValue: 'light',
    },
  },
} as Meta<InputProps>

export const Enabled: StoryObj<InputProps> = {
  name: 'Enabled state',
  args: { theme: 'light', label: 'Informe seu CEP' },

  render: (args) => <Input {...args} />,
}

export const InputIconRight: StoryObj<InputProps> = {
  name: 'Icon Right',
  args: { theme: 'light', label: 'Informe seu CEP' },

  render: (args) => (
    <Input {...args} iconRight={<Search size={26} color="black" />} />
  ),
}

export const InputIconLeft: StoryObj<InputProps> = {
  name: 'icon Left',
  args: { theme: 'light', label: 'Informe seu CEP' },

  render: (args) => (
    <Input {...args} iconLeft={<Search size={26} color="black" />} />
  ),
}

export const InputIcon: StoryObj<InputProps> = {
  name: 'icon',
  args: { theme: 'light', label: 'Informe seu CEP' },

  render: (args) => (
    <Input
      {...args}
      iconRight={<Search size={26} color="black" />}
      iconLeft={<Close size={26} color="black" />}
    />
  ),
}

export const InputError: StoryObj<InputProps> = {
  name: 'Error',
  args: { theme: 'light', label: 'Informe seu CEP' },

  render: (args) => (
    <Input {...args} error iconLeft={<Close size={26} color="red" />} />
  ),
}

export const InputDisabled: StoryObj<InputProps> = {
  name: 'Disabled',
  args: { theme: 'light', label: 'Informe seu CEP' },

  render: (args) => <Input {...args} disabled />,
}
