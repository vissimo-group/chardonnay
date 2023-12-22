import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Colors } from '../../tokens'
import { CommomProps, ThemeType } from '../../types'

import { Radio } from '../Radio'

interface CardAddressProps extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean
  theme?: ThemeType
  typeAddress?: string
  address?: string
  postcode?: string
  complement?: string
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

interface Crosschecked extends CommomProps {
  checked?: boolean
}

const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: center;

  margin-top: 5px;
`

const CardAddressContainer = styled.div<Crosschecked>`
  padding: 11px 8px 11px 8px;
  border-radius: 8px;
  border: 1px solid
    ${(props: Crosschecked) =>
      props.checked
        ? Colors[props.theme as ThemeType].feedback.feedbackInfo100
        : Colors[props.theme as ThemeType].neutral.neutral200};
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props: CommomProps) =>
    Colors[props.theme as ThemeType].neutral.neutral500};

  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: center;
`

const AddressDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const AddressLine = styled.span`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.0025em;
  text-align: left;
`

const ComplementLine = styled.span<CommomProps>`
  margin-bottom: 8px;
  color: ${(props: CommomProps) =>
    Colors[props.theme as ThemeType].neutral.neutral300};
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.0025em;
  text-align: left;
`

const CardAddress: React.FC<CardAddressProps> = ({
  checked,
  theme,
  typeAddress,
  address,
  postcode,
  complement,
  ...props
}) => {
  const Theme = theme as ThemeType
  return (
    <CardAddressContainer checked={checked as boolean} theme={Theme}>
      <Flex>
        <Radio theme={Theme} checked={checked} {...props} />

        <Label>{typeAddress}</Label>
      </Flex>
      <AddressDetails>
        <AddressLine>{address}</AddressLine>
        <AddressLine>CEP: {postcode}</AddressLine>
        {complement && (
          <ComplementLine theme={Theme}>{complement}</ComplementLine>
        )}
      </AddressDetails>
    </CardAddressContainer>
  )
}

CardAddress.defaultProps = {
  checked: false,
  theme: 'light',
  typeAddress: 'Casa',
  address: 'evino',
  postcode: '29999999',
  complement: 'evino',
}

export default CardAddress
