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
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Standard input tag attribute.',
    },
    error: {
      control: {
        type: 'boolean',
      },
      description: 'Error variant, default value false.',
    },
  },
} as Meta

type Story = StoryObj<InputProps & { disabled?: boolean }>

export const Enabled: Story = {
  name: 'Enabled state',
  args: { theme: 'light', label: 'Informe seu CEP' },

  render: (args) => <Input {...args} />,
}

export const InputIconRight: Story = {
  name: 'Icon Right',
  args: { theme: 'light', label: 'Informe seu CEP' },

  render: (args) => (
    <Input {...args} iconRight={<Search size={26} color="black" />} />
  ),
}

export const InputIconLeft: Story = {
  name: 'icon Left',
  args: { theme: 'light', label: 'Informe seu CEP' },

  render: (args) => (
    <Input {...args} iconLeft={<Search size={26} color="black" />} />
  ),
}

export const InputIcon: Story = {
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

export const InputError: Story = {
  name: 'Error',
  args: { theme: 'light', label: 'Informe seu CEP' },

  render: (args) => (
    <Input {...args} error iconLeft={<Close size={26} color="red" />} />
  ),
}

export const InputDisabled: Story = {
  name: 'Disabled',
  args: { theme: 'light', label: 'Informe seu CEP', disabled: true },

  render: (args) => <Input {...args} />,
}
