import {
  coordenacao,
  design,
  logistica,
  marketing,
  relacoesExternas,
  suporteInformático,
} from '@/data/team'
import cn from 'classnames'
import Header from './components/Header'
import Department from './components/Department'

const TeamPage = () => {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-8 py-16 px-5 md:px-32 lg:px-40 bg-[color:var(--mantine-color-white)]'
      )}
    >
      <Header />
      <div className=" w-full flex flex-col gap-12">
        <Department
          data={coordenacao}
          title="Comité Executivo"
          slug="coordenacao"
        />
        <Department
          data={logistica}
          title="Equipa de Logística"
          slug="logistica"
        />
        <Department
          data={suporteInformático}
          title="Equipa de Suporte Informático"
          slug="suporte_informatico"
        />
        <Department
          data={marketing}
          title="Equipa de Marketing"
          slug="marketing"
        />
        <Department
          data={relacoesExternas}
          title="Equipa de Relações Externas"
          slug="relacoes_externas"
        />
        <Department data={design} title="Equipa de Design" slug="design" />
      </div>
    </div>
  )
}

export default TeamPage
