import { InputHTMLAttributes } from 'react'
import { ThemeType } from '../../types/index'

type CheckboxProps = {
  theme: ThemeType
} & InputHTMLAttributes<HTMLInputElement>

export type { CheckboxProps }
