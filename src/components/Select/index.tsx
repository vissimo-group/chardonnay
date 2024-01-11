import { SelectStyled } from './style'
import { SelectProps } from './types'

const Select = ({
  children,
  error = false,
  fontSize = 1,
  expand = false,
  responsible = false,
  theme = 'light',
  ...props
}: SelectProps) => {
  return (
    <SelectStyled
      $theme={theme}
      $error={error}
      $fontSize={fontSize}
      $expand={expand}
      $responsible={responsible}
      {...props}
    >
      {children}
    </SelectStyled>
  )
}

export { Select }
