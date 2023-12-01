import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../tokens'
import { Severity, ThemeType, Props, PropsSeverity } from '../../types'

export interface TagProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  severity?: Severity
  value?: string
  theme?: ThemeType
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

const StyledTag = styled.div<PropsSeverity>`
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
  ...tagProps
}) => (
  <StyledTag
    severity={severity || 'info'}
    theme={theme || 'light'}
    {...tagProps}
  >
    {icon}
    {value}
  </StyledTag>
)

Tag.displayName = 'Tag'

export default Tag
