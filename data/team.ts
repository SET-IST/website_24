// Components
// People
// Coordenação
import BeatrizVenceslau from '@/assets/team/Coordenacao/Beatriz Venceslau.webp'
import BeatrizAlves from '@/assets/team/Coordenacao/Beatriz Alves.webp'
import ManuelCandeias from '@/assets/team/Coordenacao/Manuel Candeias.webp'

// Logística
import FabioSoares from '@/assets/team/Logistica/Fabio Soares.webp'
import AfonsoFaleiro from '@/assets/team/Logistica/Afonso Faleiro.webp'
import AfonsoVirtuoso from '@/assets/team/Logistica/Afonso Virtuoso.webp'
import BrunoSilva from '@/assets/team/Logistica/Bruno Silva.webp'
import DiogoMarques from '@/assets/team/Logistica/Diogo Marques.webp'
import GustavoRosa from '@/assets/team/Logistica/Gustavo Rosa.webp'
import InesCoelho from '@/assets/team/Logistica/Ines Coelho.webp'
import JoaoLobato from '@/assets/team/Logistica/Joao Lobato.webp'
import JoaoOliveira from '@/assets/team/Logistica/Joao Oliveira.webp'
import MariaJoaoLeite from '@/assets/team/Logistica/Maria Joao Leite.webp'
import MartaAbreu from '@/assets/team/Logistica/Marta Abreu.webp'
import MatildeLuis from '@/assets/team/Logistica/Matilde Luis.webp'
import PedroBarao from '@/assets/team/Logistica/Pedro Barao.webp'
import SamuelSousa from '@/assets/team/Logistica/Samuel Sousa.webp'
import SofiaCosta from '@/assets/team/Logistica/Sofia Costa.webp'

// Marketing
import AndreiaAzevedo from '@/assets/team/Marketing/Andreia Azevedo.webp'
import PedroGomes from '@/assets/team/Marketing/Pedro Gomes.webp'
import CarolinaSerpa from '@/assets/team/Marketing/Carolina Serpa.webp'
import DenysTsiple from '@/assets/team/Marketing/Denys Tsiple.webp'
import EvanetteEvaristo from '@/assets/team/Marketing/Evanette Evaristo.webp'
import GabrielGabriel from '@/assets/team/Marketing/Gabriel Gabriel.webp'
import MariaCosta from '@/assets/team/Marketing/Maria Costa.webp'
import MatildeCapelo from '@/assets/team/Marketing/Matilde Capelo.webp'
import NicoleFernandes from '@/assets/team/Marketing/Nicole Fernandes.webp'

// People
import AnaOliveira from '@/assets/team/People/Ana Oliveira.webp'
import AntonioToste from '@/assets/team/People/Antonio Toste.webp'
import EmaPinheiro from '@/assets/team/People/Ema Pinheiro.webp'
import LiaNeves from '@/assets/team/People/Lia Neves.webp'
import ManuelDias from '@/assets/team/People/Manuel Dias.webp'

// Relações Externas
import MartimAbreu from '@/assets/team/Relacoes_Externas/Martim Abreu.webp'
import BeatrizPinto from '@/assets/team/Relacoes_Externas/Beatriz Pinto.webp'
import MargaridaSousa from '@/assets/team/Relacoes_Externas/Margarida Sousa.webp'
import BeatrizMarques from '@/assets/team/Relacoes_Externas/Beatriz Marques.webp'
import BernardoGalante from '@/assets/team/Relacoes_Externas/Bernardo Galante.webp'
import CarlotaBarros from '@/assets/team/Relacoes_Externas/Carlota Barros.webp'
import CarolinaCruz from '@/assets/team/Relacoes_Externas/Carolina Cruz.webp'
import DorisaSilva from '@/assets/team/Relacoes_Externas/Dorisa Silva.webp'
import FranciscoSilva from '@/assets/team/Relacoes_Externas/Francisco Silva.webp'
import GuadalupeParamos from '@/assets/team/Relacoes_Externas/Guadalupe Paramos.webp'
import JoaoMorais from '@/assets/team/Relacoes_Externas/Joao Morais.webp'
import LuisDias from '@/assets/team/Relacoes_Externas/Luis Dias.webp'
import ManuelOliveira from '@/assets/team/Relacoes_Externas/Manuel Oliveira.webp'
import NunoMonteiro from '@/assets/team/Relacoes_Externas/Nuno Monteiro.webp'
import SaraMarques from '@/assets/team/Relacoes_Externas/Sara Marques.webp'
import TomasCarvalho from '@/assets/team/Relacoes_Externas/Tomas Carvalho.webp'
import TomasMorais from '@/assets/team/Relacoes_Externas/Tomas Morais.webp'

