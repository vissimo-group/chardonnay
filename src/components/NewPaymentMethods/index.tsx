import React from 'react'
import {
  NewPaymentMethodsContainer,
  NewPaymentMethodsItems,
  NewPaymentMethodsInstallment,
  NewPaymentMethodsItemsContainer,
} from './style'
import { NewPaymentMethodsProps } from './type'
/* import { Radio } from '../Radio' */

const NewPaymentMethods: React.FC<NewPaymentMethodsProps> = ({
  label,
  icon,
  children,
}) => {
  return (
    <NewPaymentMethodsContainer>
      <NewPaymentMethodsItemsContainer>
        <NewPaymentMethodsItems>
          {icon}
          <span style={{ color: '#000' }}>{label}</span>
        </NewPaymentMethodsItems>

        <NewPaymentMethodsInstallment>{children}</NewPaymentMethodsInstallment>
      </NewPaymentMethodsItemsContainer>
    </NewPaymentMethodsContainer>
  )
}

export { NewPaymentMethods }
