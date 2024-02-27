import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { ChevronDown, Close } from 'semillon'

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

const TemplateSelect = (props: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleSelectChange = (event: React.ChangeEvent<{ value: string }>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <Select
      label="Escolha uma opção"
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
    <TemplateSelect
      {...args}
      iconRight={<ChevronDown size={26} color="black" />}
    >
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </TemplateSelect>
  ),
}

export const Disabled: Story = {
  name: 'Disabled state',
  args: { disabled: true, error: false },

  render: (args) => (
    <TemplateSelect
      {...args}
      iconRight={<ChevronDown size={26} color="black" />}
    >
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </TemplateSelect>
  ),
}

export const Error: Story = {
  name: 'Error state',
  args: { disabled: false, error: true },

  render: (args) => (
    <TemplateSelect {...args} iconLeft={<Close size={26} color="red" />}>
      <option value="home">Some error</option>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </TemplateSelect>
  ),
}

export const iconsLeft: Story = {
  name: 'icon Left',
  args: {},

  render: (args) => (
    <TemplateSelect iconLeft={<Close size={26} color="black" />} {...args}>
      <option value="home">Some error</option>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </TemplateSelect>
  ),
}

export const iconsRight: Story = {
  name: 'icon Right',
  args: {},

  render: (args) => (
    <TemplateSelect
      iconRight={<ChevronDown size={26} color="black" />}
      {...args}
    >
      <option value="home">Some error</option>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </TemplateSelect>
  ),
}

export const icons: Story = {
  name: 'icon Left and Right',
  args: {},

  render: (args) => (
    <TemplateSelect
      iconRight={<Close size={26} color="black" />}
      iconLeft={<ChevronDown size={26} color="black" />}
      {...args}
    >
      <option value="home">Some error</option>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </TemplateSelect>
  ),
}
