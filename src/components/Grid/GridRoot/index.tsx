import styled from 'styled-components'

import { Spacing } from '../../../tokens'
import { GridRootProps } from './type'

const GridRoot = styled.section<GridRootProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  gap: ${Spacing['4']};
`

export { GridRoot }
