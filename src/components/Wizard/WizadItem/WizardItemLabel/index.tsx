import { WizardItemLabelStyled } from './style'
import { WizardItemLabelProps } from './type'

const WizardItemLabel = ({
  content,
  inactive = false,
}: WizardItemLabelProps) => {
  return (
    <WizardItemLabelStyled $inactive={inactive}>
      {content}
    </WizardItemLabelStyled>
  )
}

export { WizardItemLabel }
