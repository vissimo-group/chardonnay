import styled from 'styled-components'
import { WizardItemPointVariantTypes } from './type'
import { Colors } from '../../../../tokens'

const variantColors = {
  ACTIVE: Colors.light.action.action100,
  INACTIVE: Colors.light.neutral.neutral100,
  ERROR: Colors.light.feedback.feedbackError100,
}

const WizardItemPointStyled = styled.div<{
  $variant: WizardItemPointVariantTypes
  $customColor?: string
}>`
  width: 37px;
  height: 37px;
  border-radius: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => variantColors[props.$variant]};
  color: ${(props) =>
    props.$variant === 'INACTIVE'
      ? Colors.light.neutral.neutral200
      : Colors.light.neutral.neutral100};
  border: ${(props) =>
    props.$variant === 'INACTIVE'
      ? `2px solid ${Colors.light.neutral.neutral200}`
      : 'none'};

  ${(props) =>
    props.$customColor &&
    `background-color: ${props.$customColor};
     border: 2px solid ${props.$customColor};`}
`

export { WizardItemPointStyled }
