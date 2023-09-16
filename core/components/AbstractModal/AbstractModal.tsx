//  Components
import Backdrop from '../Backdrop'
import ModalContainer from '../ModalContainer'
//  Types
import type { BackdropProps } from '../Backdrop'
import type { ModalContainerProps } from '../ModalContainer'

type AbstractModalProps = ModalContainerProps & {
  backdrop: BackdropProps
}

const AbstractModal = ({ backdrop, ...props }: AbstractModalProps) => {
  return (
    <Backdrop className="z-12000" {...backdrop}>
      <ModalContainer {...props} />
    </Backdrop>
  )
}

AbstractModal.displayName = 'AbstractModal'

export default AbstractModal
export type { AbstractModalProps }