// Suporte Informático
import GoncaloSilva from '@/assets/team/Suporte_Informatico/Goncalo Silva.webp'
import AfonsoPires from '@/assets/team/Suporte_Informatico/Afonso Pires.webp'
import CarlosSilva from '@/assets/team/Suporte_Informatico/Carlos Silva.webp'
import MiguelTeixeira from '@/assets/team/Suporte_Informatico/Miguel Teixeira.webp'
import MiguelVale from '@/assets/team/Suporte_Informatico/Miguel Vale.webp'
import RenatoMarques from '@/assets/team/Suporte_Informatico/Renato Marques.webp'
import RicardoHorta from '@/assets/team/Suporte_Informatico/Ricardo Horta.webp'
import RodrigoAlves from '@/assets/team/Suporte_Informatico/Rodrigo Alves.webp'
import SamuelBarata from '@/assets/team/Suporte_Informatico/Samuel Barata.webp'
import TiagoCaldas from '@/assets/team/Suporte_Informatico/Tiago Caldas.webp'
import { StaticImageData } from 'next/image'

// Embaixadores
import AfonsoMelo from '@/assets/team/Embaixadores/Afonso de Mello.webp'
import AnaCordeiro from '@/assets/team/Embaixadores/Ana Cordeiro.webp'
import GuilhermeSoares from '@/assets/team/Embaixadores/Guilherme Soares.webp'
import InesMarques from '@/assets/team/Embaixadores/Ines Marques.webp'
import InesTomaz from '@/assets/team/Embaixadores/Ines Tomaz.webp'
import VhirJahit from '@/assets/team/Embaixadores/Vhir Jahit.webp'

export interface TeamMember {
  name: string
  image: StaticImageData
  customImagePosition?: string
  role: string
  linkedin: string
}

export interface IDepartment {
  name: string
  slug: string
  coordinators: TeamMember[]
  members: TeamMember[]
}

const coordenacao: IDepartment = {
  name: 'Coordenação',
  slug: 'coordenacao',
  coordinators: [
    {
      name: 'Beatriz Venceslau',
      image: BeatrizVenceslau,
      customImagePosition: '50% -5px',
      role: 'Coordenadora Financeira',
      linkedin: 'https://www.linkedin.com/in/beatriz-venceslau/',
    },
    {
      name: 'Beatriz Alves',
      image: BeatrizAlves,
      role: 'Coordenadora',
      linkedin: 'https://www.linkedin.com/in/beatriz-alves-3124612b2',
    },
    {
      name: 'Manuel Candeias',
      image: ManuelCandeias,
      role: 'Coordenador',
      linkedin: 'https://www.linkedin.com/in/manuel-candeias',
    },
  ],
  members: [],
}

