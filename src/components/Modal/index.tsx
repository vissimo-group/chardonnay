import React, { FC, ReactChildren, ReactNode } from 'react'
import styled from 'styled-components'
import { Close } from '@vissimo/icons'
import { Colors, Spacing, BorderRadius } from '../../tokens'

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void
  isOpen?: boolean
  theme?: string
  children?: ReactNode | ReactChildren
}

const defaultProps: Partial<ModalProps> = {
  theme: 'light',
}

const Overlay = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

const ModalWrapper = styled.div<ModalProps>`
  position: fixed;
  min-width: 558px;
  height: 513px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${Spacing[8]};
  border-radius: ${BorderRadius[3]};
  border: 1px solid ${({ theme }) => Colors[theme].neutral.neutral200};
  background-color: ${({ theme }) => Colors[theme].neutral.neutral100};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
  gap: ${Spacing[4]};
  color: ${({ theme }) => Colors[theme].neutral.neutral500};
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`

const Modal: FC<ModalProps> = ({
  children,
  onClose,
  isOpen,
  theme,
  ...props
}) => {
  return (
    <>
      <Overlay isOpen={isOpen || false} onClick={onClose || (() => {})} />
      {isOpen && (
        <ModalWrapper theme={theme} {...props}>
          <CloseButton onClick={onClose}>
            <Close size={26} />
          </CloseButton>
          {children}
        </ModalWrapper>
      )}
    </>
  )
}

Modal.defaultProps = defaultProps

export default Modal
