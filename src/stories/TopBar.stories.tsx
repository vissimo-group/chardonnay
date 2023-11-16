import type { Meta } from '@storybook/react'
import { TopBar } from '../components'

export default {
  title: 'Components/TopBar',
  component: TopBar,
  tags: ['autodocs'],
} as Meta<null>

/** Essa e uma forma de descrever o componente */
export const topBar: { args: { children: string } } = {
  args: {
    children: 'Digite seu cep',
  },
}
