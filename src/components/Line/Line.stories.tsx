import type { Meta } from '@storybook/react'
import React from 'react'
import { Line } from './index'
import { LineProps } from './type'

export default {
  title: 'Components/Line',
  component: Line,
  tags: ['autodocs'],
} as Meta<LineProps>

export const DefaultLine = (args: LineProps) => <Line {...args} />

export const ColorLine = (args: LineProps) => <Line color="#307c27" {...args} />

export const DashedLine = (args: LineProps) => <Line dashed {...args} />

export const maxWidthLine = (args: LineProps) => (
  <Line maxWidth="50%" {...args} />
)
