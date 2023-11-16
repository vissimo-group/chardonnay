import type { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import { Modal } from '../components'
import { ModalProps } from '../components/Modal'

interface TemplateProps extends ModalProps {}

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} as Meta<TemplateProps>

const Template: Story<TemplateProps> = (args) => {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <Modal
      onClose={() => setModalOpen(!modalOpen)}
      isOpen={modalOpen}
      {...args}
    />
  )
}

export const ModalLight = Template.bind({})
ModalLight.args = {
  theme: 'light',
}

export const ModalDark = Template.bind({})
ModalDark.args = {
  theme: 'dark',
}
