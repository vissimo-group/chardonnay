import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { ChevronDown, Close, Search } from 'semillon'

import Select from './index'
import { SelectProps } from './types'

//* META */

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Standard select tag attribute.',
    },
    error: {
      control: {
        type: 'boolean',
      },
      description: 'Error variant, default value false.',
    },
  },
} as Meta

//* STORIES */

type Story = StoryObj<SelectProps>

const TemplateSelect = (props) => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleSelectChange = (event: React.ChangeEvent<{ value: string }>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <Select
      label="Escolha uma opção"
      iconRight={<ChevronDown size={26} color="black" />}
      theme="light"
      onChange={handleSelectChange}
      value={selectedValue}
      {...props}
    >
      {['casa', 'predio', 'empresa', 'evino'].map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  )
}

export const Enabled: Story = {
  name: 'Enabled state',
  args: { disabled: false, error: false },

  render: (args) => (
    <TemplateSelect {...args}>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </TemplateSelect>
  ),
}

export const Disabled: Story = {
  name: 'Disabled state',
  args: { disabled: true, error: false },

  render: (args) => (
    <TemplateSelect {...args}>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </TemplateSelect>
  ),
}

export const Error: Story = {
  name: 'Error state',
  args: { disabled: false, error: true },

  render: (args) => (
    <TemplateSelect {...args}>
      <option value="home">Some error</option>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </TemplateSelect>
  ),
}

export const icons: Story = {
  name: 'icons',
  args: {},

  render: (args) => (
    <TemplateSelect iconLeft={<Close size={26} color="black" />} {...args}>
      <option value="home">Some error</option>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </TemplateSelect>
  ),
}
