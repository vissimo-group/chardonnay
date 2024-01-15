import { ReactNode, HTMLAttributes } from 'react'
import { ThemeType } from '../../../types'

type CollapsibleContentProps = {
  children: ReactNode
  theme?: ThemeType
} & HTMLAttributes<HTMLDivElement>

export type { CollapsibleContentProps }
