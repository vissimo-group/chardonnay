import styled from 'styled-components'
import { Colors } from '../../../tokens'
import { ThemeType } from '../../../types'

const CollapsibleContentStyled = styled.div<{
  $theme: ThemeType
  $open?: boolean
}>`
  height: ${({ $open }) => ($open ? 'fit-content' : '0px')};
  opacity: ${({ $open }) => ($open ? '1' : '0')};
  overflow: hidden;
  color: ${({ $theme }) => Colors[$theme].neutral.neutral400};
  transition: 0.3s ease-out;
`

export { CollapsibleContentStyled }
