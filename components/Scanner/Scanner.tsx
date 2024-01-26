import { useBoundStore } from '@/lib/frontend/store'
import { Modal } from '@mantine/core'

export function ScannerModal() {
  // Getters
  const isVisble = useBoundStore((state) => state.scanModalVisible)

  // Setters
  const showScanModal = useBoundStore((state) => state.showScanModal)

  return (
    <Modal
      opened={isVisble}
      onClose={() => showScanModal(false)}
      styles={{
        content: {
          backgroundColor: '#ff0000',
        },
        header: {
          backgroundColor: 'transparent',
        },
      }}
      fullScreen
      radius={0}
      transitionProps={{ transition: 'fade', duration: 200 }}
    >
      {/* Modal content */}
    </Modal>
  )
}
