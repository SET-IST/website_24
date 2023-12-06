import { Button } from '@/core/components/Button'
import { useModal } from '@/core/components/modal-context'
import { links } from '@/data/links'
import { useScan } from '@/lib/frontend/hooks/use-scan'
import { QrScanner, QrScannerProps } from '@yudiel/react-qr-scanner'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import ErrorModal from './components/ErrorModal'
import SuccessModal from './components/SuccessModal/SuccessModal'

const ScanPage = () => {
  const { scanCompany } = useScan()
  const { setModal } = useModal()
  const router = useRouter()
  const scanRef = useRef('')
  const progressRef = useRef(false)
  const [useAppScan, setUseAppScan] = useState(false)
  const [scanError, setScanError] = useState(false)

  const scanInProgress = () => progressRef.current

  const processScan = async (code?: string | null) => {
    if (code && scanRef.current === '' && !scanInProgress()) {
      progressRef.current = true

      await scanCompany(code)
        .then((res) => {
          setModal(<SuccessModal companyName={res.company.name} />)
          router.push(links.student.profile)
          scanRef.current = code
        })
        .catch((e: AxiosError) => {
          setModal(<ErrorModal code={e.response?.status} />)
          setScanError(true)
        })
        .finally(() => {
          progressRef.current = false
        })
    }
  }

  const handleResult: QrScannerProps['onResult'] = async (result) => {
    if (!!result) {
      let code: string | null = result.getText()
      if (
        code.includes(
          process.env.NODE_ENV === 'production'
            ? 'https://set.tecnico.ulisboa.pt'
            : 'http://localhost'
        )
      ) {
        const url = new URL(result.getText())
        code = url.searchParams.get('code')
      }
      await processScan(code)
    }
  }

  useEffect(() => {
    if (!router.isReady) return

    // Check if code is not empty
    console.log(router.query)
    if (router.query['code']) {
      processScan(router.query['code'] as string)
    } else {
      setUseAppScan(true)
    }
  }, [router.isReady])

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-center font-sans font-medium my-10 text-3xl text-tertiary-500">
        Faz <span className="text-secondary-500">scan</span> da empresa para
        ganhar <span className="text-secondary-500">pontos</span>
      </h1>
      {useAppScan && (
        <QrScanner
          onError={() => setModal(<ErrorModal code={500} />)}
          scanDelay={300}
          onResult={handleResult}
          constraints={{ facingMode: 'environment', height: 400, width: 400 }}
          containerStyle={{ width: '400px', height: 'auto' }}
        />
      )}
      {scanError && !useAppScan && (
        <Button onClick={() => setUseAppScan(true)}>Usar scan da app</Button>
      )}
      <p className="py-5 text-center font-sans text-gray-400 leading-8 pb-20">
        Coloca o <b>código QR</b> entre os <b>limites</b> da câmera para dares
        scan com sucesso à empresa.
      </p>
    </main>
  )
}

export default ScanPage
