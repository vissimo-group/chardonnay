import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { Colors } from '../../tokens'
import { CommomProps } from '../../types'

/* eslint-disable */

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    theme?: string
    error?: boolean | undefined
    hasValue?: string | undefined | boolean
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
}

const IconRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  pointer-events: none;

  transition: transform 0.5s ease;
`

const SelectContainer = styled.div<SelectProps>`
  position: relative;
  min-width: 1rem;
  height: 3.438rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid
  ${(props: CommomProps) => Colors[props.theme].neutral.neutral400};

  border-color: ${({ error, theme }:SelectProps & CommomProps) =>
    error && Colors[theme].feedback.feedbackError100};

  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: left;

`

const Label = styled.label<SelectProps>`
  position: absolute;
  left: 0.7rem;
  top: ${({hasValue}) => (hasValue ? '-0.02rem' : '0.rem')};
  font-size: ${({hasValue}) => (hasValue ? '0.8rem' : '1rem')};
  padding: 0 0.5rem;
  color: ${(props: CommomProps) => Colors[props.theme].neutral.neutral300};
  cursor: text;
  transition:
    top 300ms ease-in,
    font-size 300ms ease-in;
  background-color: transparent;
`

const SelectCustom = styled.select<SelectProps>`
  flex: 1;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  color: #333;
  padding: 1.25rem;
  background: none;
  outline: none;
  background-color: transparent;
  position: relative;
  z-index: 1;
  appearance: none;
  -webkit-appearance: none;
  top: 0.19rem;

  ${({ iconLeft }) =>
    iconLeft &&
    css`
      padding-bottom: 1.25rem;
      padding-left: 0rem;
      padding-right: 1.25rem;
      padding-top: 1.25rem;

      ~ ${Label} {
        left: 2.3rem;
      }
    `}

  &:focus ~ ${IconRight} {
    transform: rotateX(180deg);
  }
`

const IconLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  pointer-events: none;
`

const SelectBox: React.ForwardRefRenderFunction<
    HTMLSelectElement,
    SelectProps
    > = (
    {
        theme = 'light',
        label,
        error= false,
        iconLeft,
        iconRight,
        children,
        ...selectProps
    },
    ref,
) => {
    const hasValue = Boolean(selectProps.value)

    return (
        <SelectContainer theme={theme} error={error} hasValue={hasValue}>
            {!!iconLeft && <IconLeft>{iconLeft}</IconLeft>}
            <SelectCustom ref={ref} iconLeft={iconLeft} {...selectProps}>
                <option value="" />
                {children}
            </SelectCustom>
            <Label theme={theme} hasValue={hasValue}>
                {label}
            </Label>
            <IconRight>{iconRight}</IconRight>
        </SelectContainer>
    )
}

export default forwardRef(SelectBox)
