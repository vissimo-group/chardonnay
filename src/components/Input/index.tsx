import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useCallback,
  useEffect,
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

  const [inputValue, setInputValue] = useState<string | undefined>()
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (props.value) {
      setInputValue(props.value)
    }
  }, [])

  useImperativeHandle(ref, () => inputRef.current!, [inputRef.current])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value
      const valueUnMask = unMask(newValue)
      const valueMask = mask ? maskInput(valueUnMask, mask) : newValue

      setInputValue(valueMask)
      if (props.onChange) {
        props.onChange(event)
      }
    },
    [mask, props.onChange],
  )

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
