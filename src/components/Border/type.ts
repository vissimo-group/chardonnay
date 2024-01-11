import { HTMLAttributes } from 'react'
import { CommomProps } from '../../types'

type BorderProps = {
  color?: string
  radius?: string
  borderType?: Array<'left' | 'right' | 'top' | 'bottom'> | undefined
  bg?: string
} & HTMLAttributes<HTMLDivElement> &
  CommomProps

export type { BorderProps }
