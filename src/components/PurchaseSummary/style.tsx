import styled from 'styled-components'
import { Colors, mediaQueries, BorderRadius } from '../../tokens'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.light.neutral.neutral100};
  flex-wrap: wrap;
  padding: 16px;
  max-width: 420px;
  width: 100%;
  border: 1px solid ${Colors.light.neutral.neutral200};
  border-radius: ${BorderRadius[3]};

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    p, span {
      font-size: 12px;
    }
  }
`

export const Title = styled.h1`
  font-size: 20px;
  margin: 0 0 16px 0;
  color: ${Colors.dark.neutral.neutral600};
`

export const ItemContainer = styled.div`
  margin-bottom: 16px;
`

export const ItemText = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0;
  color: ${Colors.light.neutral.neutral500};

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    width: 100%;
    font-size: 14px;
  }
`

export const ProductsPrice = styled.span`
  font-size: 14px;
  color: ${Colors.light.neutral.neutral500};
`
export const DeliveryPrice = styled.span`
  font-size: 14px;
  color: ${Colors.light.neutral.neutral500};
`

export const LineDivider = styled.hr`
  border: 0;
  border-top: 1px solid ${Colors.light.neutral.neutral200};
  margin: 0 0 16px 0;

`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TotalText = styled.p`
  margin: 0;
`
export const ItemsTitle = styled.span`
  color: ${Colors.light.neutral.neutral500};
  font-weight: bold;
  margin-right: auto;           
  margin-left: 3px;
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: ${BorderRadius[3]};
  border-bottom-right-radius: ${BorderRadius[3]};

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    display: flex;
    flex-direction: row;
  }
`

export const FooterTitle = styled.span`
  font-weight: bold;
  color: ${Colors.light.neutral.neutral500};
`

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

export const Total = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.light.neutral.neutral500};
  text-align: right;

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    font-size: 12px;
  }
`
export const PaymentInstallments = styled.div`
  text-decoration: underline;
  text-underline-offset: 4px;
  color: ${Colors.light.neutral.neutral500};

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    font-size: 12px;
  }
`