import React from 'react'
import { Meta, Story as StoryType } from '@storybook/react'
import { Radio } from './index'
import { RadioContentProps } from './type'

export default {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    checked: {
      control: 'boolean',
    },
    size: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<RadioContentProps>

const Template: StoryType<RadioContentProps> = (args) => <Radio {...args} />

const theme = 'light'

export const EmptyRadio = Template.bind({})
EmptyRadio.args = {
  theme,
}

export const CheckedRadio = Template.bind({})
CheckedRadio.args = {
  theme,
  checked: true,
}

export const BigRadio = Template.bind({})
BigRadio.args = {
  theme,
  size: '50px',
}
