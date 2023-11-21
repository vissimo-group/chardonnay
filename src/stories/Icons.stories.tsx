import type { Meta } from '@storybook/react'
import * as Icons from 'semillon'

type IconProps = {
  color?: string
  size?: number
  autoSize?: boolean
  svgProps?: React.SVGProps<SVGSVGElement>
} & Omit<React.HTMLProps<HTMLSpanElement>, 'color' | 'size'>

export default {
  title: 'Components/Icons',
  component: Icons.Clock,
  tags: ['autodocs'],
} as Meta<IconProps>

export const Icon = (args: IconProps) => <Icons.Clock {...args} />

Icon.args = {
  color: 'red',
  size: 32,
  autoSize: false,
  svgProps: { className: 'custom-class' },
}
