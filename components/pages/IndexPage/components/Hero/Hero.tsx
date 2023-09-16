import cn from 'classnames'
import { DateTime } from 'luxon'
//  Components
import { Animate } from '@/components/AnimateIn'
import CountdownTimer from '@/components/countdowntimer'

const Hero = () => {
  return (
    <div className="w-full h-screen -mt-28 px-5 bg-[url('/img/feira.webp')] bg-cover bg-center flex flex-col justify-center items-center">
      <Animate.FadeUp>
        <h2
          className={cn(
            'text-sm text-white font-bold font-poppins mt-10 text-center',
            'md:text-base md:mt-0'
          )}
        >
          DE <span className="text-secondary-500">13</span> A{' '}
          <span className="text-secondary-500">16</span> DE{' '}
          <span className="text-secondary-500">MARÇO</span> NO INSTITUTO
          SUPERIOR TÉCNICO - TAGUSPARK
        </h2>
      </Animate.FadeUp>
      <Animate.FadeUp>
        <h1
          className={cn(
            'text-white font-poppins font-bold text-center my-10 text-4xl',
            'md:text-6xl md:leading-relaxed',
            'lg:text-[80px] lg:leading-[120px] lg:tracking-[0.035em]'
          )}
        >
          Semana Empresarial e <br />
          Tecnológica
        </h1>
      </Animate.FadeUp>
      <Animate.FadeUp>
        <CountdownTimer deadline={DateTime.local(2023, 3, 13)} />
      </Animate.FadeUp>
    </div>
  )
}

export default Hero
