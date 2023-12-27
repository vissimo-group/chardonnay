import React from 'react'
import { Meta, Story as StoryType } from '@storybook/react'
import styled from 'styled-components'
import { SelectListType } from './index'
import { Line } from '../Line'

export default {
  title: 'Components/SelectListType',
  component: SelectListType,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    selected: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} as Meta<null>

const theme = 'light'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`

const Template: StoryType<{ selected: boolean; checked: boolean }> = ({
  selected,
  checked,
}) => (
  <>
    <SelectListType.Root>
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
    <Line />

    <SelectListType.Root selected={selected}>
      <SelectListType.Radio checked={checked} theme={theme} />

      <Flex>
        <SelectListType.Title theme={theme}>TITLE</SelectListType.Title>
        <SelectListType.SubTitle theme={theme}>
          Sub Title
        </SelectListType.SubTitle>
        <SelectListType.Price theme={theme}>00,00 R$</SelectListType.Price>
      </Flex>

      <SelectListType.Action theme={theme} />
    </SelectListType.Root>
    <Line />
  </>
)

export const SelectListTypeDefault = Template.bind({})

export const Select = Template.bind({})
Select.args = {
  selected: true,
  checked: true,
}

export const NoSelect = Template.bind({})
NoSelect.args = {
  selected: false,
  checked: false,
}
