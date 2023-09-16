import cn from 'classnames'
import { DateTime } from 'luxon'
//  Components
import ActivityCard from '@/components/activity'
import { Animate } from '@/components/AnimateIn'
import Tabs from '@/core/components/Tabs'
import DailySchedule from './components/DailySchedule'
//  Hooks
import { useGoogleSchedule } from '@/lib/hooks/use-google-schedule'
//  Assets
import Palestra from '@/core/assets/img/palestra-palco.webp'
import SpeedInterview from '@/core/assets/img/speed-interview.webp'
import TeamBuilding from '@/core/assets/img/team-building.webp'
import Workshop from '@/core/assets/img/workshop.webp'
//  Types
import type { Event } from '@/core/services/api/schedule'
import { EventType } from './types'

const filterByDay = (schedule: Event[], day: number) =>
  schedule
    .filter((event) => {
      const start = event.start.substring(1, event.start.length - 1)
      const eventDate = DateTime.fromISO(start)
      return eventDate.day === day
    })
    .sort((a, b) => {
      const startA = a.start.substring(1, a.start.length - 1)
      const startB = b.start.substring(1, b.start.length - 1)
      const dateA = DateTime.fromISO(startA)
      const dateB = DateTime.fromISO(startB)

      // compare the hours first
      if (dateA.hour !== dateB.hour) {
        return dateA.hour - dateB.hour
      }

      // if the hours are equal, compare the minutes
      return dateA.minute - dateB.minute
    })

const filterByType = (schedule: Event[], type: string) =>
  type === EventType.PAINEL
    ? schedule.filter(
        (event) =>
          event.type === type ||
          event.type === EventType.PALESTRA ||
          event.type === EventType.EMPRESA
      )
    : schedule.filter((event) => event.type === type)

