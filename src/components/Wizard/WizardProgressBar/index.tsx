import {
  WizardProgressBarContainerStyled,
  WizardProgressBarChildrenContainerStyled,
  WizardProgressBarProgressStyled,
} from './style'
import { WizardProgressBarProps } from './type'

const WizardProgressBar = ({
  children,
  progress = 0,
  error = false,
}: WizardProgressBarProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <WizardProgressBarContainerStyled>
        <WizardProgressBarProgressStyled $progress={progress} $error={error} />
      </WizardProgressBarContainerStyled>

      {children && (
        <WizardProgressBarChildrenContainerStyled>
          {children}
        </WizardProgressBarChildrenContainerStyled>
      )}
    </div>
  )
}

export { WizardProgressBar }
