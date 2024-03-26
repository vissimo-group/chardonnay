import styled from 'styled-components'
import { Colors, mediaQueries, BorderRadius } from '../../tokens'

const PurchaseSummaryContainer = styled.div`
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
    p,
    span {
      font-size: 12px;
    }
  }
`

const PurchaseSummaryTitle = styled.h1`
  font-size: 20px;
  margin: 0 0 16px 0;
  color: ${Colors.dark.neutral.neutral600};
`

const PurchaseSummaryItemContainer = styled.div`
  margin-bottom: 16px;
`

const PurchaseSummaryItemText = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0;
  color: ${Colors.light.neutral.neutral500};

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    width: 100%;
    font-size: 14px;
  }
`

const PurchaseSummaryProductsPrice = styled.span`
  font-size: 14px;
  color: ${Colors.light.neutral.neutral500};
`
const PurchaseSummaryDeliveryPrice = styled.span`
  font-size: 14px;
  color: ${Colors.light.neutral.neutral500};
`

const PurchaseSummaryLineDivider = styled.hr`
  border: 0;
  border-top: 1px solid ${Colors.light.neutral.neutral200};
  margin: 0 0 16px 0;
`

const PurchaseSummaryTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PurchaseSummaryTotalText = styled.p`
  margin: 0;
`
const PurchaseSummaryItemsTitle = styled.span`
  color: ${Colors.light.neutral.neutral500};
  font-weight: bold;
  margin-right: auto;
  margin-left: 3px;
`

const PurchaseSummaryFooter = styled.div`
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

const PurchaseSummaryFooterTitle = styled.span`
  font-weight: bold;
  color: ${Colors.light.neutral.neutral500};
`

const PurchaseSummaryFooterItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

const PurchaseSummaryTotal = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.light.neutral.neutral500};
  text-align: right;

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    font-size: 12px;
  }
`
const PurchaseSummaryPaymentInstallments = styled.div`
  text-decoration: underline;
  text-underline-offset: 4px;
  color: ${Colors.light.neutral.neutral500};

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    font-size: 12px;
  }
`
export {
  PurchaseSummaryContainer,
  PurchaseSummaryTitle,
  PurchaseSummaryItemContainer,
  PurchaseSummaryItemText,
  PurchaseSummaryProductsPrice,
  PurchaseSummaryDeliveryPrice,
  PurchaseSummaryLineDivider,
  PurchaseSummaryTotalContainer,
  PurchaseSummaryTotalText,
  PurchaseSummaryItemsTitle,
  PurchaseSummaryFooter,
  PurchaseSummaryFooterTitle,
  PurchaseSummaryFooterItems,
  PurchaseSummaryTotal,
  PurchaseSummaryPaymentInstallments,
}
