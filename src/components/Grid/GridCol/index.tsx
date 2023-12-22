import styled from 'styled-components'

import type { GridColProps } from './type'

const GridCol = styled.span<GridColProps>`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  grid-column: ${({ span, size }) => (span && size ? `span ${size}` : '')};
`

export { GridCol }
