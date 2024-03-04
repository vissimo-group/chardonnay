import { FreeShippingProgressRootStyled } from './style'
import { FreeShippingProgressRootProps } from './type'

const FreeShippingProgressRoot = ({
  children,
}: FreeShippingProgressRootProps) => {
  return (
    <FreeShippingProgressRootStyled>{children}</FreeShippingProgressRootStyled>
  )
}

export { FreeShippingProgressRoot }
