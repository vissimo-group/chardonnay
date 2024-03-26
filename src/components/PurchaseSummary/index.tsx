import React from 'react'
import { PurchaseSummaryProps } from './type'
import {
  PurchaseSummaryContainer,
  PurchaseSummaryTitle,
  PurchaseSummaryItemContainer,
  PurchaseSummaryItemText,
  PurchaseSummaryProductsPrice,
  PurchaseSummaryDeliveryPrice,
  PurchaseSummaryItemsTitle,
  PurchaseSummaryLineDivider,
  PurchaseSummaryFooter,
  PurchaseSummaryFooterItems,
  PurchaseSummaryFooterTitle,
  PurchaseSummaryTotal,
  PurchaseSummaryPaymentInstallments,
} from './style'

import { PurchaseSummaryAccordion } from './PurchaseSummaryAccordion/index'

const PurchaseSummary: React.FC<PurchaseSummaryProps> = ({
  title,
  productsLabel,
  deliveryValue,
  totalItems,
  labelItensText,
  productsPrice,
  deliveryCost,
  totalDiscount,
  totalPrice,
  installmentPayment,
  discounts,
}) => {
  const hasDiscounts = discounts && discounts.length > 0

  return (
    <PurchaseSummaryContainer>
      {title && <PurchaseSummaryTitle>{title}</PurchaseSummaryTitle>}
      <PurchaseSummaryItemContainer>
        <PurchaseSummaryItemText>
          {productsLabel}
          <PurchaseSummaryItemsTitle>
            ({totalItems} {labelItensText})
          </PurchaseSummaryItemsTitle>
          <PurchaseSummaryProductsPrice>
            {productsPrice}
          </PurchaseSummaryProductsPrice>
        </PurchaseSummaryItemText>
      </PurchaseSummaryItemContainer>

      {deliveryValue && (
        <PurchaseSummaryItemContainer>
          <PurchaseSummaryItemText>
            {deliveryValue}
            <PurchaseSummaryDeliveryPrice>
              {deliveryCost}
            </PurchaseSummaryDeliveryPrice>
          </PurchaseSummaryItemText>
        </PurchaseSummaryItemContainer>
      )}

      {hasDiscounts && (
        <PurchaseSummaryItemContainer>
          <PurchaseSummaryAccordion
            title="Total de descontos"
            total={totalDiscount}
            listDiscount={discounts}
          />
        </PurchaseSummaryItemContainer>
      )}

      <PurchaseSummaryLineDivider />

      <PurchaseSummaryFooter>
        <PurchaseSummaryFooterTitle>Total</PurchaseSummaryFooterTitle>
        <PurchaseSummaryFooterItems>
          <PurchaseSummaryTotal>{totalPrice}</PurchaseSummaryTotal>
          {installmentPayment && (
            <PurchaseSummaryPaymentInstallments>
              {installmentPayment}
            </PurchaseSummaryPaymentInstallments>
          )}
        </PurchaseSummaryFooterItems>
      </PurchaseSummaryFooter>
    </PurchaseSummaryContainer>
  )
}

export { PurchaseSummary }
