import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { SelectListType } from './index'
import { Line } from '../Line'
import { ThemeType } from '../../types'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`

export default {
  title: 'Components/SelectListType',
  tags: ['autodocs'],
  component: SelectListType.Root,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
      defaultValue: 'light',
    },
    selected: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} as Meta

type Story = StoryObj<{
  checked: boolean
  selected: boolean
  theme: ThemeType
}>

export const SelectListTypeDefault: Story = {
  render: function Render({ theme }) {
    return (
      <>
        <SelectListType.Root theme={theme}>
          <SelectListType.Radio theme={theme} />

          <Flex>
            <SelectListType.Title theme={theme}>TITLE</SelectListType.Title>
            <SelectListType.SubTitle theme={theme}>
              Sub Title
            </SelectListType.SubTitle>
            <SelectListType.Price theme={theme}>00,00 R$</SelectListType.Price>
          </Flex>

          <SelectListType.Action theme={theme} />
        </SelectListType.Root>
        <Line theme={theme} />

        <SelectListType.Root theme={theme}>
          <SelectListType.Radio theme={theme} />

          <Flex>
            <SelectListType.Title theme={theme}>TITLE</SelectListType.Title>
            <SelectListType.SubTitle theme={theme}>
              Sub Title
            </SelectListType.SubTitle>
            <SelectListType.Price theme={theme}>00,00 R$</SelectListType.Price>
          </Flex>

          <SelectListType.Action theme={theme} />
        </SelectListType.Root>
        <Line theme={theme} />
      </>
    )
  },
}

export const Select: Story & { checked?: boolean } = {
  args: {
    selected: true,
    checked: true,
  },
  render: function Render({ selected, checked, theme }) {
    return (
      <>
        <SelectListType.Root theme={theme}>
          <SelectListType.Radio theme={theme} />

          <Flex>
            <SelectListType.Title theme={theme}>TITLE</SelectListType.Title>
            <SelectListType.SubTitle theme={theme}>
              Sub Title
            </SelectListType.SubTitle>
            <SelectListType.Price theme={theme}>00,00 R$</SelectListType.Price>
          </Flex>

          <SelectListType.Action theme={theme} />
        </SelectListType.Root>
        <Line theme={theme} />

        <SelectListType.Root theme={theme} selected={selected}>
          <SelectListType.Radio theme={theme} checked={checked} />

          <Flex>
            <SelectListType.Title theme={theme}>TITLE</SelectListType.Title>
            <SelectListType.SubTitle theme={theme}>
              Sub Title
            </SelectListType.SubTitle>
            <SelectListType.Price theme={theme}>00,00 R$</SelectListType.Price>
          </Flex>

          <SelectListType.Action theme={theme} />
        </SelectListType.Root>
        <Line theme={theme} />
      </>
    )
  },
}

export const NoSelect: Story = {
  args: {
    selected: false,
    checked: false,
  },
  render: function Render({ selected, checked, theme }) {
    return (
      <>
        <SelectListType.Root theme={theme}>
          <SelectListType.Radio theme={theme} />

          <Flex>
            <SelectListType.Title theme={theme}>TITLE</SelectListType.Title>
            <SelectListType.SubTitle theme={theme}>
              Sub Title
            </SelectListType.SubTitle>
            <SelectListType.Price theme={theme}>00,00 R$</SelectListType.Price>
          </Flex>

          <SelectListType.Action theme={theme} />
        </SelectListType.Root>
        <Line theme={theme} />

        <SelectListType.Root theme={theme} selected={selected}>
          <SelectListType.Radio theme={theme} checked={checked} />

          <Flex>
            <SelectListType.Title theme={theme}>TITLE</SelectListType.Title>
            <SelectListType.SubTitle theme={theme}>
              Sub Title
            </SelectListType.SubTitle>
            <SelectListType.Price theme={theme}>00,00 R$</SelectListType.Price>
          </Flex>

          <SelectListType.Action theme={theme} />
        </SelectListType.Root>
        <Line theme={theme} />
      </>
    )
  },
}
