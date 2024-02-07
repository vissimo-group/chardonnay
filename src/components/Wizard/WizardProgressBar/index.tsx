import {
  WizardProgressBarContainerStyled,
  WizardProgressBarChildrenContainerStyled,
  WizardProgressBarProgressStyled,
  WizardProgressBarOutsideContainerStyled,
} from './style'
import { WizardProgressBarProps } from './type'

const WizardProgressBar = ({
  children,
  progress = 0,
  error = false,
}: WizardProgressBarProps) => {
  return (
    <WizardProgressBarOutsideContainerStyled>
      <WizardProgressBarContainerStyled>
        <WizardProgressBarProgressStyled $progress={progress} $error={error} />
      </WizardProgressBarContainerStyled>

      {children && (
        <WizardProgressBarChildrenContainerStyled>
          {children}
        </WizardProgressBarChildrenContainerStyled>
      )}
    </WizardProgressBarOutsideContainerStyled>
  )
}

export { WizardProgressBar }
