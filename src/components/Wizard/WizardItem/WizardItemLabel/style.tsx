import styled from 'styled-components'
import { Colors } from '../../../../tokens'

const WizardItemLabelStyled = styled.span<{
  $inactive?: boolean
  $bold?: boolean
  $customFontSize?: string
}>`
  font-size: ${(props) =>
    props.$customFontSize ? props.$customFontSize : '0.875rem'};
  color: ${(props) =>
    props.$inactive === true
      ? Colors.light.neutral.neutral200
      : Colors.light.neutral.neutral400};
  font-weight: ${(props) => (props.$bold ? 'bold' : 'normal')};
`

export { WizardItemLabelStyled }
