import { useModal } from '@/core/components/modal-context'
import { FaTimes } from 'react-icons/fa'

type SuccessModalProps = {
  companyName: string
}

const SuccessModal = ({ companyName }: SuccessModalProps) => {
  const { closeModal } = useModal()

  return (
    <div className="px-5">
      <header className="flex flex-row items-center justify-between py-3">
        <h1>Scan com sucesso</h1>
        <FaTimes
          className="text-primary-500 cursor-pointer"
          onClick={closeModal}
        />
      </header>
      <hr />
      <section className="py-5">
        <h2 className="text-2xl mb-2 text-tertiary-500">
          Fizeste scan da empresa {companyName}
        </h2>
        <p className="mb-3 text-lg text-tertiary-500">
          Acabaste de ganhar{' '}
          <span className="text-secondary-500">5 pontos</span>! Junta até 15
          pontos para recolheres um brinde.
        </p>
      </section>
    </div>
  )
}

export default SuccessModal
export type { SuccessModalProps }
