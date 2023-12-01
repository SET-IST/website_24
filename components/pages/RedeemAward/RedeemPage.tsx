import { useModal } from '@/core/components/modal-context'
import { useRedeemAward } from '@/lib/frontend/hooks/use-award'
import { QrScanner, QrScannerProps } from '@yudiel/react-qr-scanner'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import ErrorModal from './components/ErrorModal'
import SuccessModal from './components/SuccessModal/SuccessModal'

const RedeemPage = () => {
  const { redeem } = useRedeemAward()
  const { setModal } = useModal()
  const router = useRouter()
  const scanRef = useRef('')

  const handleResult: QrScannerProps['onResult'] = async (result) => {
    if (!!result && scanRef.current === '') {
      await redeem(result.getText())
        .then((res) => {
          setModal(<SuccessModal redeem={res} />)
          scanRef.current = result.getText()
        })
        .catch((e: AxiosError) => {
          setModal(<ErrorModal invalid={e.response?.status === 404} />)
        })
    }
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-center font-sans font-medium my-10 text-3xl text-tertiary-500">
        <span className="text-secondary-500">Redimir</span> brinde
      </h1>
      <QrScanner
        onError={() => setModal(<ErrorModal invalid={false} />)}
        scanDelay={300}
        onResult={handleResult}
        constraints={{ facingMode: 'environment', height: 400, width: 400 }}
        containerStyle={{ width: '400px', height: 'auto' }}
      />
      <p className="py-5 text-center font-sans text-gray-400 leading-8 pb-20">
        Coloca o <b>código QR</b> entre os <b>limites</b>
      </p>
    </main>
  )
}

export default RedeemPage
