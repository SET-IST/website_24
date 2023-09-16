import cn from 'classnames'
//  Components
import { Animate } from '@/components/AnimateIn'
import { Button } from '@/core/components/Button'
import Image from 'next/image'
//  Hooks
import { useRouter } from 'next/router'
//  Services
import { links } from '@/core/services/links'
//  Assets
import Palestra from '@/core/assets/img/palestra.webp'

const OurMissionSection = () => {
  const router = useRouter()
  return (
    <section className="grid grid-cols-2 bg-white gap-5 px-5 lg:px-24 py-15">
      <div className={cn('col-span-2', 'md:col-span-1')}>
        <Animate.FadeUp>
          <h1 className="text-primary-500 font-bold text-5xl mb-5">
            A nossa missão
          </h1>
        </Animate.FadeUp>
        <Animate.FadeUp>
          <p className="text-tertiary-500 mb-5">
            Este evento enquadra-se na iniciativa <b>IST Career Weeks</b>, onde
            se pretende, por um lado, ajudar os alunos a conhecer melhor as
            oportunidades para o seu futuro profissional, e por outro, ajudar as
            empresas a divulgar as suas atividades e necessidades.
          </p>
        </Animate.FadeUp>
        <Animate.FadeUp>
          <p className="text-tertiary-500 mb-5">
            Todos os anos estão presentes empresas e oradores, que partilham as
            suas experiências e know-how.
          </p>
        </Animate.FadeUp>
        <Animate.FadeIn>
          <Button color="primary" onClick={() => router.push(links.activities)}>
            Atividades
          </Button>
        </Animate.FadeIn>
      </div>
      <div className={cn('col-span-2 ml-0', 'md:col-span-1 md:ml-auto')}>
        <Animate.FadeUp>
          <Image
            src={Palestra.src}
            alt="Orador a dar uma palestra"
            width={510}
            height={340}
          />
        </Animate.FadeUp>
      </div>
    </section>
  )
}

export default OurMissionSection
