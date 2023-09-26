import cn from 'classnames'
//  Components
import { Animate } from '@/components/AnimateIn'
import Image from 'next/image'
//  Assets
import Scanner from '@/core/assets/img/scan1.webp'
import Scanned from '@/core/assets/img/scan2.webp'
import Redeem from '@/core/assets/img/scan3.webp'

const TutorialSection = () => {
  return (
    <section className="flex flex-col justify-center bg-primary-500 pt-15 pb-10 px-3 w-full">
      <Animate.FadeUp>
        <h2 className="text-white font-bold text-4xl text-center items-center font-poppins mb-10">
          FAZ SCAN DO <span className="text-secondary-500">CÓDIGO QR </span>
          DAS EMPRESAS E <br /> GANHA{' '}
          <span className="text-secondary-500">PRÉMIOS EXCLUSIVOS</span>
        </h2>
      </Animate.FadeUp>
      <div className="grid grid-cols-3 gap-5 my-15 text-white">
        <Animate.FadeUp
          className={cn(
            'col-span-3 flex flex-col items-center text-center justify-between',
            'lg:col-span-1'
          )}
        >
          1. Acessa a página Scan
          <Image
            src={Scanner.src}
            alt="Scanner"
            width={200}
            height={800}
            className="mt-5"
          />
        </Animate.FadeUp>
        <Animate.FadeUp
          className={cn(
            'col-span-3 flex flex-col items-center text-center justify-between',
            'lg:col-span-1'
          )}
        >
          2. Faz scan ao código QR da banca e ganha pontos
          <Image
            src={Scanned.src}
            alt="Scanned"
            width={200}
            height={800}
            className="mt-5"
          />
        </Animate.FadeUp>
        <Animate.FadeUp
          className={cn(
            'col-span-3 flex flex-col items-center text-center justify-between',
            'lg:col-span-1'
          )}
        >
          3. Redime o brinde e mostra o código QR na recepção
          <Image
            src={Redeem.src}
            alt="Redeem"
            width={200}
            height={800}
            className="mt-5"
          />
        </Animate.FadeUp>
      </div>
    </section>
  )
}

export default TutorialSection
