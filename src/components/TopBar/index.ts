import styled from 'styled-components'
import { Colors } from '../../tokens'

const TopBar = styled.header<null>`
  height: 40px;
  background-color: ${Colors.light.brand.brand100};
  color: ${Colors.light.background.background100};
  display: flex;
  padding: 8px 32px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  white-space: nowrap;
`

TopBar.displayName = 'TopBar'

export default TopBar
