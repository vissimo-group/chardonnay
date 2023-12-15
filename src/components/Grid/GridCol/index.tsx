import styled from 'styled-components'

import { BorderRadius } from '../../../tokens'

import type { GridColProps } from './type'

const GridCol = styled.span<GridColProps>`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  grid-column: ${({ span, size }) => (span && size ? `span ${size}` : '')};
  border-radius: ${BorderRadius['3']};
  border: 1px solid;
`

export { GridCol }
