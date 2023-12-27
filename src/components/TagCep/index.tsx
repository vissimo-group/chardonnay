import React from 'react'
import { Pin } from 'semillon'
import styled from 'styled-components'

interface CepProps {
  cepText?: string | undefined
}

const ContainerCep = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`

const TagCep: React.FC<CepProps> = ({ cepText }) => (
  <ContainerCep>
    <Pin size={26} />
    <p>{cepText}</p>
  </ContainerCep>
)

export default TagCep
