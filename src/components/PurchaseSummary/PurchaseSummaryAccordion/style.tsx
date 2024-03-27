import styled from 'styled-components'
import { Colors, mediaQueries } from '../../../tokens'

const PurchaseSummaryAccordionAccordionContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
`

const PurchaseSummaryAccordionAccordionHeader = styled.div`
  width: 100%;
  background-color: ${Colors.light.neutral.neutral100};
  color: ${Colors.light.neutral.neutral500};

  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 8px !important;
`

const PurchaseSummaryAccordionAccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${mediaQueries.screenXxs}) {
    ul {
      padding: 0 0 0 8px;
      font-size: 12px;

      li {
        font-size: 12px;
      }
    }
  }
`

const PurchaseSummaryAccordionAccordionItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;

  .itemValue {
    color: ${Colors.light.action.action100};
  }
`

const PurchaseSummaryAccordionPriceHeader = styled.span`
  margin-left: auto;
  cursor: pointer;
  color: ${Colors.light.feedback.feedbackInfo100};
`

const PurchaseSummaryAccordionTitle = styled.span`
  font-size: 14px;
  color: ${Colors.light.neutral.neutral500};
  font-weight: 400;
`

const PurchaseSummaryAccordionchevronIcon = styled.span`
  color: ${Colors.light.neutral.neutral100};
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 7px;
`

const PurchaseSummaryAccordionAccordionTitle = styled.li`
  font-size: 14px;
  color: ${Colors.light.neutral.neutral500};
  padding-left: 8px;
`

const PurchaseSummaryAccordionItemValue = styled.span`
  color: ${Colors.light.action.action100};
`

const PurchaseSummaryAccordionAccordionSpanTitle = styled.span`
  color: ${Colors.light.neutral.neutral500};
`

const PurchaseSummaryAccordionAccordionUlItens = styled.ul`
  padding: 0 0 0 11px;
  margin: 0;
`

export {
  PurchaseSummaryAccordionAccordionContainer,
  PurchaseSummaryAccordionAccordionHeader,
  PurchaseSummaryAccordionAccordionContent,
  PurchaseSummaryAccordionAccordionItem,
  PurchaseSummaryAccordionPriceHeader,
  PurchaseSummaryAccordionTitle,
  PurchaseSummaryAccordionchevronIcon,
  PurchaseSummaryAccordionItemValue,
  PurchaseSummaryAccordionAccordionTitle,
  PurchaseSummaryAccordionAccordionSpanTitle,
  PurchaseSummaryAccordionAccordionUlItens,
}
