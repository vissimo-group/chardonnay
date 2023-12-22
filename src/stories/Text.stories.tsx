import type { Meta } from '@storybook/react'
import React from 'react'
import { TextProps, TypeAs } from '../components/Text/type'
import { Text } from '../components/Text'

export default {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
} as Meta<TextProps>

export const TextDefault = (args: TextProps) => (
  <Text {...args}>Lorem Ipsum</Text>
)

export const TextOfTypeTag = (args: TextProps) => {
  const typeText = ['span', 'div', 'label', 'p']

  return (
    <>
      {typeText.map((value, index) => (
        <Text as={value as TypeAs} {...args}>
          Type <strong>{typeText[index]}</strong> remains semantically for the
          HTML
        </Text>
      ))}
    </>
  )
}

export const TextSize = (args: TextProps) => {
  const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <>
      {sizes.map((size, index) => (
        <>
          <Text size={size} {...args}>
            Size {size} Lorem Ipsum
          </Text>
          {index !== sizes.length - 1 && (
            <div style={{ marginBottom: '10px' }} />
          )}
        </>
      ))}
    </>
  )
}

export const TextAligh = (args: TextProps) => {
  return (
    <>
      <Text align="left" as="div" {...args}>
        Left-aligned
      </Text>
      <Text align="center" as="div" {...args}>
        Center-aligned
      </Text>
      <Text align="right" as="div" {...args}>
        Right-aligned
      </Text>
    </>
  )
}

export const TextWeight = (args: TextProps) => {
  return (
    <>
      <Text weight="regular" as="div" size={8} {...args}>
        Lorem Ipsum.
      </Text>

      <Text weight="medium" as="div" size={9} {...args}>
        Lorem Ipsum.
      </Text>

      <Text weight="bold" as="div" size={10} {...args}>
        Lorem Ipsum.
      </Text>
    </>
  )
}

export const TextColor = (args: TextProps) => {
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
}
