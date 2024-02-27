import React, { forwardRef, useImperativeHandle, useRef } from 'react'

import {
  SelectContainer,
  SelectCustom,
  Label,
  IconLeft,
  IconRight,
} from './style'
import { SelectProps, SelectRef } from './types'

/* eslint-disable */
const Select = forwardRef<SelectRef, SelectProps>((props, ref) => {
  const {
    theme = 'light',
    label,
    error,
    disabled,
    iconLeft,
    iconRight,
    children,
    ...selectProps
  } = props

  const selectRef = useRef<HTMLSelectElement | null>(null)

  const hasValue = Boolean(selectProps.value)

  useImperativeHandle(ref, () => selectRef.current!, [])

  return (
    <SelectContainer
      hasValue={hasValue}
      error={error}
      theme={theme}
      disabled={disabled}
    >
      <IconLeft>{iconLeft}</IconLeft>
      <SelectCustom
          disabled={disabled}
          ref={selectRef}
          iconRight={iconRight}
          iconLeft={iconLeft}
          {...selectProps}
      >
        <option value="" />
        {children}
      </SelectCustom>
      <Label theme={theme} hasValue={hasValue}>
        {label}
      </Label>
      <IconRight  >{iconRight}</IconRight>
    </SelectContainer>
  )
})

Select.displayName = 'Select'

export default Select
