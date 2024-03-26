import { PurchaseSummaryDiscountItemProps } from '../type'

type PurchaseSummaryAccordionProps = {
  title: string
  total: number | string
  listDiscount?: Array<PurchaseSummaryDiscountItemProps>
}

export type { PurchaseSummaryAccordionProps }