const logistica: IDepartment = {
  name: 'Logística',
  slug: 'logistica',
  coordinators: [
    {
      name: 'Fábio Soares',
      image: FabioSoares,
      customImagePosition: '50% -35px',
      role: 'Coordenador',
      linkedin:
        'https://www.linkedin.com/in/fábio-alexandre-oliveira-soares-57545126a',
    },
  ],
  members: [
    {
      name: 'Afonso Faleiro',
      image: AfonsoFaleiro,
      role: 'Colaborador',
      linkedin: '',
    },
    {
      name: 'Afonso Virtuoso',
      image: AfonsoVirtuoso,
      customImagePosition: '50% -55px',
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/afonso-virtuoso-327042257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Bruno Silva',
      image: BrunoSilva,
      customImagePosition: '50% -20px',
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/bruno-silva-278907253',
    },
    {
      name: 'Diogo Marques',
      image: DiogoMarques,
      customImagePosition: '50% -20px',
      role: 'Colaborador',
      linkedin: '',
    },
    {
      name: 'Gustavo Rosa',
      image: GustavoRosa,
      role: 'Colaborador',
      linkedin: '',
    },
    {
      name: 'Inês Coelho',
      image: InesCoelho,
      customImagePosition: '50% -30px',
      role: 'Colaboradora',
      linkedin: 'https://linkedin.com/in/inescoelho03',
    },
    {
      name: 'João Lobato',
      image: JoaoLobato,
      customImagePosition: '50% -40px',
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/joao-rafael-lobato',
    },
    {
      name: 'João Oliveira',
      image: JoaoOliveira,
      customImagePosition: '50% -30px',
      role: 'Colaborador',
      linkedin: '',
    },
    {
      name: 'Maria João Leite',
      image: MariaJoaoLeite,
      customImagePosition: '50% -50px',
      role: 'Colaboradora',
      linkedin: '',
    },
    {
      name: 'Marta Abreu',
      image: MartaAbreu,
      customImagePosition: '50% -40px',
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/marta-alexandra-abreu',
    },
    {
      name: 'Matilde Luís',
      image: MatildeLuis,
      customImagePosition: '50% -30px',
      role: 'Colaboradora',
      linkedin: '',
    },
    {
      name: 'Pedro Barão',
      image: PedroBarao,
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/pedro-bar%C3%A3o-96a2b422a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Samuel Sousa',
      image: SamuelSousa,
      customImagePosition: '50% -30px',
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/samuelsousa99037/',
    },
    {
      name: 'Sofia Costa',
      image: SofiaCosta,
      customImagePosition: '50% -30px',
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/sofia-t-costa/',
    },
  ],
}

