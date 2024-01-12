import { CheckboxStyled } from './style'
import { CheckboxProps } from './types'

const Checkbox = ({ theme = 'light', ...props }: CheckboxProps) => {
  return <CheckboxStyled {...props} type="checkbox" $theme={theme} />
}

export { Checkbox }
