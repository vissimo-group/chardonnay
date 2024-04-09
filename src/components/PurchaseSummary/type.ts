type PurchaseSummaryProps = {
  title?: string
  productsLabel: string
  labelItensText: string
  deliveryValue?: string
  totalItems: number
  productsPrice: number
  deliveryCost: number
  totalDiscount: number
  totalPrice: number
  installmentPayment?: string
  discounts: Array<PurchaseSummaryDiscountItemProps>
  children?: React.ReactNode
  discountLabel: string
}

type PurchaseSummaryDiscountItemProps = {
  id: number
  title: string
  price: string
}

export type { PurchaseSummaryProps, PurchaseSummaryDiscountItemProps }
