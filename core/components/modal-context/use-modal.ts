import { isEmpty } from 'lodash'
import { useContext } from 'react'
import { ModalContext } from './modal-context'

const useModal = () => {
  const context = useContext(ModalContext)

  if (isEmpty(context)) {
    throw new Error('useModal should be inside ModalProvider context')
  }

  return context
}

export { useModal }
