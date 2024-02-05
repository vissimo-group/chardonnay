import { WizardItemPointStyled } from './style'
import { WizardItemPointProps } from './type'

const WizardItemPoint = ({
  children,
  variant = 'INACTIVE',
}: WizardItemPointProps) => {
  return (
    <WizardItemPointStyled $variant={variant}>{children}</WizardItemPointStyled>
  )
}

export { WizardItemPoint }
