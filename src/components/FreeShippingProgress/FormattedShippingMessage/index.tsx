import {
  FormattedShippingMessageContainerStyled,
  FormattedShippingMessageStrongStyled,
} from './style'
import { FormattedShippingMessageProps } from './type'

const FormattedShippingMessage = ({
  message,
}: FormattedShippingMessageProps) => {
  const moneyPattern = /R\$ ?\d{1,3}(?:,\d{2}|(?:\.\d{3})*,\d{2}|\.\d{2})/
  const moneyValue = message.match(moneyPattern)

  const splittedMessage = message.split(moneyPattern)

  const firstPartOfMessage = splittedMessage[0]
  const secondPartOfMessage = splittedMessage[1]

  if (!moneyValue)
    return (
      <FormattedShippingMessageContainerStyled>
        {message}
      </FormattedShippingMessageContainerStyled>
    )

  if (!firstPartOfMessage && !secondPartOfMessage) {
    return (
      <FormattedShippingMessageStrongStyled>
        {moneyValue}
      </FormattedShippingMessageStrongStyled>
    )
  }

  return (
    <FormattedShippingMessageContainerStyled>
      {firstPartOfMessage && firstPartOfMessage}
      <FormattedShippingMessageStrongStyled>
        {moneyValue}
      </FormattedShippingMessageStrongStyled>
      {secondPartOfMessage && secondPartOfMessage}
    </FormattedShippingMessageContainerStyled>
  )
}

export { FormattedShippingMessage }
