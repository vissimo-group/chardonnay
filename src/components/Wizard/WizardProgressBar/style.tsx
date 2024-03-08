import styled from 'styled-components'
import { Colors } from '../../../tokens'

const WizardProgressBarContainerStyled = styled.div`
  position: relative;
  height: 2px;
  width: calc(100% - 44px);
  margin-bottom: 16.5px;
  background-color: ${Colors.light.neutral.neutral200};
`

const WizardProgressBarChildrenContainerStyled = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: -16.5px;
`

const WizardProgressBarProgressStyled = styled.div<{
  $progress: number
  $error?: boolean
  $customColor?: string
}>`
  height: 100%;
  width: ${(props) => `${props.$progress}%`};
  background-color: ${(props) =>
    props.$error
      ? Colors.light.feedback.feedbackError100
      : Colors.light.action.action100};

  ${(props) => props.$customColor && `background-color: ${props.$customColor};`}
`

const WizardProgressBarOutsideContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

export {
  WizardProgressBarContainerStyled,
  WizardProgressBarChildrenContainerStyled,
  WizardProgressBarProgressStyled,
  WizardProgressBarOutsideContainerStyled,
}
