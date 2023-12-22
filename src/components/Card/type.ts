import { HTMLAttributes, ReactNode } from 'react'
import { CommomProps } from '../../types'

type CardProps = {
  selected?: boolean
  maxWidth?: string | undefined
  children: ReactNode
} & HTMLAttributes<HTMLDivElement> &
  CommomProps

export { CardProps }
