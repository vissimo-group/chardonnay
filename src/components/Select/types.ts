import React, { SelectHTMLAttributes } from 'react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  theme?: string
  error?: boolean
  hasValue?: string | undefined | boolean
  disabled?: boolean | undefined
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

export interface SelectRef {
  value?: string | undefined
}
