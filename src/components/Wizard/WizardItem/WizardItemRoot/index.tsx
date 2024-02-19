import { WizardItemRootStyled } from './style'
import { WizardItemRootProps } from './type'

const WizardItemRoot = ({ children }: WizardItemRootProps) => {
  return <WizardItemRootStyled>{children}</WizardItemRootStyled>
}

export { WizardItemRoot }
