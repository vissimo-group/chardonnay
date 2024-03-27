import styled from 'styled-components'
import { Colors, mediaQueries } from '../../tokens'

const BillingAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.light.background.background200};
`

const BillingAddressContainerHeader = styled.div`
  display: flex;
  fkex-direction: row;
  justify-content: baseline;
  align-items: center;
  gap: 8px;

  & > span > svg {
    cursor: pointer;
  }
`

const BillingAddressLabelText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.light.neutral.neutral500};

  @media screen and (max-width: ${mediaQueries.screenXs}) {
    font-size: 14px;
    color: ${Colors.light.neutral.neutral500};
  }
`

const BillingAddressContainerWrap = styled.br`
  @media screen and (max-width: ${mediaQueries.screenXs}) {
    display: none;
  }
`

const BillingAddressContainerContent = styled.div`
  display: block;
  padding: 0 0 0 26px;
  margin-top: -10px;
  width: 100%;
`

const BillingAddressParagraph = styled.p`
  font-size: 12px;
  color: ${Colors.light.neutral.neutral400};
  line-height: 15px;
  word-wrap: break-word;

  @media screen and (max-width: ${mediaQueries.screenXs}) {
    font-size: 12px;
    line-height: 15px;
  }
`

const BillingAddressLabelLinkContainer = styled.p`
  color: ${Colors.light.neutral.neutral500};
  font-weight: 600;
  padding: 0 0 0 26px;
  text-decoration: underline;
  cursor: pointer;
  margin: 0px;
`

const BillingAddresCheckboxContainer = styled.div`
  margin-top: 5px;
`

export {
  BillingAddressContainer,
  BillingAddressContainerHeader,
  BillingAddressLabelText,
  BillingAddressContainerContent,
  BillingAddressParagraph,
  BillingAddressLabelLinkContainer,
  BillingAddresCheckboxContainer,
  BillingAddressContainerWrap,
}
