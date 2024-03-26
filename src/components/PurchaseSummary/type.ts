type PurchaseSummaryProps = {
  title?: string
  productsLabel: string
  labelItensText: string
  deliveryValue?: string
  totalitems: number
  productsPrice: number
  deliveryCost: number
  totalDiscount: number
  totalPrice: number
  installmentPayment?: string
  discounts: Array<PurchaseSummaryDiscountItem>
}

type PurchaseSummaryDiscountItem = {
  id: number
  title: string
  price: string
}

export type { PurchaseSummaryProps, PurchaseSummaryDiscountItem }
