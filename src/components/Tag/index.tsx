import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../tokens'
import { Severity, ThemeType, CommomProps, PropsSeverity } from '../../types'

export interface TagProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  severity?: Severity
  value?: string
  theme?: ThemeType
}

const severityColors = {
  info: (props: CommomProps) => Colors[props.theme].background.backgroundInfo,
  warning: (props: CommomProps) =>
    Colors[props.theme].background.backgroundWarning,
  error: (props: CommomProps) => Colors[props.theme].background.backgroundError,
}

const StyledTag = styled.div<PropsSeverity>`
  display: inline-flex;
  align-items: center;
  color: ${(props: CommomProps) => Colors[props.theme].neutral.neutral100};
  background-color: ${(props) => severityColors[props.severity](props)};
  width: fit-content;
  height: 24px;
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
