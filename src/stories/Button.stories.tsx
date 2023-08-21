import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Confirmar',
    size: 'big',
    disable: 'false',
  },
  argTypes: {
    label: {
      control: 'teste',
    },
    disable: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      options: ['small', 'big'],
      control: {
        type: 'inline-radio',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

/** Essa e uma forma de descrever o componente */
export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
    size: 'small',
  },
}

/** Esse e o default Button */
export const Secondery: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
    children: 'Pagar',
  },
}
