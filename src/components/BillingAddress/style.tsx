import styled from 'styled-components'
import Colors from '../../tokens/colors'

const BillingAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.light.neutral.neutral100};
`

const BillingAddressContainerHeader = styled.div`
  display: flex;
  fkex-direction: row;
  justify-content: baseline;
  align-items: center;
  gap: 8px;
`

const BillingAddressLabelText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.light.neutral.neutral500};
  line-height: 0;
`

const BillingAddressContainerContent = styled.div`
  display: block;
  padding: 0 0 0 33px;
  max-height: 100px;
  background-color:;
`

const BillingAddressInput = styled.input`
  width: 18px;
  height: 18px;
  color: #03a678;
`

const BillingAddressParagraph = styled.p`
  font-size: 16px;
  color: ${Colors.light.neutral.neutral400};
  line-height: 0;
`

const BillingAddressLabelLinkContainer = styled.p`
  color: ${Colors.light.neutral.neutral500};
  font-weight: 600;
  padding: 0 0 0 28px;
  text-decoration: underline;
  cursor: pointer;
`

export {
  BillingAddressContainer,
  BillingAddressContainerHeader,
  BillingAddressLabelText,
  BillingAddressContainerContent,
  BillingAddressInput,
  BillingAddressParagraph,
  BillingAddressLabelLinkContainer,
}
