import styled from 'styled-components'
import { Colors, mediaQueries } from '../../../tokens'

export const AccordionContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
`

export const AccordionHeader = styled.div`
  width: 100%;
  background-color: ${Colors.light.neutral.neutral100};
  color: ${Colors.light.neutral.neutral500};

  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 8px !important;
    
  .chevronIcon {
    color: ${Colors.light.neutral.neutral100};
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 7px;
  }

  .priceHeader {
   margin-left: auto;
   cursor: pointer;
   color: ${Colors.light.feedback.feedbackInfo100};
  }
`

export const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    padding: 0 0 0 11px;
    margin: 0;
  }

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

export const AccordionItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;

  li {
    font-size: 14px;
    color: ${Colors.light.neutral.neutral500};
    padding-left: 8px;
  }

  .itemValue {
    color: #03A678;
  }
`