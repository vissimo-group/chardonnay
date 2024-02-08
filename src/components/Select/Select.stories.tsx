import type { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import React, { useState } from 'react'
import { ChevronDown } from 'semillon'
import { Select } from '.'
import { Colors } from '../../tokens'
import SelectBox from './SelectBox'

//* DECORATORS */

const LabelDecorator = styled.label<{ $fontSize: number }>`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: ${Colors.light.neutral.neutral400};
  font-size: ${({ $fontSize }) => $fontSize}rem;
  margin-bottom: 0.5em;
`

//* META */

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
    },
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Standard select tag attribute.',
    },
    error: {
      control: {
        type: 'boolean',
      },
      description: 'Error variant, default value false.',
    },
    responsible: {
      control: { type: 'boolean' },
      defaultValue: false,
      description:
        'Sets the width on smaller screens to 100%. Not required, default value false.',
    },
    expand: {
      control: { type: 'boolean' },
      description:
        'If true, the component will expand occupying 100% of the available space.',
      defaultValue: false,
    },
    fontSize: {
      control: {
        type: 'range',
        min: 0.75,
        max: 1.5,
        step: 0.25,
      },
      description:
        'Desired font size, this value is applied in rem unit. Not required property, default value 1rem.',
      defaultValue: 1,
    },
  },
}

export default meta

//* STORIES */

type Story = StoryObj<typeof Select>

export const Enabled: Story = {
  name: 'Enabled state',
  args: { disabled: false, error: false },
  decorators: [
    (Story) => (
      <LabelDecorator $fontSize={1}>
        <Story />
        Just an amazing label
      </LabelDecorator>
    ),
  ],
  render: (args) => (
    <Select {...args}>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </Select>
  ),
}

export const Disabled: Story = {
  name: 'Disabled state',
  decorators: [
    (Story) => (
      <LabelDecorator $fontSize={1}>
        <Story />
        Just an amazing label
      </LabelDecorator>
    ),
  ],
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
  decorators: [
    (Story) => (
      <LabelDecorator $fontSize={1}>
        <Story />
        Just an amazing label
      </LabelDecorator>
    ),
  ],
  render: (args) => (
    <Select {...args}>
      <option value="home">Some error</option>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </Select>
  ),
}

export const Expansible: Story = {
  name: 'Expansible mode',
  args: { disabled: false, error: false, expand: true },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  render: (args) => (
    <>
      <LabelDecorator $fontSize={1}>Just an amazing label</LabelDecorator>
      <Select {...args}>
        <option value="home">Home address</option>
        <option value="business">Business address</option>
      </Select>
    </>
  ),
}

export const SmallerFontSize: Story = {
  name: 'Smaller font size',
  args: { disabled: false, error: true },
  decorators: [
    (Story) => (
      <LabelDecorator $fontSize={0.75}>
        <Story />
        Just an amazing label
      </LabelDecorator>
    ),
  ],
  render: (args) => (
    <Select {...args} fontSize={0.75}>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </Select>
  ),
}

export const Responsible: Story = {
  name: 'Responsible mode',
  args: { disabled: false, error: false, responsible: true },
  decorators: [
    (Story) => (
      <>
        <LabelDecorator $fontSize={1}>Just an amazing label</LabelDecorator>
        <Story />
      </>
    ),
  ],
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  render: (args) => (
    <Select {...args}>
      <option value="home">Home address</option>
      <option value="business">Business address</option>
    </Select>
  ),
}

const TemplateSelect = () => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleSelectChange = (event: React.ChangeEvent<{ value: string }>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <SelectBox
      label="Escolha uma opção"
      iconRight={<ChevronDown size={26} color="black" />}
      theme="light"
      onChange={handleSelectChange}
      value={selectedValue}
    >
      {['casa', 'predio', 'empresa', 'evino'].map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectBox>
  )
}

export const BoxSelect = {
  name: 'select with what the input looks like ',
  args: {},
  render: () => <TemplateSelect />,
}
