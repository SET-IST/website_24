import { useModal } from '@/core/components/modal-context'
import { RedeemResponse } from '@/core/services/api/awards'
import { useRouter } from 'next/router'
import { FaTimes } from 'react-icons/fa'

export interface SuccessModalProps {
  redeem: RedeemResponse
}

const SuccessModal = ({ redeem }: SuccessModalProps) => {
  const { closeModal } = useModal()
  const router = useRouter()
  const { id, type, student } = redeem

  return (
    <div className="px-5">
      <header className="flex flex-row items-center justify-between py-3">
        <h1>Redimir Brinde</h1>
        <FaTimes
          className="text-primary-500 cursor-pointer"
          onClick={closeModal}
        />
      </header>
      <hr />
      <section className="py-5">
        <h2 className="text-2xl mb-2 text-tertiary-500">ID: {id}</h2>
        <h2 className="text-2xl mb-2 text-tertiary-500">Tipo: {type}</h2>
        <h2 className="text-2xl mb-2 text-tertiary-500">
          Utilizador: {student.name}
        </h2>
      </section>
    </div>
  )
}

export default SuccessModal
