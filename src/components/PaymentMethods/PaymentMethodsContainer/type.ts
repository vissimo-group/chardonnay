import React from 'react'

type PaymentMethodsProps = {
  children: React.ReactNode
  title: string
  paymentData: {
    id: number
    icon: React.ReactNode
    label: string
    installment?: string
    isNewCard?: boolean
  }[]
}

export type { PaymentMethodsProps }
