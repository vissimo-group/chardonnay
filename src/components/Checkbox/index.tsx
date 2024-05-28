import { forwardRef } from 'react'
import { CheckboxStyled } from './style'
import { CheckboxProps } from './types'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { theme = 'light', ...props },
  ref,
) {
  return <CheckboxStyled {...props} type="checkbox" ref={ref} $theme={theme} />
})

export { Checkbox }
