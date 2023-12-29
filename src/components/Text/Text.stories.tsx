import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from './index'
import { TextProps, TypeAs } from './type'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['span', 'div', 'label', 'p'],
      },
    },
    size: {
      control: 'number',
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
    weight: {
      control: {
        type: 'select',
        options: ['regular', 'medium', 'bold'],
      },
    },
    color: {
      control: 'color',
    },
  },
} as Meta<TextProps>

const colorDefault = '#292c2e'

type Story = StoryObj<TextProps>

export const TextDefault: Story = {
  args: {},
  render: function Render(args: TextProps) {
    return (
      <Text color={colorDefault} {...args}>
        Lorem Ipsum
      </Text>
    )
  },
}

export const TextOfTypeTag: Story = {
  args: {},
  render: function Render(args: TextProps) {
    const typeText = ['span', 'div', 'label', 'p']

    return (
      <>
        {typeText.map((value, index) => (
          <Text as={value as TypeAs} {...args} color={colorDefault}>
            Type <strong>{typeText[index]}</strong> remains semantically for the
            HTML
          </Text>
        ))}
      </>
    )
  },
}

export const TextSize: Story = {
  args: {},
  render: function Render(args: TextProps) {
    const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
      <>
        {sizes.map((size, index) => (
          <>
            <Text size={size} color={colorDefault} {...args}>
              Size {size} Lorem Ipsum
            </Text>
            {index !== sizes.length - 1 && (
              <div style={{ marginBottom: '10px' }} />
            )}
          </>
        ))}
      </>
    )
  },
}

export const TextAligh: Story = {
  args: {},
  render: function Render(args: TextProps) {
    return (
      <>
        <Text align="left" as="div" color={colorDefault} {...args}>
          Left-aligned
        </Text>
        <Text align="center" as="div" color={colorDefault} {...args}>
          Center-aligned
        </Text>
        <Text align="right" as="div" color={colorDefault} {...args}>
          Right-aligned
        </Text>
      </>
    )
  },
}

export const TextWeight: Story = {
  args: {},
  render: function Render(args: TextProps) {
    return (
      <>
        <Text weight="regular" as="div" size={8} color={colorDefault} {...args}>
          Lorem Ipsum.
        </Text>

        <Text weight="medium" as="div" size={9} color={colorDefault} {...args}>
          Lorem Ipsum.
        </Text>

        <Text weight="bold" as="div" size={10} color={colorDefault} {...args}>
          Lorem Ipsum.
        </Text>
      </>
    )
  },
}

export const TextColor = {
  args: {},
  render: function Render(args: TextProps) {
    const Color = ['red', 'blue', 'orange']

    return (
      <>
        {Color.map((value, index) => (
          <Text color={Color[index]} {...args}>
            Color <strong>{Color[index]}</strong>
          </Text>
        ))}
      </>
    )
  },
}
