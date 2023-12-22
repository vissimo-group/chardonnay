import { HTMLAttributes, ReactNode } from 'react'
import { RadioContentProps } from '../Radio/type'
import { TextProps } from '../Text/type'
import { CommomProps } from '../../types'

type SelectListTitleProp = { children: string } & TextProps & CommomProps

type SelectListRootProp = {
  children: ReactNode
} & HTMLAttributes<HTMLInputElement>

type SelectListRadioProp = null & RadioContentProps & CommomProps

type SelectListActionProps = null &
  HTMLAttributes<HTMLButtonElement> &
  CommomProps

export {
  SelectListTitleProp,
  SelectListRootProp,
  SelectListRadioProp,
  SelectListActionProps,
}
