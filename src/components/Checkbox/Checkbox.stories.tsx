import type { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import { Checkbox } from '.'
import { Colors } from '../../tokens'

//* DECORATORS */

const ContainerDecorator = styled.div`
  width: 100%;
  display: flex;
  inset: 0;
  justify-content: center;
  padding-block: 1rem;
  background-color: aliceblue;
`

const LabelDecorator = styled.label<{ $fontSize: number }>`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: ${Colors.light.neutral.neutral500};
  font-size: ${({ $fontSize }) => $fontSize}px;
`

//* META */

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => (
      <ContainerDecorator>
        <Story />
      </ContainerDecorator>
    ),
  ],
}

export default meta

//* STORIES */

type Story = StoryObj<typeof Checkbox>

export const EnabledState: Story = {
  name: 'Enabled',
  args: { disabled: false },
  decorators: [
    (Story) => (
      <LabelDecorator $fontSize={16}>
        <Story />
        Just an amazing label
      </LabelDecorator>
    ),
  ],
  render: (args) => <Checkbox {...args} />,
}

export const DisabledState: Story = {
  name: 'Disabled',
  args: { disabled: true },
  decorators: [
    (Story) => (
      <LabelDecorator $fontSize={16}>
        <Story />
        Just an amazing label
      </LabelDecorator>
    ),
  ],
  render: (args) => <Checkbox {...args} />,
}

export const Smaller: Story = {
  name: 'With a smaller label',
  args: { disabled: false },
  decorators: [
    (Story) => (
      <LabelDecorator $fontSize={14}>
        <Story />
        Just an amazing smaller label
      </LabelDecorator>
    ),
  ],
  render: (args) => <Checkbox {...args} />,
}

export const Larger: Story = {
  name: 'With a larger label',
  args: { disabled: false },
  decorators: [
    (Story) => (
      <LabelDecorator $fontSize={20}>
        <Story />
        Just an amazing larger label
      </LabelDecorator>
    ),
  ],
  render: (args) => <Checkbox {...args} />,
}
