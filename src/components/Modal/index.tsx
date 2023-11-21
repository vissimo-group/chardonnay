import React, { FC, HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import { Close } from 'semillon'
import { Colors, Spacing, BorderRadius } from '../../tokens'
import { Props, ThemeType } from '../../types'

export interface ModalProps {
  onClose?: () => void
  isOpen?: boolean
  theme?: string
  children?: ReactNode
  modalProps?: HTMLAttributes<HTMLDivElement>
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

const ModalWrapper = styled.div<React.HTMLAttributes<HTMLDivElement> & Props>`
  position: fixed;
  min-width: 558px;
  height: 513px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${Spacing[8]};
  border-radius: ${BorderRadius[3]};
  border: 1px solid ${(props: Props) => Colors[props.theme].neutral.neutral200};
  background-color: ${(props: Props) => Colors[props.theme].neutral.neutral100};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
  gap: ${Spacing[4]};
  color: ${(props: Props) => Colors[props.theme].neutral.neutral500};
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
  ...modalProps
}) => {
  return (
    <>
      <Overlay isOpen={isOpen || false} onClick={onClose || (() => {})} />
      {isOpen && (
        <ModalWrapper theme={theme as ThemeType} {...modalProps}>
          <CloseButton onClick={onClose}>
            <Close size={26} />
          </CloseButton>
          {children}
        </ModalWrapper>
      )}
    </>
  )
}
Modal.displayName = 'Modal'

Modal.defaultProps = defaultProps

export default Modal
