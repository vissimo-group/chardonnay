import type { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import { Select } from '.'
import { Colors } from '../../tokens'

//* DECORATORS */

const LabelDecorator = styled.label<{ $fontSize: number }>`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: ${Colors.light.neutral.neutral400};
  font-size: ${({ $fontSize }) => $fontSize}px;
`

//* META */

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LabelDecorator $fontSize={16}>
        <Story />
        Just an amazing label
      </LabelDecorator>
    ),
  ],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta

//* STORIES */

type Story = StoryObj<typeof Select>

export const Enabled: Story = {
  name: 'Enabled state',
  args: { disabled: false, error: false },
  render: (args) => (
    <Select {...args}>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </Select>
  ),
}

export const Disabled: Story = {
  name: 'Disabled state',
  args: { disabled: true, error: false },
  render: (args) => (
    <Select {...args}>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </Select>
  ),
}

export const Error: Story = {
  name: 'Error state',
  args: { disabled: false, error: true },
  render: (args) => (
    <Select {...args}>
      <option value="home">Some error</option>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </Select>
  ),
}
