import { Animate } from '@/components/AnimateIn'
import TeamMember from '@/core/components/TeamMember'
import {
  coordenacao,
  design,
  logistica,
  marketing,
  relacoesExternas,
  suporteInformático,
} from '@/data/team'
import cn from 'classnames'

const EquipaPage = () => {
  return (
    <main className={cn('flex flex-col items-start py-9 px-5', 'lg:px-52')}>
      <h1
        className={cn(
          'font-bold border-t-4 border-primary-500 text-primary-500 text-2xl my-5 w-min',
          'md:w-auto',
          'lg:text-3xl lg:my-10'
        )}
      >
        Comité Executivo
      </h1>
      <div className="grid grid-cols-4 gap-20 mx-auto">
        {coordenacao.map((member, index) => (
          <div
            className="col-span-4 md:col-span-2 lg:col-span-1"
            key={`coordenacao-${index}`}
          >
            <Animate.FadeUp>
              <TeamMember
                src={member.image.src}
                name={member.name}
                role={member.role}
                onClickHandler={() =>
                  member.linkedin && window.open(member.linkedin)
                }
              />
            </Animate.FadeUp>
          </div>
        ))}
      </div>

      <h1
        className={cn(
          'font-bold border-t-4 border-primary-500 text-tertiary-500 text-2xl my-5 w-min',
          'md:w-auto',
          'lg:text-3xl lg:my-10'
        )}
      >
        Equipa de <span className="text-primary-500">Logística</span>
      </h1>

      <div className="grid grid-cols-4 gap-20 mx-auto">
        {logistica.map((member, index) => (
          <div
            className="col-span-4 md:col-span-2 lg:col-span-1"
            key={`logistica-${index}`}
          >
            <Animate.FadeUp>
              <TeamMember
                src={member.image.src}
                name={member.name}
                role={member.role}
                placeholderUrl={member.placeholder}
              />
            </Animate.FadeUp>
          </div>
        ))}
      </div>

      <h1
        className={cn(
          'font-bold border-t-4 border-primary-500 text-tertiary-500 text-2xl my-5 w-min',
          'md:w-auto',
          'lg:text-3xl lg:my-10'
        )}
      >
        Equipa de <span className="text-primary-500">Suporte Informático</span>
      </h1>

      <div className="grid grid-cols-4 gap-20 mx-auto">
        {suporteInformático.map((member, index) => (
          <div
            className="col-span-4 md:col-span-2 lg:col-span-1"
            key={`suport-informatico-${index}`}
          >
            <Animate.FadeUp>
              <TeamMember
                src={member.image.src}
                name={member.name}
                role={member.role}
                placeholderUrl={member.placeholder}
              />
            </Animate.FadeUp>
          </div>
        ))}
      </div>

      <h1
        className={cn(
          'font-bold border-t-4 border-primary-500 text-tertiary-500 text-2xl my-5 w-min',
          'md:w-auto',
          'lg:text-3xl lg:my-10'
        )}
      >
        Equipa de <span className="text-primary-500">Marketing</span>
      </h1>

      <div className="grid grid-cols-4 gap-20 mx-auto">
        {marketing.map((member, index) => (
          <div
            className="col-span-4 md:col-span-2 lg:col-span-1"
            key={`marketing-${index}`}
          >
            <Animate.FadeUp>
              <TeamMember
                src={member.image.src}
                name={member.name}
                role={member.role}
                placeholderUrl={member.placeholder}
              />
            </Animate.FadeUp>
          </div>
        ))}
      </div>

      <h1
        className={cn(
          'font-bold border-t-4 border-primary-500 text-tertiary-500 text-2xl my-5 w-min',
          'md:w-auto',
          'lg:text-3xl lg:my-10'
        )}
      >
        Equipa de <span className="text-primary-500">Relações Externas</span>
      </h1>

      <div className="grid grid-cols-4 gap-20 mx-auto">
        {relacoesExternas.map((member, index) => (
          <div
            className="col-span-4 md:col-span-2 lg:col-span-1"
            key={`relacoes-externas-${index}`}
          >
            <Animate.FadeUp>
              <TeamMember
                src={member.image.src}
                name={member.name}
                role={member.role}
                placeholderUrl={member.placeholder}
              />
            </Animate.FadeUp>
          </div>
        ))}
      </div>

      <h1
        className={cn(
          'font-bold border-t-4 border-primary-500 text-tertiary-500 text-2xl my-5 w-min',
          'md:w-auto',
          'lg:text-3xl lg:my-10'
        )}
      >
        Equipa de <span className="text-primary-500">Design</span>
      </h1>

      <div className="grid grid-cols-4 gap-20 mx-auto">
        {design.map((member, index) => (
          <div
            className="col-span-4 md:col-span-2 lg:col-span-1"
            key={`design-${index}`}
          >
            <Animate.FadeUp>
              <TeamMember
                src={member.image.src}
                name={member.name}
                role={member.role}
                placeholderUrl={member.placeholder}
              />
            </Animate.FadeUp>
          </div>
        ))}
      </div>
    </main>
  )
}

export default EquipaPage
