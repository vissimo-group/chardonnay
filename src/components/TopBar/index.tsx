import React from 'react'
import styled from 'styled-components'

import { Colors, mediaQueries } from '../../tokens'

export interface TopBarProps {
  children?: React.ReactNode
}

const ContainerTopBar = styled.div`
  height: auto;
  background-color: ${Colors.light.brand.brand100};
  color: ${Colors.light.background.background100};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 32px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  white-space: nowrap;
  align-content: center;

  & > * {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 17.5px;
  }

  position: fixed;
  width: 100%;
  z-index: 2;

  > :nth-child(2) {
    justify-self: center;
    align-self: center;
  }

  > :nth-child(3) {
    justify-self: end;
  }

  @media screen and (max-width: ${mediaQueries.screenMd}) {
    height: 10px;
    overflow: hidden;
    padding: 0;
    grid-template-columns: 1fr;

    > * {
      visibility: hidden;
    }
  }
`

const TopBar: React.FC<TopBarProps> = ({ children }) => (
  <ContainerTopBar>{children}</ContainerTopBar>
)

TopBar.displayName = 'TopBar'

export default TopBar
