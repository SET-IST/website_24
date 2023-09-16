import { useModal } from '@/core/components/modal-context'
import { QrScanner } from '@yudiel/react-qr-scanner'
import { FaTimes } from 'react-icons/fa'

const ScannerModal = () => {
  const { closeModal } = useModal()
  return (
    <div className="px-5">
      <header className="flex flex-row items-center justify-between py-3">
        <h1>Registar presença</h1>
        <FaTimes
          className="text-primary-500 cursor-pointer"
          onClick={closeModal}
        />
      </header>
      <hr />
      <QrScanner
        constraints={{ facingMode: 'environment', height: 400, width: 400 }}
        onResult={(result) => {
          if (!!result) {
            window.open(result.getText())
            return
          }
        }}
        onError={(error) => console.log(error?.message)}
      />
    </div>
  )
}

export default ScannerModal
