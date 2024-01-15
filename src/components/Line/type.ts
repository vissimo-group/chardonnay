import { HTMLAttributes } from 'react'
import { CommomProps } from '../../types'

type LineProps = {
  maxWidth?: string
  dashed?: boolean
  color?: string
  thickness?: string | undefined
} & HTMLAttributes<HTMLDivElement> &
  CommomProps

export type { LineProps }
