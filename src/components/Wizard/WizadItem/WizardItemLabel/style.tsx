import styled from 'styled-components'
import { Colors } from '../../../../tokens'

const WizardItemLabelStyled = styled.span<{ $inactive?: boolean }>`
  font-size: 0.875rem;
  color: ${(props) =>
    props.$inactive === true
      ? Colors.light.neutral.neutral200
      : Colors.light.neutral.neutral400};
`

export { WizardItemLabelStyled }
