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
  customColor,
}: WizardProgressBarProps) => {
  console.log('##### customColor: ', customColor)

  return (
    <WizardProgressBarOutsideContainerStyled>
      <WizardProgressBarContainerStyled>
        <WizardProgressBarProgressStyled
          $progress={progress}
          $error={error}
          $customColor={customColor}
        />
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
