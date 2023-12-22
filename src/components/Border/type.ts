import { HTMLAttributes } from 'react'
import { CommomProps } from '../../types'

type BorderProps = {
  color?: string
  radius?: string
  borderType?: 'left' | 'right' | 'top' | 'bottom' | undefined
  bg?: string
} & HTMLAttributes<HTMLDivElement> &
  CommomProps

export { BorderProps }
