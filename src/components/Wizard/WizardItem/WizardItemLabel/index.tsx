import { WizardItemLabelStyled } from './style'
import { WizardItemLabelProps } from './type'

const WizardItemLabel = ({
  content,
  inactive = false,
  bold = false,
  customFontSize,
}: WizardItemLabelProps) => {
  return (
    <WizardItemLabelStyled
      $inactive={inactive}
      $bold={bold}
      $customFontSize={customFontSize}
    >
      {content}
    </WizardItemLabelStyled>
  )
}

export { WizardItemLabel }
