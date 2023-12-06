import { useModal } from '@/core/components/modal-context'
import { useAward } from '@/lib/frontend/hooks/use-award'
import { FaTimes } from 'react-icons/fa'
import QRCode from 'react-qr-code'

const RedeemModal = () => {
  const { closeModal } = useModal()
  const { data, isLoading, isError, isSuccess } = useAward()
  if (!isLoading && !isError && isSuccess) console.log(data)

  return (
    <div className="px-5">
      <header className="flex flex-row items-center justify-between py-3">
        <h1>Redimir brinde</h1>
        <FaTimes
          className="text-primary-500 cursor-pointer"
          onClick={closeModal}
        />
      </header>
      <hr />
      {isLoading && <h2>Estamos a validar os teus pontos</h2>}
      {isSuccess && data && (
        <section className="py-3 flex flex-col items-start">
          <p className="text-lg">
            Tens direito a um prémio{' '}
            <span className="text-secondary-500">{data.awardType}</span>.
          </p>
          <p className="text-lg mb-5">Mostra este código QR na recepção.</p>
          <QRCode
            size={165}
            value={data.awardToken}
            className="mb-5 mx-auto"
            fgColor="#0091da"
          />
          <p className="text-lg mb-5">
            Passa por mais bancas para obteres mais brindes.
          </p>
        </section>
      )}
      {isError && (
        <section className="py-3 flex flex-col items-start">
          <p className="text-lg">
            Não tens direito a um prémio{' '}
            <span className="text-secondary-500">ainda</span>.
          </p>
          <p className="text-lg mb-5">
            Faz scan de mais empresas para teres este direito.
          </p>
        </section>
      )}
    </div>
  )
}

export default RedeemModal
