import { ComponentProps, ElementType } from 'react'
import styled from 'styled-components'
import { Colors, Spacing } from '../../tokens'

interface ButtonProps extends ComponentProps<ElementType> {
  // Adicione quaisquer outras propriedades personalizadas que você deseja passar
}

const StyledButton = styled.button`
  display: flex;
  width: 108px;
  height: 56px;
  padding: 16px 24px; // Você pode ajustar os valores ou usar variáveis CSS aqui
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px; // Você pode ajustar o valor ou usar uma variável CSS aqui
  background: #03a678; // Você pode ajustar a cor ou usar uma variável CSS aqui
`

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.displayName = 'Button'

export { Button }
