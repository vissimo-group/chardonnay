import styled from 'styled-components'

import { Spacing } from '../../../tokens'

import type { GridRowProps } from './type'

const GridRow = styled.div<GridRowProps>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ amount }) => `repeat(${amount}, 1fr)`};
  gap: ${Spacing['4']};
  margin: 0;
`

export { GridRow }
