import styled from 'styled-components'
import { BorderRadius, Colors } from '../../../tokens'
import { SidePanelContentProps } from './types'

const SidePanelContentStyled = styled.aside<SidePanelContentProps>`
  background-color: ${Colors.light.neutral.neutral100};
  border-color: ${Colors.light.neutral.neutral200};
  border-style: solid;
  border-width: 1px;
  border-radius: ${BorderRadius['3']} 0px 0px ${BorderRadius['3']};

  margin: 0;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth, fullscreen }) => (fullscreen ? '100%' : maxWidth)};
  width: ${({ fullscreen }) => (fullscreen ? '100%' : 'inherit')};

  z-index: 999;
  pointer-events: all;
  box-shadow:
    -1px 0px 8px 2px #3c3c3c09,
    -1px 0px 8px 4px #3c3c3c09,
    -1px 0px 8px 16px #3c3c3c09;

  /* ANIMATIONS  */
  @keyframes openPanel {
    0% {
      transform: scaleX(1);
      right: -100%;
    }
    100% {
      transform: scaleX(1);
      right: 0;
    }
  }

  @keyframes closePanel {
    0% {
      transform: scaleX(1);
      right: 0;
    }
    100% {
      transform: scaleX(1);
      right: -100%;
    }
  }

  &[data-state='open'] {
    animation: openPanel 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state='closed'] {
    animation: closePanel 200ms ease-in;
  }

  @media screen and (max-width: 768px) {
    width: 100% !important;
    max-width: 100%;
    border-radius: 0;
  }
`

const SidePanelScrollableStyled = styled.div`
  overflow-y: auto;
  background-color: transparent;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #e6e6e6;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 12px;
    border: none;

    &:hover {
      background-color: #888888;
    }
  }
`

export { SidePanelContentStyled, SidePanelScrollableStyled }