const AtividadesPage = () => {
  const { schedule, isLoading, isError } = useGoogleSchedule()

  const filteredSchedule = schedule
    ? schedule.filter((event) => event !== null)
    : []

  return (
    <main>
      <div
        className={cn(
          'bg-slate-700 py-10 px-10 font-sans items-center',
          'md:px-20',
          'lg:px-40'
        )}
      >
        <h1 className="py-8 text-center text-white text-4xl font-sans font-semibold ">
          Programa
        </h1>
        {isLoading ? (
          <div className="h-screen">
            <h2 className="text-white">A carregar o programa...</h2>
          </div>
        ) : isError ? (
          <div className="h-screen">
            <h2 className="text-white">Erro a carregar o programa</h2>
          </div>
        ) : schedule ? (
          <Tabs
            wrapperClassName="justify-center"
            tabsConfig={[
              {
                title: 'Dia 13',
                content: (
                  <DailySchedule
                    oradores={filterByType(
                      filterByDay(filteredSchedule, 13),
                      EventType.PAINEL
                    )}
                    workshops={filterByType(
                      filterByDay(filteredSchedule, 13),
                      EventType.WORKSHOP
                    )}
                    atividades={filterByType(
                      filterByDay(filteredSchedule, 13),
                      EventType.ATIVIDADES
                    )}
                  />
                ),
              },
              {
                title: 'Dia 14',
                content: (
                  <DailySchedule
                    oradores={filterByType(
                      filterByDay(filteredSchedule, 14),
                      EventType.PAINEL
                    )}
                    workshops={filterByType(
                      filterByDay(filteredSchedule, 14),
                      EventType.WORKSHOP
                    )}
                    atividades={filterByType(
                      filterByDay(filteredSchedule, 14),
                      EventType.ATIVIDADES
                    )}
                  />
                ),
              },

              {
                title: 'Dia 15',
                content: (
                  <DailySchedule
                    oradores={filterByType(
                      filterByDay(filteredSchedule, 15),
                      EventType.PAINEL
                    )}
                    workshops={filterByType(
                      filterByDay(filteredSchedule, 15),
                      EventType.WORKSHOP
                    )}
                    atividades={filterByType(
                      filterByDay(filteredSchedule, 15),
                      EventType.ATIVIDADES
                    )}
                  />
                ),
              },
              {
                title: 'Dia 16',
                content: (
                  <DailySchedule
                    oradores={filterByType(
                      filterByDay(filteredSchedule, 16),
                      EventType.PAINEL
                    )}
                    workshops={filterByType(
                      filterByDay(filteredSchedule, 16),
                      EventType.WORKSHOP
                    )}
                    atividades={filterByType(
                      filterByDay(filteredSchedule, 16),
                      EventType.ATIVIDADES
                    )}
                  />
                ),
              },
            ]}
          />
        ) : null}
      </div>
      <div className="p-10 font-sans items-center">
        <h1 className="p-10 text-center text-primary-500 text-4xl font-sans font-semibold ">
          Atividades
        </h1>
        <div className=" bg-white p-4 flex flex-col gap-2 sm:gap-14 md:gap-32">
          <ActivityCard title="Speed Interviews" image={SpeedInterview}>
            <Animate.FadeUp>
              <p>
                Uma Speed Interview é um pitch de 2/3 minutos em que te
                apresentas a um conjunto de empresas que te darão feedback, o
                que perfaz um total de 10 minutos de interação com as empresas.
              </p>
            </Animate.FadeUp>
            <Animate.FadeUp>
              <p>
                Podes submeter o teu CV para que as empresas tenham acesso ao
                mesmo durante o teu pitch! Se fores aceite, receberás um email
                com a confirmação do dia e hora para a sessão, que será na sala
                0-67/0-69.
              </p>
            </Animate.FadeUp>
          </ActivityCard>
          <ActivityCard title="Team Building" image={TeamBuilding} flip>
            <Animate.FadeUp>
              <p>
                Os inscritos vão ser divididos em grupos e receber um case study
                para resolver e apresentar uma resposta às empresas. Em vez do
                case study, poderá ser-te atribuído um problema do dia a dia, em
                que o objetivo, desta vez, será apresentar às empresas um
                produto (objeto ou serviço) que resolva o problema.
              </p>
            </Animate.FadeUp>
            <Animate.FadeUp>
              <p>
                O problema e o case study serão relacionados com a área da
                engenharia, num âmbito empresarial. Ao preencher o forms da
                inscrição, receberás a confirmação do dia e hora da sessão, que
                será na sala 0.67/0.69
              </p>
            </Animate.FadeUp>
          </ActivityCard>
          <ActivityCard title="Palestras" image={Palestra}>
            <Animate.FadeUp>
              <p>
                Poderás ouvir e questionar profissionais experientes na área da
                palestra. Irão ser abordados temas da atualidade e, por isso,
                incentivamos a participarem e conhecerem os nossos oradores
                presentes, nesta edição.
              </p>
            </Animate.FadeUp>
          </ActivityCard>
          <ActivityCard title="Workshops" image={Workshop} flip>
            <Animate.FadeUp>
              <p>
                A Magma (organizadora deste workshop) vem te esclarecer todas as
                dúvidas acerca de como comunicares no mundo profissional de
                forma eficaz. Vais aprender como estabelecer a tua própria rede
                de contactos e como geri-la. Tudo com exemplos práticos é
                templates de comunicação.
              </p>
            </Animate.FadeUp>
            <Animate.FadeUp>
              <p>
                A JUNITEC irá oferecer formação presencial em diversas áreas de
                gestão de projeto, com foco especial em gestão de tarefas,
                equipas e metodologias de gestão ágil.
              </p>
            </Animate.FadeUp>
            <Animate.FadeUp>
              <p>Ambos os workshops serão relaizados na sala 0.65</p>
            </Animate.FadeUp>
          </ActivityCard>
        </div>
      </div>
    </main>
  )
}

export default AtividadesPage
