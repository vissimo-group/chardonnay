import { RadioTagContainerStyled } from './style'
import { RadioTagContainerProps } from './type'

const RadioTagContainer = ({ children, width }: RadioTagContainerProps) => {
  return (
    <RadioTagContainerStyled width={width}>{children}</RadioTagContainerStyled>
  )
}

export { RadioTagContainer }
