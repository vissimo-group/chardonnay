import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { BorderRadius, Colors } from '../../tokens'
import { Props, ThemeType } from '../../types'

interface InputProps {
  label?: string
  icon?: React.ReactNode
  theme?: ThemeType
  type?: string
  placeholder?: string
  inputProps: HTMLAttributes<HTMLInputElement>
}

const InputContainer = styled.div<Props>`
  position: relative;
  min-width: 20rem;
  height: 3.438rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-radius: ${BorderRadius['3']};
  border: 1px solid ${(props: Props) => Colors[props.theme].neutral.neutral300};

  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: left;

`

const Label = styled.label<Props>`
  position: absolute;
  left: 1rem;
  top: 0.8rem;
  font-size: 1rem;
  padding: 0 0.5rem;
  color: ${(props: Props) => Colors[props.theme].neutral.neutral400};
  cursor: text;
  transition:
    top 150ms ease-in,
    left 150ms ease-in,
    font-size 150ms ease-in;
  background-color: transparent;
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

  &:focus ~ ${Label} {
    top: -0.02rem;
    font-size: 0.8rem;
    left: 0.8rem;
  }

  &:not(:focus):not(:placeholder-shown) ~ ${Label} {
    top: -0.02rem;
    font-size: 0.8rem;
    left: 0.8rem;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
`

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  icon,
  theme,
  ...inputProps
}) => {
  return (
    <InputContainer theme={theme as ThemeType}>
      <InputCustom
        type={type}
        placeholder=""
        autoComplete="off"
        {...inputProps}
      />
      <Label theme={theme as ThemeType}>{placeholder}</Label>
      <Icon>{icon}</Icon>
    </InputContainer>
  )
}

Input.defaultProps = {
  type: 'text',
  theme: 'light',
  placeholder: '',
}

export default Input
