import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { BorderRadius, Colors, Spacing } from '../../tokens'

export type Severity = 'info' | 'warning' | 'error'

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string | ReactNode
  icon?: ReactNode
  theme?: 'light' | 'dark'
  severity?: Severity
}

const severityColors: Record<Severity, (props: MessageProps) => string> = {
  info: (props) => Colors[props.theme].background.backgroundInfo,
  warning: (props) => Colors[props.theme].background.backgroundWarning,
  error: (props) => Colors[props.theme].background.backgroundError,
}

const colorMap: Record<Severity, (props: MessageProps) => string> = {
  info: (props) => Colors[props.theme].feedback.feedbackInfo100,
  warning: (props) => Colors[props.theme].feedback.feedbackWarning100,
  error: (props) => Colors[props.theme].feedback.feedbackError100,
}

const MessageText = styled.p<{ severity: Severity }>`
  color: ${(props) => colorMap[props.severity](props)};
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.0025em;
  text-align: center;
`

const MessageContainer = styled.div<{ severity: Severity }>`
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
  ...props
}) => {
  return (
    <MessageContainer severity={severity || 'error'} theme={theme} {...props}>
      {icon}
      <MessageText severity={severity || 'error'} theme={theme}>
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
