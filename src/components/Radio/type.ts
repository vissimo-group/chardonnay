import { HTMLAttributes } from 'react'
import { CommomProps } from '../../types'

interface RadioContentProps
  extends CommomProps,
    HTMLAttributes<HTMLInputElement> {
  color?: string | undefined
  checked?: boolean | undefined
}

export type { RadioContentProps }
