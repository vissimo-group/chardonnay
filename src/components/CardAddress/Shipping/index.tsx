import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Delivery } from 'semillon'
import { CommomProps, ThemeType } from '../../../types'
import { Colors } from '../../../tokens'

interface HeaderProps extends HTMLAttributes<HTMLButtonElement> {}

export interface ShippingAddressProps extends HeaderProps {
  typeAddress?: string | undefined
  theme?: ThemeType
  address?: string | undefined
  deadline?: string | undefined
  name?: string | undefined
  tel?: string | undefined
}

const ContainerHeader = styled.header<ShippingAddressProps>`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 16px 24px 16px 16px;
  gap: 16px;
  border-bottom: 1px solid
    ${(props: CommomProps) => Colors[props.theme].neutral.neutral200};
`

const ContainerShipping = styled.div<ShippingAddressProps>`
  border: 1px solid
    ${(props: CommomProps) => Colors[props.theme].neutral.neutral200};
  border-radius: 8px;

  color: ${(props: CommomProps) => Colors[props.theme].neutral.neutral500};
`

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: left;
`

const Button = styled.button`
  margin-left: auto;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: left;
  background: none;
  border: none;
  color: inherit;
  outline: none;
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
`

const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 16px 16px;
  gap: 8px;
`

const ContainerDeadline = styled.div``
const Deadline = styled.span`
  font-weight: bold;
`

const Line = styled.div<ShippingAddressProps>`
  border: 1px solid
    ${(props: CommomProps) => Colors[props.theme].neutral.neutral200};
  margin: 8px 0;
`

const Text = styled.span``
const DataUser = styled.div`
  display: flex;
  flex-direction: column;
`

const ShippingAddress: React.FC<ShippingAddressProps> = ({
  typeAddress,
  address,
  deadline,
  name,
  tel,
  theme,
  ...propsButton
}) => {
  const colorIcon = Colors[theme as ThemeType].neutral.neutral400
  return (
    <ContainerShipping theme={theme}>
      <ContainerHeader theme={theme}>
        <Delivery size={24} color={colorIcon} />
        <Title>{typeAddress}</Title>
        <Button {...propsButton}>Editar</Button>
      </ContainerHeader>
      <ContainerBody>
        <Text>{address}</Text>
        <ContainerDeadline>
          Prazo de entrega: <Deadline>{deadline}</Deadline>
        </ContainerDeadline>
        <Line theme={theme} />
        <DataUser>
          <Text>{name}</Text>
          <Text>{tel}</Text>
        </DataUser>
      </ContainerBody>
    </ContainerShipping>
  )
}

ShippingAddress.defaultProps = {
  typeAddress: ' ',
  address: ' ',
  deadline: ' ',
  name: ' ',
  tel: ' ',
  theme: 'light',
}

export default ShippingAddress
