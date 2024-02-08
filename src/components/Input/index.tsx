import React, { forwardRef, HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { BorderRadius, Colors } from '../../tokens'
import { CommomProps, ThemeType } from '../../types'

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  theme?: ThemeType
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const InputContainer = styled.div<InputProps>`
  position: relative;
  min-width: 1rem;
  height: 3.438rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-radius: ${BorderRadius['3']};
  border: 1px solid
    ${(props: CommomProps) => Colors[props.theme].neutral.neutral400};

  border-color: ${({ error, theme }: InputProps & CommomProps) =>
    error && Colors[theme].feedback.feedbackError100};

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
  color: ${(props: CommomProps) => Colors[props.theme].neutral.neutral300};
  cursor: text;
  transition:
    top 300ms ease-in,
    font-size 300ms ease-in;
  background-color: transparent;
  pointer-events: none;
`

const InputCustom = styled.input<InputProps>`
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
    width: 100%;
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
        top: 1rem;
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

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error = false, label, theme = 'light', iconLeft, iconRight, ...res },
  ref,
) => {
  return (
    <InputContainer error={error} theme={theme as ThemeType}>
      {!!iconLeft && <IconLeft>{iconLeft}</IconLeft>}
      <InputCustom ref={ref} placeholder="" iconLeft={iconLeft} {...res} />
      <Label theme={theme as ThemeType}>{label}</Label>
      <IconRight>{iconRight}</IconRight>
    </InputContainer>
  )
}

export default forwardRef(Input)
