import styled from 'styled-components'

const FormattedShippingMessageContainerStyled = styled.span`
  color: ${(props) => props.theme.colors.neutral.neutral500};
`

const FormattedShippingMessageStrongStyled = styled.strong`
  color: ${(props) => props.theme.colors.feedback.feedbackInfo100};
`

export {
  FormattedShippingMessageContainerStyled,
  FormattedShippingMessageStrongStyled,
}
