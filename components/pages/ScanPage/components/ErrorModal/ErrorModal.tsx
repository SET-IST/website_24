import { Button } from '@/core/components/Button'
import { useModal } from '@/core/components/modal-context'
import { FaTimes } from 'react-icons/fa'

interface ErrorModalProps {
  code: number | undefined
}

const ErrorModal = ({ code }: ErrorModalProps) => {
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
        {code === 404 ? (
          <>
            <p className="text-base mb-2 text-tertiary-500">
              Esta empresa <span className="text-red-500">não está</span> nos
              nossos registos
            </p>
          </>
        ) : code === 409 ? (
          <>
            <p className="text-base mb-2 text-tertiary-500">
              Já deste scan desta empresa
            </p>
          </>
        ) : (
          <>
            <p className="text-base mb-2 text-tertiary-500">
              Houve um <span className="text-red-500">problema</span> a tentar
              fazer scan da empresa
            </p>
            <p className="mb-3 text-base text-tertiary-500">
              Tenta novamente! Caso o problema persista, pede ajuda a um
              colaborador.
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
