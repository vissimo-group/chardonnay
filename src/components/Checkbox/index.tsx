import { InputHTMLAttributes } from 'react'
import { CheckboxStyled } from './style'

const Checkbox = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <CheckboxStyled {...props} type="checkbox" />
}

export { Checkbox }
