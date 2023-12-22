import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Colors } from '../../../tokens'
import { CommomProps, ThemeType } from '../../../types'

interface CardAddressProps extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean
  theme?: ThemeType
  typeAddress?: string
  address?: string
  postcode?: string
  complement?: string
}

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
`

interface Crosschecked extends CommomProps {
  checked: boolean
}

const RadioButtonInput = styled.input<Crosschecked & { checked?: boolean }>`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props: CommomProps) =>
    Colors[props.theme].neutral.neutral100};
  outline: none;
  cursor: pointer;
  border: 2px solid
    ${(props: CommomProps) => Colors[props.theme].neutral.neutral400};

  &:checked {
    border: 4px solid
      ${(props: Crosschecked) =>
        props.checked
          ? Colors[props.theme].action.action100
          : Colors[props.theme].neutral.neutral100};
    background-color: ${(props: Crosschecked) =>
      props.checked ? Colors[props.theme].neutral.neutral100 : 'transparent'};
  }
`

const RadioButtonText = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: center;
`

const CardAddressContainer = styled.div<Crosschecked>`
  padding: 11px 8px 11px 8px;
  border-radius: 8px;
  border: 1px solid
    ${(props: Crosschecked) =>
      props.checked
        ? Colors[props.theme].feedback.feedbackInfo100
        : Colors[props.theme].neutral.neutral200};
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props: CommomProps) => Colors[props.theme].neutral.neutral500};

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
  color: ${(props: CommomProps) => Colors[props.theme].neutral.neutral300};
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.0025em;
  text-align: left;
`

const SelectAddress: React.FC<CardAddressProps> = ({
  checked,
  theme,
  typeAddress,
  address,
  postcode,
  complement,
  ...cardAddressProps
}) => {
  return (
    <CardAddressContainer
      checked={checked as boolean}
      theme={theme as ThemeType}
    >
      <RadioButtonLabel>
        <RadioButtonInput
          theme={theme as ThemeType}
          type="radio"
          checked={checked as boolean}
          {...cardAddressProps}
        />
        <RadioButtonText>{typeAddress}</RadioButtonText>
      </RadioButtonLabel>
      <AddressDetails>
        <AddressLine>{address}</AddressLine>
        <AddressLine>CEP: {postcode}</AddressLine>
        {complement && (
          <ComplementLine theme={theme as ThemeType}>
            {complement}
          </ComplementLine>
        )}
      </AddressDetails>
    </CardAddressContainer>
  )
}

SelectAddress.defaultProps = {
  checked: false,
  theme: 'light',
}

export default SelectAddress
