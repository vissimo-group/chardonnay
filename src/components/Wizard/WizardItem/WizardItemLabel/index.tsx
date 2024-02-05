import { WizardItemLabelStyled } from './style'
import { WizardItemLabelProps } from './type'

const WizardItemLabel = ({
  content,
  inactive = false,
  bold = false,
}: WizardItemLabelProps) => {
  return (
    <WizardItemLabelStyled $inactive={inactive} $bold={bold}>
      {content}
    </WizardItemLabelStyled>
  )
}

export { WizardItemLabel }
