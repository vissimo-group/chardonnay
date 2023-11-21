import { Meta, Story } from '@storybook/react'
import { Search } from 'semillon'
import React from 'react'
import { Input } from '../components'

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
    type: { control: 'text' },
    placeholder: { control: 'text' },
  },
} as Meta<InputProps>

interface InputProps {
  theme: 'light' | 'dark'
  type: string
  placeholder: string
}

const Template: Story<InputProps> = ({ theme, placeholder, type }) => {
  return (
    <Input
      icon={<Search size={26} />}
      type={type}
      placeholder={placeholder}
      theme={theme}
    />
  )
}

export const InputLight = Template.bind({})
InputLight.args = {
  theme: 'light',
  type: 'text',
  placeholder: 'Informe seu CEP',
}

export const InputDark = Template.bind({})
InputDark.args = {
  theme: 'dark',
  type: 'text',
  placeholder: 'Informe seu CEP',
}
