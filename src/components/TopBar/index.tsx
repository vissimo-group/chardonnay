import React from 'react'
import styled from 'styled-components'

import { Colors, mediaQueries } from '../../tokens'

export interface TopBarProps {
  children?: React.ReactNode
}

const ContainerTopBar = styled.header`
  height: 40px;
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

  > :nth-child(2) {
    justify-self: center;
    align-self: center;
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
