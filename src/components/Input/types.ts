import React, { HTMLAttributes } from 'react'
import { ThemeType } from '../../types'

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string
  error?: null | undefined | boolean
  mask?: string | [] | undefined
  value?: string | undefined
  theme?: ThemeType
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

export interface InputRef {
  value: string | undefined
}
