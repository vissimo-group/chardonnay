import React, { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import { BorderRadius, Colors, Spacing } from '../../tokens'
import { Severity, ThemeType } from '../../types'

interface MessageProps {
  message?: string | ReactNode
  icon?: ReactNode
  theme?: ThemeType
  severity?: Severity
  messageProps?: HTMLAttributes<HTMLDivElement>
}

interface Props {
  theme: ThemeType
  severity: Severity
}

const severityColors = {
  info: (props: Props) => Colors[props.theme].background.backgroundInfo,
  warning: (props: Props) => Colors[props.theme].background.backgroundWarning,
  error: (props: Props) => Colors[props.theme].background.backgroundError,
}

const colorMap = {
  info: (props: Props) => Colors[props.theme].feedback.feedbackInfo100,
  warning: (props: Props) => Colors[props.theme].feedback.feedbackWarning100,
  error: (props: Props) => Colors[props.theme].feedback.feedbackError100,
}

const MessageText = styled.p<Props>`
  color: ${(props) => colorMap[props.severity](props)};
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: center;
`

const MessageContainer = styled.div<Props>`
  display: flex;
  height: 40px;
  gap: ${Spacing['3']};
  padding: ${Spacing['3']};
  border-radius: ${BorderRadius['3']};
  background-color: ${(props) => severityColors[props.severity](props)};
  align-items: center;
`

const Message: React.FC<MessageProps> = ({
  message,
  icon,
  theme,
  severity,
  ...messageProps
}) => {
  return (
    <MessageContainer
      severity={severity || 'info'}
      theme={theme as ThemeType}
      {...messageProps}
    >
      {icon}
      <MessageText severity={severity || 'info'} theme={theme as ThemeType}>
        {message}
      </MessageText>
    </MessageContainer>
  )
}

Message.defaultProps = {
  theme: 'light',
  message: 'Hello World',
  icon: null,
}

Message.displayName = 'Message'

export default Message
