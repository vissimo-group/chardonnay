import { HTMLAttributes } from 'react'

type BorderProps = {
  color?: string
  radius?: string
  borderType?: 'left' | 'right' | 'top' | 'bottom'
} & HTMLAttributes<HTMLDivElement>

export { BorderProps }
