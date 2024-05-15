import styled from 'styled-components'

const NewPaymentMethodsContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const NewPaymentMethodsItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  padding: 16px;
  gap: 1rem;
`
const NewPaymentMethodsItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const NewPaymentMethodsInstallment = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
`

export {
  NewPaymentMethodsItems,
  NewPaymentMethodsContainer,
  NewPaymentMethodsInstallment,
  NewPaymentMethodsItemsContainer,
}
