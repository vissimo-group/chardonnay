import React, { useState, ChangeEvent } from 'react'
import * as Icon from 'semillon'
import styled from 'styled-components'
import { Search } from 'semillon'
import { Input } from '../../components'

interface IconInfo {
  name: string
  component: (props: IconProps) => JSX.Element
}

interface IconProps {
  size: number
}

const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  grid-gap: 70px;
`

export const IconsRender = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredIcons: IconInfo[] = Object.entries(Icon)
    .filter(([name]) => name.toLowerCase().includes(searchTerm?.toLowerCase()))
    .map(([name, component]) => ({ name, component }))

  return (
    <>
      <Input
        icon={<Search size={26} />}
        type="text"
        value={searchTerm}
        placeholder="Digite o nome do Icone"
        theme="light"
        onChange={handleSearchChange}
      />
      <IconsGrid>
        {filteredIcons.map(({ name, component }) => (
          <div key={name}>
            <p>{name.replace(/([A-Z])/g, ' $1')}</p>
            {component({ size: 35 })}
          </div>
        ))}
      </IconsGrid>
    </>
  )
}
