import { useBoundStore } from '@/lib/frontend/store'
import { Modal } from '@mantine/core'
import { ModalContent } from './components/ModalContent'
import { useQueryClient } from '@tanstack/react-query'

export function PrizeDialog() {
  const queryClient = useQueryClient()

  // Getters
  const isVisible = useBoundStore((state) => state.redeemModalVisible)

  // Setters
  const showRedeemModal = useBoundStore((state) => state.showRedeemModal)

  const closeModal = () => {
    queryClient
      .invalidateQueries({
        queryKey: ['Profile'],
      })
      .then(() => showRedeemModal(false))
  }

  return (
    <Modal
      opened={isVisible}
      onClose={closeModal}
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
