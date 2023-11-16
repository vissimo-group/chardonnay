import type { Meta, Story } from '@storybook/react'
import { WarningExclamation } from '@vissimo/icons'
import React from 'react'
import { Message } from '../components'
import { Severity } from '../components/Message'

interface MessageArgs {
  theme?: 'light' | 'dark'
  message?: string | React.ReactNode
  severity?: Severity
}

export default {
  title: 'Components/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
      defaultValue: 'light',
    },
    message: {
      control: { type: 'text' },
    },
    severity: {
      options: ['info', 'warning', 'error'],
      control: { type: 'select' },
      defaultValue: 'error',
    },
  },
} as Meta<MessageArgs>

type StoryComponentType = Story<MessageArgs>

export const MessageLight: StoryComponentType = (args) => {
  return (
    <>
      <Message {...args} />
      <br />
      <Message {...args} severity="warning" />
      <br />
      <Message {...args} severity="info" />
    </>
  )
}
MessageLight.args = {
  theme: 'light',
  icon: <WarningExclamation size={26} />,
  message: 'Hello World',
  severity: 'error',
}

export const MessageDark: StoryComponentType = (args) => <Message {...args} />
MessageDark.args = {
  theme: 'dark',
  icon: <WarningExclamation size={26} />,
  message: 'Hello World',
  severity: 'error',
}
