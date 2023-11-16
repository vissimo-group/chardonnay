import React from 'react'
import styled from 'styled-components'
import { BorderRadius, Colors } from '../../tokens'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string
  icon?: React.ReactNode
  theme?: 'light' | 'dark' | string
  type?: string
  placeholder?: string
}

const InputContainer = styled.div`
  position: relative;
  min-width: 20rem;
  height: 3.438rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-radius: ${BorderRadius['3']};
  border: 1px solid ${(props) => Colors[props.theme].neutral.neutral300};
`

const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 0.8rem;
  font-size: 1rem;
  padding: 0 0.5rem;
  color: ${(props) => Colors[props.theme].neutral.neutral400};
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
  type = 'text',
  placeholder = '',
  icon,
  theme = 'light',
  ...props
}) => {
  return (
    <InputContainer theme={theme}>
      <InputCustom type={type} placeholder="" autoComplete="off" {...props} />
      <Label theme={theme}>{placeholder}</Label>
      <Icon>{icon}</Icon>
    </InputContainer>
  )
}

export default Input
