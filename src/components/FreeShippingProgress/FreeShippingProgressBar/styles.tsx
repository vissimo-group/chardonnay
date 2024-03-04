import styled from 'styled-components'

const FreeShippingProgressBarContainerStyled = styled.div`
  height: 2px;
  width: 100%;
  background-color: #aeaeae;
`

const FreeShippingProgressBarProgressStyled = styled.div<{
  $progress: number
}>`
  position: relative;
  height: 100%;
  width: ${(props) => `${props.$progress}%`};
  background-color: ${(props) =>
    props.$progress === 100
      ? props.theme.colors.action.action100
      : props.theme.colors.feedback.feedbackInfo100};

  &::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.$progress === 100
        ? props.theme.colors.action.action100
        : props.theme.colors.feedback.feedbackInfo100};
    position: absolute;
    top: -4px;
    right: 0px;
  }
`

export {
  FreeShippingProgressBarContainerStyled,
  FreeShippingProgressBarProgressStyled,
}
