import type { Meta } from '@storybook/react'
import { ModalCep } from '../components/ModalCep'

export default {
  title: 'Components/Top Bar Modal Cep',
  component: ModalCep,
} as Meta<null>

/** Essa e uma forma de descrever o componente */
export const topBar: { args: { children: string } } = {
  args: {
    children: 'Digite seu cep',
  },
}
