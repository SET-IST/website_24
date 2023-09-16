import { createContext } from 'react'
//  Types
import type { ReactNode } from 'react'

type ModalContextValue = {
  setModal: (
    content: ReactNode,
    options?: {
      disableBackdropClose?: boolean
      onClose?: () => void
    }
  ) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValue>({} as ModalContextValue)

export { ModalContext }
export type { ModalContextValue }
