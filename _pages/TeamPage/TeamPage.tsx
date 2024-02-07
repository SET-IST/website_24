import {
  coordenacao,
  marketingDesign,
  logistica,
  people,
  relacoesExternas,
  suporteInformatico,
  embaixadores,
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
      <div className="w-full flex flex-col gap-12">
        <Department {...coordenacao} />
        <Department {...marketingDesign} />
        <Department {...suporteInformatico} />
        <Department {...relacoesExternas} />
        <Department {...logistica} />
        <Department {...people} />
        <Department {...embaixadores} />
      </div>
    </div>
  )
}

export default TeamPage
