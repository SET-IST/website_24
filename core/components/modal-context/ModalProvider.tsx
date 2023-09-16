import { Suspense, lazy, useMemo, useRef, useState } from 'react'
//  Services
import { freezeBodyScroll, unfreezeBodyScroll } from '../../services/dom'
//  Types
import type { PropsWithChildren, ReactNode } from 'react'
//  Contexts
import { ModalContext, ModalContextValue } from './modal-context'
//  Components
const AbstractModal = lazy(() => import('../AbstractModal'))

type ModalProviderProps = PropsWithChildren

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isDisplayed, innerSetIsDisplayed] = useState(false)
  const [content, setContent] = useState<ReactNode>(null)

  const onCloseRef = useRef<() => void>()
  const disableBackdropCloseRef = useRef<boolean>()

  const setIsDisplayed = (isDisplayed: boolean) => {
    if (isDisplayed) {
      freezeBodyScroll()
    } else {
      setContent(null)
      unfreezeBodyScroll()
      disableBackdropCloseRef.current = undefined
      onCloseRef.current && onCloseRef.current()
      onCloseRef.current = undefined
    }

    innerSetIsDisplayed(isDisplayed)
  }

  const setModal: ModalContextValue['setModal'] = (
    content,
    { disableBackdropClose, onClose } = {}
  ) => {
    setIsDisplayed(true)
    setContent(content)
    onCloseRef.current = onClose
    disableBackdropCloseRef.current = disableBackdropClose
  }

  const closeModal = () => setIsDisplayed(false)

  const value = useMemo(
    () => ({
      setModal,
      closeModal,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <ModalContext.Provider value={value}>
      {isDisplayed && (
        <Suspense>
          <AbstractModal
            backdrop={{
              onClick: () => {
                !disableBackdropCloseRef.current && closeModal()
              },
            }}
          >
            {content}
          </AbstractModal>
        </Suspense>
      )}
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.displayName = 'ModalProvider'

export default ModalProvider
export type { ModalProviderProps }
