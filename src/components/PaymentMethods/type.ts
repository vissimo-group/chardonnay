import { HTMLAttributes } from 'react'

type PaymentMethodsProps = {
  label?: string | undefined
  icon?: JSX.Element
  installment?: string
  children?: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export type { PaymentMethodsProps }
