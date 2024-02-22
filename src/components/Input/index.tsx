import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'

import { maskInput, unMask } from './mask'
import {
  IconLeft,
  IconRight,
  InputContainer,
  InputCustom,
  Label,
} from './style'
import { InputProps, InputRef } from './types'

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    error,
    label,
    theme = 'light',
    iconLeft,
    iconRight,
    mask,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState<string | undefined>(props.value)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (props.value) {
      setInputValue(props.value)
    }

    if (mask && inputValue) {
      const originalValue = unMask(inputValue)
      const makedValue = maskInput(originalValue, mask)
      setInputValue(makedValue)
    }
  }, [inputValue])

  useImperativeHandle(ref, () => inputRef.current!, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setInputValue(newValue)
    if (props.onChange) {
      props.onChange(event)
    }
  }

  return (
    <InputContainer theme={theme} {...props}>
      {!!iconLeft && <IconLeft>{iconLeft}</IconLeft>}
      <InputCustom
        ref={inputRef}
        placeholder=""
        iconLeft={iconLeft}
        {...restProps}
        value={inputValue}
        onChange={handleChange}
      />
      <Label theme={theme}>{label}</Label>
      <IconRight>{iconRight}</IconRight>
    </InputContainer>
  )
})

Input.displayName = 'Input'

export default Input
