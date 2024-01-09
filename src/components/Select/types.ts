import { SelectHTMLAttributes } from 'react'

type SelectProps = {
  children: React.ReactNode
  error?: boolean
  fontSize?: number
  expand?: boolean
  responsible?: boolean
} & SelectHTMLAttributes<HTMLSelectElement>

export type { SelectProps }
