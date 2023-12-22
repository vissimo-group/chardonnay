import type { Meta } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { SelectListType } from '../components/SelectListType'
import { Line } from '../components/Line'

export default {
  title: 'Components/SelectListType',
  component: SelectListType,
  tags: ['autodocs'],
} as Meta<null>

const theme = 'light'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`

export const SelectListTypeDefault = () => (
  <>
    <SelectListType.Root>
      <SelectListType.Radio theme={theme} />

      <Flex>
        <SelectListType.Title>TITLE</SelectListType.Title>
        <SelectListType.SubTitle>Sub Title</SelectListType.SubTitle>
        <SelectListType.Price>00,00 R$</SelectListType.Price>
      </Flex>

      <SelectListType.Action />
    </SelectListType.Root>
    <Line />

    <SelectListType.Root selected>
      <SelectListType.Radio checked theme={theme} />

      <Flex>
        <SelectListType.Title>TITLE</SelectListType.Title>
        <SelectListType.SubTitle>Sub Title</SelectListType.SubTitle>
        <SelectListType.Price>00,00 R$</SelectListType.Price>
      </Flex>

      <SelectListType.Action />
    </SelectListType.Root>
    <Line />
  </>
)

export const Select = () => (
  <>
    <SelectListType.Root selected>
      <SelectListType.Radio checked theme={theme} />

      <Flex>
        <SelectListType.Title>TITLE</SelectListType.Title>
        <SelectListType.SubTitle>Sub Title</SelectListType.SubTitle>
        <SelectListType.Price>00,00 R$</SelectListType.Price>
      </Flex>

      <SelectListType.Action />
    </SelectListType.Root>
    <Line />
  </>
)

export const NoSelect = () => (
  <>
    <SelectListType.Root>
      <SelectListType.Radio theme={theme} />

      <Flex>
        <SelectListType.Title>TITLE</SelectListType.Title>
        <SelectListType.SubTitle>Sub Title</SelectListType.SubTitle>
        <SelectListType.Price>00,00 R$</SelectListType.Price>
      </Flex>

      <SelectListType.Action />
    </SelectListType.Root>
    <Line />
  </>
)
