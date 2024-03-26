import { PurchaseSummaryDiscountItem } from '../type'

type PurchaseSummaryAccordionProps = {
  title: string
  total: number | string
  listDiscount?: Array<PurchaseSummaryDiscountItem>
}

export type { PurchaseSummaryAccordionProps }
