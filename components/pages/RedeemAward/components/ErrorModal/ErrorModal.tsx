import { Button } from '@/core/components/Button'
import { useModal } from '@/core/components/modal-context'
import { FaTimes } from 'react-icons/fa'

interface ErrorModalProps {
  invalid: boolean
}

const ErrorModal = ({ invalid }: ErrorModalProps) => {
  const { closeModal } = useModal()

  return (
    <div className="px-5">
      <header className="flex flex-row items-center justify-between py-3">
        <h1 className="text-3xl text-red-500">Scan falhou</h1>
        <FaTimes
          className="text-primary-500 cursor-pointer"
          onClick={closeModal}
        />
      </header>
      <hr />
      <section className="py-5">
        {invalid ? (
          <>
            <p className="text-base mb-2 text-tertiary-500">
              Este código é <span className="text-red-500">inválido</span>
            </p>
            <p className="mb-3 text-base text-tertiary-500">
              Isto pode acontecer se o código já foi usado
            </p>
          </>
        ) : (
          <>
            <p className="text-base mb-2 text-tertiary-500">
              Houve um <span className="text-red-500">problema</span> a tentar
              redimir o brinde
            </p>
            <p className="mb-3 text-base text-tertiary-500">
              Caso o problema persista entra em contacto com o suporte
              informático
            </p>
          </>
        )}
        <Button color="secondary" onClick={closeModal} className="ml-auto">
          Fechar
        </Button>
      </section>
    </div>
  )
}

export default ErrorModal
