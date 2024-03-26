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
  discounts: Array<DiscountItem>
}

type DiscountItem = {
  id: number;
  title: string;
  value: string;
}

export type { PurchaseSummaryProps, DiscountItem }