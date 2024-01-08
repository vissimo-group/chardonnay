import { SelectHTMLAttributes } from 'react'

type SelectProps = {
  children: React.ReactNode
  error?: boolean
} & SelectHTMLAttributes<HTMLSelectElement>

export type { SelectProps }
