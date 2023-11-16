import React from 'react'
import styled from 'styled-components'
import { Close } from '@vissimo/icons'
import { BorderRadius, Colors } from '../../tokens'

type Severity = 'info' | 'warning' | 'error'

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  isHovered?: boolean
  handleMouseEnter?: () => void
  handleMouseLeave?: () => void
  position?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
  theme?: 'light' | 'dark'
  severity?: Severity
}

const defaultProps: Partial<TooltipProps> = {
  isHovered: false,
  position: 'top-start',
  theme: 'light',
  severity: 'info',
}

const colorMap: Record<Severity, (props: TooltipProps) => string> = {
  info: (props) => Colors[props.theme]?.feedback?.feedbackInfo100 || '',
  warning: (props) => Colors[props.theme]?.feedback?.feedbackWarning100 || '',
  error: (props) => Colors[props.theme]?.feedback?.feedbackError100 || '',
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  min-width: 30%;
`

const TooltipOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

const TooltipContent = styled.div`
  text-align: center;
`

const ContentContainer = styled.div<TooltipProps>`
  position: absolute;
  min-width: 316px;
  left: 50%;
  transform: translateX(-50%);
  background: ${(props) => colorMap[props.severity]?.(props)};
  color: ${(props) => Colors[props.theme]?.neutral?.neutral100 || ''};
  padding: 0 16px 16px 16px;
  border-radius: ${BorderRadius['3']};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-left: -10px;
    border-width: 13px;
    border-style: solid;
    border-color: transparent transparent
      ${(props) => colorMap[props.severity]?.(props) || ''} transparent;
  }

  ${(props) => {
    switch (props.position) {
      case 'top-start':
        return `
          bottom: 100%;
          left: 110px;
          
          &::before  {
            top: 100%;
            left: 15%;
            transform: rotate(180deg);
          }
        `
      case 'top-end':
        return `
          bottom: 100%;
          left: -40px;
          
          &::before  {
            top: 100%;
            left: 200px;
            transform: rotate(180deg);
          }
        `
      case 'bottom-start':
        return `
          top: 100%;
          left: 110px;
          
          &::before  {
            bottom: 100%;
            left: 15%;
            transform: rotate(0deg);
          }
        `
      case 'bottom-end':
        return `
          top: 100%;
          left: -67px;
          
          &::before  {
            bottom: 100%;
            left: 72%;
            transform: rotate(0deg);
          }
        `
      default:
        return ''
    }
  }}
`

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 4px 0 0;
  cursor: pointer;
`

const Tooltip: React.FC<TooltipProps> = ({
  theme,
  severity,
  content,
  children,
  position,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
}) => (
  <TooltipContainer
    theme={theme}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {isHovered && <TooltipOverlay />}
    {children}
    <ContentContainer
      theme={theme}
      position={position || 'top-start'}
      severity={severity || 'info'}
      visible={isHovered}
    >
      <CloseButton>
        <Close onClick={handleMouseLeave} size={24} />
      </CloseButton>
      <TooltipContent>{content}</TooltipContent>
    </ContentContainer>
  </TooltipContainer>
)

Tooltip.defaultProps = defaultProps

export default Tooltip