const marketingDesign: IDepartment = {
  name: 'Marketing e Design',
  slug: 'design',
  coordinators: [
    {
      name: 'Andreia Azevedo',
      image: AndreiaAzevedo,
      role: 'Coordenadora',
      linkedin: 'https://www.linkedin.com/in/andreiasilvaazevedo',
      customImagePosition: '50% -45px',
    },
    {
      name: 'Pedro Gomes',
      image: PedroGomes,
      role: 'Coordenador',
      linkedin:
        'https://www.linkedin.com/in/pedro-gomes-25727516b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      customImagePosition: '50% -45px',
    },
  ],
  members: [
    {
      name: 'Carolina Serpa',
      image: CarolinaSerpa,
      customImagePosition: '50% -25px',
      role: 'Colaboradora',
      linkedin: '',
    },
    {
      name: 'Denys Tsiple',
      image: DenysTsiple,
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/denys-undefined-aa5b26275',
      customImagePosition: '50% -35px',
    },
    {
      name: 'Evanette Evaristo',
      image: EvanetteEvaristo,
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/evanette-evaristo-19760023a',
      customImagePosition: '50% -35px',
    },
    {
      name: 'Gabriel Gabriel',
      image: GabrielGabriel,
      customImagePosition: '50% -70px',
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/gabriel-gabriel-bb261a25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Maria Costa',
      image: MariaCosta,
      customImagePosition: '50% -20px',
      role: 'Colaboradora',
      linkedin: '',
    },
    {
      name: 'Matilde Capelo',
      image: MatildeCapelo,
      customImagePosition: '50% -35px',
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/matilde-lopes-633207241/',
    },
    {
      name: 'Nicole Fernandes',
      image: NicoleFernandes,
      customImagePosition: '50% -20px',
      role: 'Colaboradora',
      linkedin:
        'https://www.linkedin.com/in/nicole-fernandes-figueiredo-869abb234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
  ],
}

const people: IDepartment = {
  name: 'People',
  slug: 'people',
  coordinators: [
    {
      name: 'Ana Oliveira',
      image: AnaOliveira,
      role: 'Coordenadora',
      linkedin: 'https://www.linkedin.com/in/ana-lemos-oliveira',
    },
  ],
  members: [
    {
      name: 'António Toste',
      image: AntonioToste,
      customImagePosition: '50% -20px',
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/antonio-toste/',
    },
    {
      name: 'Ema Pinheiro',
      image: EmaPinheiro,
      customImagePosition: '50% -20px',
      role: 'Colaboradora',
      linkedin: 'https://linkedin.com/in/ema-pinheiro-77879a256',
    },
    {
      name: 'Lia Neves',
      image: LiaNeves,
      customImagePosition: '55% -35px',
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/lia-neves1123',
    },
    {
      name: 'Manuel Dias',
      image: ManuelDias,
      customImagePosition: '50% -30px',
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/manuelmldias',
    },
  ],
}

const relacoesExternas: IDepartment = {
  name: 'Relações Externas',
  slug: 'relacoes_externas',
  coordinators: [
    {
      name: 'Martim Abreu',
      image: MartimAbreu,
      customImagePosition: '45% -30px',
      role: 'Coordenador',
      linkedin: 'https://www.linkedin.com/in/martim-abreu-4b8a29225/',
    },
    {
      name: 'Beatriz Pinto',
      image: BeatrizPinto,
      customImagePosition: '50% -20px',
      role: 'Coordenadora - Oradores',
      linkedin: 'https://www.linkedin.com/in/beatriz-ra-pinto/',
    },
    {
      name: 'Margarida Sousa',
      image: MargaridaSousa,
      role: 'Coordenadora - Empresas',
      linkedin: 'https://www.linkedin.com/in/margaridagoulaodesousa/',
    },
  ],
  members: [
    {
      name: 'Beatriz Marques',
      image: BeatrizMarques,
      role: 'Colaboradora',
      linkedin:
        'https://www.linkedin.com/in/beatriz-marques-35a016234?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGTLDfxTHR8appMSAiYkeeQ%3D%3D',
    },
    {
      name: 'Bernardo Galante',
      image: BernardoGalante,
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/bernardo-galante-502aa4112/',
    },
    {
      name: 'Carlota Barros',
      image: CarlotaBarros,
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/carlota-barros',
    },
    {
      name: 'Carolina Cruz',
      image: CarolinaCruz,
      customImagePosition: '45% -35px',
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/carolina-pinto-da-cruz-1b690b250/',
    },
    {
      name: 'Dorisa Silva',
      image: DorisaSilva,
      customImagePosition: '45% -25px',
      role: 'Colaboradora',
      linkedin: 'https://pt.linkedin.com/in/dorisa-silva-026574213',
    },
    {
      name: 'Francisco Silva',
      image: FranciscoSilva,
      customImagePosition: '53% -55px',
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/francisco-nogueira-da-silva?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Guadalupe Paramos',
      image: GuadalupeParamos,
      customImagePosition: '50% -60px',
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/guadalupeparamos',
    },
    {
      name: 'João Morais',
      image: JoaoMorais,
      customImagePosition: '50% -30px',
      role: 'Colaborador',
      linkedin: '',
    },
    {
      name: 'Luís Dias',
      image: LuisDias,
      role: 'Colaborador',
      linkedin: '',
    },
    {
      name: 'Manuel Oliveira',
      image: ManuelOliveira,
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/manuel-oliveira-18859126b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Nuno Monteiro',
      image: NunoMonteiro,
      customImagePosition: '45% -30px',
      role: 'Colaborador',
      linkedin: '',
    },
    {
      name: 'Sara Marques',
      image: SaraMarques,
      role: 'Colaboradora',
      linkedin: '',
      customImagePosition: '45% -30px',
    },
    {
      name: 'Tomás Carvalho',
      image: TomasCarvalho,
      customImagePosition: '50% -20px',
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/tomasrvcarvalho?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Tomás Morais',
      image: TomasMorais,
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/tomasamorais/',
      customImagePosition: '50% -25px',
    },
  ],
}

const suporteInformatico: IDepartment = {
  name: 'Suporte Informático',
  slug: 'suporte_informatico',
  coordinators: [
    {
      name: 'Gonçalo Silva',
      image: GoncaloSilva,
      customImagePosition: '50% -50px',
      role: 'Coordenador',
      linkedin: 'https://www.linkedin.com/in/goncaloacbs/',
    },
  ],

  members: [
    {
      name: 'Afonso Pires',
      image: AfonsoPires,
      customImagePosition: '50% -30px',
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/afonso-pires-b155a2222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Carlos Silva',
      image: CarlosSilva,
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/carlos-henrique-hermanny-moreira-da-silva-782a45165/',
    },
    {
      name: 'Miguel Teixeira',
      image: MiguelTeixeira,
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/miguel-teixeira-1a4b01276/',
    },
    {
      name: 'Miguel Vale',
      image: MiguelVale,
      customImagePosition: '50% -30px',
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/miguel-vale-71090824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Renato Marques',
      image: RenatoMarques,
      customImagePosition: '50% -40px',
      role: 'Colaborador',
      linkedin: '',
    },
    {
      name: 'Ricardo Horta',
      image: RicardoHorta,
      customImagePosition: '55% -50px',
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/ricardo-horta-9b2825254',
    },
    {
      name: 'Rodrigo Alves',
      image: RodrigoAlves,
      customImagePosition: '50% -35px',
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/rodrigo-alves-975562223/',
    },
    {
      name: 'Samuel Barata',
      image: SamuelBarata,
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/samuel-barata/',
    },
    {
      name: 'Tiago Caldas',
      image: TiagoCaldas,
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/tiago-caldas-26a387268',
    },
  ],
}

const embaixadores: IDepartment = {
  name: 'Embaixadores',
  slug: 'embaixadores',
  coordinators: [],
  members: [
    {
      name: 'Afonso de Melo',
      image: AfonsoMelo,
      role: 'Embaixador',
      linkedin: 'www.linkedin.com/in/afonsodemello',
      customImagePosition: '50% -50px',
    },
    {
      name: 'Ana Cordeiro',
      image: AnaCordeiro,
      role: 'Embaixadora',
      linkedin: 'https://www.linkedin.com/in/maria-teresa-madeira-',
      customImagePosition: '50% -30px',
    },
    {
      name: 'Guilherme Soares',
      image: GuilhermeSoares,
      role: 'Embaixador',
      linkedin: 'https://www.linkedin.com/in/guilherme-m-soares/',
      customImagePosition: '50% -30px',
    },
    {
      name: 'Inês Marques',
      image: InesMarques,
      role: 'Embaixadora',
      linkedin: '',
      customImagePosition: '50% -25px',
    },
    {
      name: 'Inês Tomaz',
      image: InesTomaz,
      role: 'Embaixadora',
      linkedin: 'https://www.linkedin.com/in/in%C3%AAs-tomaz-39b9b1261/',
      customImagePosition: '50% -20px',
    },
    {
      name: 'Vhir Jahit',
      image: VhirJahit,
      role: 'Embaixador',
      linkedin: 'www.linkedin.com/in/vhir-sacarlal-9395aa278',
      customImagePosition: '50% -55px',
    },
  ],
}

export {
  coordenacao,
  marketingDesign,
  logistica,
  people,
  relacoesExternas,
  suporteInformatico,
  embaixadores,
}
