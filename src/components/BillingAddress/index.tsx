import React from 'react'
import { Info } from 'semillon'
import { BillingAddressProps } from './type'
import {
  BillingAddressContainer,
  BillingAddressContainerHeader,
  BillingAddressLabelText,
  BillingAddressContainerContent,
  BillingAddressParagraph,
  BillingAddressLabelLinkContainer,
  BillingAddresCheckboxContainer,
  BillingAddressContainerWrap,
} from './style'
import { Checkbox } from '../Checkbox'

const BillingAddress: React.FC<BillingAddressProps> = ({
  label,
  address,
  postcode,
  complement,
  labelLink,
}) => {
  return (
    <BillingAddressContainer>
      <BillingAddressContainerHeader>
        <BillingAddresCheckboxContainer>
          <Checkbox theme="light" />
        </BillingAddresCheckboxContainer>
        <BillingAddressLabelText>{label}</BillingAddressLabelText>
        <Info size={16} color="#585757" />
      </BillingAddressContainerHeader>

      <BillingAddressContainerContent>
        <BillingAddressParagraph>
          {address} <BillingAddressContainerWrap />
          {complement} <BillingAddressContainerWrap />
          {postcode}
        </BillingAddressParagraph>
      </BillingAddressContainerContent>

      <BillingAddressLabelLinkContainer>
        {labelLink}
      </BillingAddressLabelLinkContainer>
    </BillingAddressContainer>
  )
}

export { BillingAddress }
