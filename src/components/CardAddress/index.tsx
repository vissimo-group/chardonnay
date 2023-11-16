import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../tokens'

interface CardAddressProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked: boolean
  theme: 'light' | 'dark'
  typeAddress?: string
  address?: string
  postcode?: string
  complement?: string
}

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
`

const RadioButtonInput = styled.input<{ checked: boolean; theme: string }>`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ theme }) => Colors[theme].neutral.neutral100};
  outline: none;
  cursor: pointer;
  border: 2px solid ${({ theme }) => Colors[theme].neutral.neutral400};

  &:checked {
    border: 4px solid
      ${({ checked, theme }) =>
        checked
          ? Colors[theme].action.action100
          : Colors[theme].neutral.neutral100};
    background-color: ${({ checked, theme }) =>
      checked ? Colors[theme].neutral.neutral100 : 'transparent'};
  }
`

const RadioButtonText = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: center;
`

const CardAddressContainer = styled.div<{ checked: boolean; theme: string }>`
  padding: 11px 8px 11px 8px;
  border-radius: 8px;
  border: 1px solid
    ${({ checked, theme }) =>
      checked
        ? Colors[theme].feedback.feedbackInfo100
        : Colors[theme].neutral.neutral200};
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => Colors[theme].neutral.neutral500};
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

const ComplementLine = styled.span`
  margin-bottom: 8px;
  color: ${({ theme }) => Colors[theme].neutral.neutral300};
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
  return (
    <CardAddressContainer checked={checked} theme={theme}>
      <RadioButtonLabel theme={theme}>
        <RadioButtonInput
          {...props}
          theme={theme}
          type="radio"
          checked={checked}
        />
        <RadioButtonText>{typeAddress}</RadioButtonText>
      </RadioButtonLabel>
      <AddressDetails>
        <AddressLine>{address}</AddressLine>
        <AddressLine>CEP: {postcode}</AddressLine>
        {complement && (
          <ComplementLine theme={theme}>{complement}</ComplementLine>
        )}
      </AddressDetails>
    </CardAddressContainer>
  )
}

CardAddress.defaultProps = {
  checked: false,
  theme: 'light',
  typeAddress: 'Casa',
  address: '',
  postcode: '',
  complement: '',
}

export default CardAddress
