import React, { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { BorderRadius, Colors } from '../../tokens'
import { CommomProps, ThemeType } from '../../types'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string
  theme?: ThemeType
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const InputContainer = styled.div<CommomProps>`
  position: relative;
  min-width: 1rem;
  height: 3.438rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-radius: ${BorderRadius['3']};
  border: 1px solid
    ${(props: CommomProps) => Colors[props.theme].neutral.neutral300};

  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: left;
`

const Label = styled.label<CommomProps>`
  position: absolute;
  left: 1rem;
  font-size: 1rem;
  padding: 0 0.5rem;
  color: ${(props: CommomProps) => Colors[props.theme].neutral.neutral400};
  cursor: text;
  transition:
    top 300ms ease-in,
    font-size 300ms ease-in;
  background-color: transparent;
  pointer-events: none;
`

const InputCustom = styled.input`
  flex: 1;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  color: #333;
  padding: 1.25rem;
  background: none;
  outline: none;
  background-color: transparent;

  &:focus ~ ${Label}, &:not(:focus):not(:placeholder-shown) ~ ${Label} {
    top: -0.02rem;
    font-size: 0.8rem;
    left: 0.8rem;
  }

  ${(props) =>
    props.iconLeft &&
    css`
      padding-bottom: 1.25rem;
      padding-left: 0rem;
      padding-right: 1.25rem;
      padding-top: 1.25rem;

      &:focus ~ ${Label}, &:not(:focus):not(:placeholder-shown) ~ ${Label} {
        left: 2.36rem;
      }

      ~ ${Label} {
        left: 2.3rem;
      }
    `}
`

const IconLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`

const IconRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
`

const Input: React.FC<InputProps> = ({
  placeholder,
  theme,
  iconLeft,
  iconRight,
  ...inputProps
}) => {
  return (
    <InputContainer theme={theme as ThemeType}>
      {iconLeft && <IconLeft>{iconLeft}</IconLeft>}
      <InputCustom iconLeft={iconLeft} placeholder="" {...inputProps} />
      <Label theme={theme as ThemeType}>{placeholder}</Label>
      <IconRight>{iconRight}</IconRight>
    </InputContainer>
  )
}

Input.defaultProps = {
  type: 'text',
  theme: 'light',
  placeholder: '',
}

export default Input
