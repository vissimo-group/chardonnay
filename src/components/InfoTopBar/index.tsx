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
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.0025em;
    text-align: left;
  }
`

const InfoTopBar: React.FC<InfoProps> = ({ children }) => (
  <ContainerInfo>{children}</ContainerInfo>
)

export default InfoTopBar
