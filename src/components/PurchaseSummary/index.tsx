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
  productsPrice,
  deliveryCost,
  totalDiscount,
  totalPrice,
  installmentPayment,
  discounts,
}) => {
  const itemsTitleText = totalitems <= 1 ? 'item' : 'itens';
  const hasDiscounts = discounts && discounts.length > 0;

  const formatPrice = (price: number): string => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <ItemContainer>
        <ItemText>
          {productsLabel}
          <ItemsTitle>
            ({totalitems} {itemsTitleText})
          </ItemsTitle>
          <ProductsPrice>{formatPrice(productsPrice)}</ProductsPrice>
        </ItemText>
      </ItemContainer>

      {deliveryValue && (
        <ItemContainer>
          <ItemText>
            {deliveryValue}
            <DeliveryPrice >{formatPrice(deliveryCost)}</DeliveryPrice>
          </ItemText>
        </ItemContainer> 
      )}
      
      {hasDiscounts && (
        <ItemContainer>
          <PurchaseSummaryAccordion
            title="Total de descontos"
            value={formatPrice(totalDiscount)}
            listDiscount={discounts}
          />
        </ItemContainer>
      )}

      <LineDivider />

      <Footer>
        <FooterTitle>Total</FooterTitle>
        <FooterItems>
          <Total>R${totalPrice.toFixed(2).replace('.', ',')}</Total>
          {installmentPayment && <PaymentInstallments>{installmentPayment}</PaymentInstallments>}
        </FooterItems>
      </Footer>
    </Container>
  )
}

export { PurchaseSummary }
