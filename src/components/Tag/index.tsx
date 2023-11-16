import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Colors } from '../../tokens'

export type Severity = 'info' | 'warning' | 'error'

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  severity?: 'info' | 'warning' | 'error'
  value?: string
  theme?: 'light' | 'dark'
}

const severityColors: Record<Severity, (props: TagProps) => string> = {
  info: (props) => Colors[props.theme].background.backgroundInfo,
  warning: (props) => Colors[props.theme].background.backgroundWarning,
  error: (props) => Colors[props.theme].background.backgroundError,
}

const colorMap: Record<Severity, (props: TagProps) => string> = {
  info: (props) => Colors[props.theme].feedback.feedbackInfo100,
  warning: (props) => Colors[props.theme].feedback.feedbackWarning100,
  error: (props) => Colors[props.theme].feedback.feedbackError100,
}

const StyledTag = styled.div<TagProps>`
  display: inline-flex;
  align-items: center;
  color: ${(props) => colorMap[props.severity](props)};
  background-color: ${(props) => severityColors[props.severity](props)};
  min-height: 24px;
  padding: 0 8px;
  border-radius: 8px;
  gap: 8px;
`

const Tag: React.FC<TagProps> = ({
  theme,
  icon,
  severity,
  value,
  ...props
}) => (
  <StyledTag severity={severity || 'info'} theme={theme || 'light'} {...props}>
    {icon}
    {value}
  </StyledTag>
)

export default Tag
