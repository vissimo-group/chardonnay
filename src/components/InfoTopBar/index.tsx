import React from 'react'
import styled from 'styled-components'

interface InfoProps {
  children?: React.ReactNode
}

const ContainerInfo = styled.div`
  display: flex;
  gap: 30px;

  & > * {
    margin: 0;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 17.5px;
    letter-spacing: -0.0025em;
    text-align: left;
  }
`

const InfoTopBar: React.FC<InfoProps> = ({ children }) => (
  <ContainerInfo>{children}</ContainerInfo>
)

export default InfoTopBar
