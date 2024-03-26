import React from 'react'
import { Edit } from 'semillon'
import { BillingAddressProps } from './type'
import {
  BillingAddressContainer,
  BillingAddressContainerHeader,
  BillingAddressLabelText,
  BillingAddressContainerContent,
  BillingAddressInput,
  BillingAddressParagraph,
  BillingAddressLabelLinkContainer,
} from './style'

const BillingAddress: React.FC<BillingAddressProps> = ({
  label,
  address,
  postcode,
  complement,
  checked,
  labelLink,
}) => {
  return (
    <BillingAddressContainer>
      <BillingAddressContainerHeader>
        <BillingAddressInput type="checkbox" checked={checked} />
        <BillingAddressLabelText>{label}</BillingAddressLabelText>
        <Edit size={16} />
      </BillingAddressContainerHeader>

      <BillingAddressContainerContent>
        <BillingAddressParagraph>{address}</BillingAddressParagraph>
        <BillingAddressParagraph>{complement}</BillingAddressParagraph>
        <BillingAddressParagraph>{postcode}</BillingAddressParagraph>
      </BillingAddressContainerContent>

      <BillingAddressLabelLinkContainer>
        {labelLink}
      </BillingAddressLabelLinkContainer>
    </BillingAddressContainer>
  )
}

export { BillingAddress }
