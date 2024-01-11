import { SelectHTMLAttributes } from 'react'
import { ThemeType } from '../../types/index'

type SelectProps = {
  children: React.ReactNode
  error?: boolean
  fontSize?: number
  expand?: boolean
  responsible?: boolean
  theme: ThemeType
} & SelectHTMLAttributes<HTMLSelectElement>

export type { SelectProps }
