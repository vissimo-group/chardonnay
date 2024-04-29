import React from 'react'

type PaymentMethodsProps = {
  children: React.ReactNode
  title: string
  id: number
  icon: React.ReactNode
  label: string
  labelColor?: string
  installment?: string
  isNewCard?: boolean
}

export type { PaymentMethodsProps }
