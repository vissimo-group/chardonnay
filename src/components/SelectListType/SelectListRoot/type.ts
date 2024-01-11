import { HTMLAttributes, ReactNode } from 'react'
import { CommomProps } from '../../../types'

type SelectListRootProp = {
  children: ReactNode
  selected?: boolean
} & HTMLAttributes<HTMLInputElement> &
  CommomProps

export type { SelectListRootProp }
