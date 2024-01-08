import { SelectStyled } from './style'
import { SelectProps } from './types'

const Select = ({ children, error = false, ...props }: SelectProps) => {
  return (
    <SelectStyled $error={error} {...props}>
      {children}
    </SelectStyled>
  )
}

export { Select }
