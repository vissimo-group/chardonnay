import React from 'react'
import { PurchaseSummaryProps } from './type'
import {
  Container,
  Title,
  ItemContainer,
  ItemText,
  ProductsPrice,
  DeliveryPrice,
  ItemsTitle,
  LineDivider,
  Footer,
  FooterItems,
  FooterTitle,
  PaymentInstallments,
  Total,
} from './style'

import { PurchaseSummaryAccordion } from './PurchaseSummaryAccordion/index'

const PurchaseSummary: React.FC<PurchaseSummaryProps> = ({
  title,
  productsLabel,
  deliveryValue,
  totalitems,
  labelItensText,
  productsPrice,
  deliveryCost,
  totalDiscount,
  totalPrice,
  installmentPayment,
  discounts,
}) => {
  const hasDiscounts = discounts && discounts.length > 0;

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <ItemContainer>
        <ItemText>
          {productsLabel}
          <ItemsTitle>
            ({totalitems} {labelItensText})
          </ItemsTitle>
          <ProductsPrice>{productsPrice}</ProductsPrice>
        </ItemText>
      </ItemContainer>

      {deliveryValue && (
        <ItemContainer>
          <ItemText>
            {deliveryValue}
            <DeliveryPrice >{deliveryCost}</DeliveryPrice>
          </ItemText>
        </ItemContainer> 
      )}
      
      {hasDiscounts && (
        <ItemContainer>
          <PurchaseSummaryAccordion
            title="Total de descontos"
            value={totalDiscount}
            listDiscount={discounts}
          />
        </ItemContainer>
      )}

      <LineDivider />

      <Footer>
        <FooterTitle>Total</FooterTitle>
        <FooterItems>
          <Total>R${totalPrice}</Total>
          {installmentPayment && <PaymentInstallments>{installmentPayment}</PaymentInstallments>}
        </FooterItems>
      </Footer>
    </Container>
  )
}

export { PurchaseSummary }
