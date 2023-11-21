import { Delivery, Pin } from 'semillon'
import styled from 'styled-components'
import { mediaQueries } from '../../tokens'
import { Modal, Tag, TopBar } from '..'

const ContainerCep = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`

const ContainerInfo = styled.div`
  display: flex;
  gap: 30px;

  p {
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.0025em;
    text-align: left;
  }
`

const TopBarContainer = styled(TopBar)`
  @media screen and (max-width: ${mediaQueries.screenMd}) {
    height: 10px;
    overflow: hidden;
    padding: 0;

    > * {
      display: none;
    }
  }
`

const ModalCep = () => {
  return (
    <>
      <TopBarContainer>
        <ContainerCep>
          <Pin size={26} />
          <p>Informe seu CEP</p>
        </ContainerCep>
        <Tag
          colorText="white"
          severity="danger"
          icon={<Delivery size={26} />}
          value="Frete grátis em toda loja!"
        />
        <ContainerInfo>
          <p>Nossas lojas</p>
          <p>Contato</p>
          <p>Evino Delivery</p>
        </ContainerInfo>
      </TopBarContainer>

      <Modal>
        <p>teste</p>
      </Modal>
    </>
  )
}

export { ModalCep }
