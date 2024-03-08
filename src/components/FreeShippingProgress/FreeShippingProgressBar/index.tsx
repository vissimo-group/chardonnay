import {
  FreeShippingProgressBarContainerStyled,
  FreeShippingProgressBarProgressStyled,
} from './styles'
import { FreeShippingProgressBarProps } from './type'

const FreeShippingProgressBar = ({
  progress = 0,
}: FreeShippingProgressBarProps) => {
  return (
    <FreeShippingProgressBarContainerStyled>
      <FreeShippingProgressBarProgressStyled $progress={progress} />
    </FreeShippingProgressBarContainerStyled>
  )
}

export { FreeShippingProgressBar }
