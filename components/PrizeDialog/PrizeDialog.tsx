import { useBoundStore } from '@/lib/frontend/store'
import { Modal } from '@mantine/core'
import { ModalContent } from './components/ModalContent'

export function PrizeDialog() {
  // Getters
  const isVisible = useBoundStore((state) => state.redeemModalVisible)

  // Setters
  const showRedeemModal = useBoundStore((state) => state.showRedeemModal)

  return (
    <Modal
      opened={isVisible}
      onClose={() => showRedeemModal(false)}
      styles={{
        content: {
          backgroundColor: 'rgb(28, 126, 214)',
        },
        body: {
          padding: '0px',
        },
        header: {
          backgroundColor: 'transparent',
        },
      }}
      fullScreen
      radius={0}
      transitionProps={{ transition: 'scale-y', duration: 200 }}
      withCloseButton={false}
    >
      <ModalContent />
    </Modal>
  )
}
