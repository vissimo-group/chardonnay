import React from 'react'
import { Meta, Story as StoryType } from '@storybook/react'
import { Line } from './index'
import { LineProps } from './type'

export default {
  title: 'Components/Line',
  component: Line,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
    dashed: {
      control: 'boolean',
    },
    thickness: {
      control: 'text',
    },
    maxWidth: {
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
} as Meta<LineProps>

const Template: StoryType<LineProps> = (args) => <Line {...args} />

export const DefaultLine = Template.bind({})
DefaultLine.args = {}

export const ColorLine = Template.bind({})
ColorLine.args = {
  color: 'red',
}

export const DashedLine = Template.bind({})
DashedLine.args = {
  dashed: true,
}

export const ThickLine = Template.bind({})
ThickLine.args = {
  thickness: '3',
}

export const DashedThickLine = Template.bind({})
DashedThickLine.args = {
  dashed: true,
  thickness: '3',
}

export const MaxWidthLine = Template.bind({})
MaxWidthLine.args = {
  maxWidth: '50%',
}
