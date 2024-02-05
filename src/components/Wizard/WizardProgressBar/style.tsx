import styled from 'styled-components'
import { Colors } from '../../../tokens'

const WizardProgressBarContainerStyled = styled.div`
  position: relative;
  height: 2px;
  width: calc(100% - 44px);
  margin-bottom: 16.5px;
  background-color: ${Colors.light.neutral.neutral100};
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
}>`
  height: 100%;
  width: ${(props) => `${props.$progress}%`};
  background-color: ${(props) =>
    props.$error
      ? Colors.light.feedback.feedbackError100
      : Colors.light.action.action100};
`
export {
  WizardProgressBarContainerStyled,
  WizardProgressBarChildrenContainerStyled,
  WizardProgressBarProgressStyled,
}
