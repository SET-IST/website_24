// Components
// People
// Coordenação
import BeatrizVenceslau from '@/assets/team/Coordenacao/Beatriz Venceslau.webp'
import BeatrizAlves from '@/assets/team/Coordenacao/Beatriz Alves.webp'
import ManuelCandeias from '@/assets/team/Coordenacao/Manuel Candeias.webp'

// Logística
import FabioSoares from '@/assets/team/Logistica/Fábio Soares.webp'
import AfonsoFaleiro from '@/assets/team/Logistica/Afonso Faleiro.webp'
import AfonsoVirtuoso from '@/assets/team/Logistica/Afonso Virtuoso.webp'
import BrunoSilva from '@/assets/team/Logistica/Bruno Silva.webp'
import DiogoMarques from '@/assets/team/Logistica/Diogo Marques.webp'
import GustavoRosa from '@/assets/team/Logistica/Gustavo Rosa.webp'
import InesCoelho from '@/assets/team/Logistica/Inês Coelho.webp'
import JoaoLobato from '@/assets/team/Logistica/João Lobato.webp'
import JoaoOliveira from '@/assets/team/Logistica/João Oliveira.webp'
import MariaJoaoLeite from '@/assets/team/Logistica/Maria João Leite.webp'
import MartaAbreu from '@/assets/team/Logistica/Marta Abreu.webp'
import MatildeLuis from '@/assets/team/Logistica/Matilde Luís.webp'
import PedroBarao from '@/assets/team/Logistica/Pedro Barão.webp'
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
import AntonioToste from '@/assets/team/People/António Toste.webp'
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
import JoaoMorais from '@/assets/team/Relacoes_Externas/João Morais.webp'
import LuisDias from '@/assets/team/Relacoes_Externas/Luís Dias.webp'
import ManuelOliveira from '@/assets/team/Relacoes_Externas/Manuel Oliveira.webp'
import NunoMonteiro from '@/assets/team/Relacoes_Externas/Nuno Monteiro.webp'
import SaraMarques from '@/assets/team/Relacoes_Externas/Sara Marques.webp'
import TomasCarvalho from '@/assets/team/Relacoes_Externas/Tomás Carvalho.webp'
import TomasMorais from '@/assets/team/Relacoes_Externas/Tomás Morais.webp'

// Suporte Informático
import GoncaloSilva from '@/assets/team/Suporte_Informatico/Gonçalo Silva.webp'
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

//Embaixadores

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
      customImagePosition: '50% -80px',
      role: 'Coordenadora Financeira',
      linkedin: 'https://www.linkedin.com/in/beatriz-venceslau/',
    },
    {
      name: 'Beatriz Alves',
      image: BeatrizAlves,
      role: 'Coordenadora',
      linkedin: '',
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
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/afonso-virtuoso-327042257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Bruno Silva',
      image: BrunoSilva,
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/bruno-silva-278907253',
    },
    {
      name: 'Diogo Marques',
      image: DiogoMarques,
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
      role: 'Colaboradora',
      linkedin: 'http://linkedin.com/in/inescoelho03',
    },
    {
      name: 'João Lobato',
      image: JoaoLobato,
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/joao-rafael-lobato',
    },
    {
      name: 'João Oliveira',
      image: JoaoOliveira,
      role: 'Colaborador',
      linkedin: '',
    },
    {
      name: 'Maria João Leite',
      image: MariaJoaoLeite,
      role: 'Colaboradora',
      linkedin: '',
    },
    {
      name: 'Marta Abreu',
      image: MartaAbreu,
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/marta-alexandra-abreu',
    },
    {
      name: 'Matilde Luís',
      image: MatildeLuis,
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
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/samuelsousa99037/',
    },
    {
      name: 'Sofia Costa',
      image: SofiaCosta,
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
    },
    {
      name: 'Pedro Gomes',
      image: PedroGomes,
      role: 'Coordenador',
      linkedin:
        'https://www.linkedin.com/in/pedro-gomes-25727516b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
  ],
  members: [
    {
      name: 'Carolina Serpa',
      image: CarolinaSerpa,
      customImagePosition: '50% -50px',
      role: 'Colaboradora',
      linkedin: '',
    },
    {
      name: 'Denys Tsiple',
      image: DenysTsiple,
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/denys-undefined-aa5b26275',
    },
    {
      name: 'Evanette Evaristo',
      image: EvanetteEvaristo,
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/evanette-evaristo-19760023a',
    },
    {
      name: 'Gabriel Gabriel',
      image: GabrielGabriel,
      customImagePosition: '50% 0px',
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/gabriel-gabriel-bb261a25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Maria Costa',
      image: MariaCosta,
      customImagePosition: '50% -60px',
      role: 'Colaboradora',
      linkedin: '',
    },
    {
      name: 'Matilde Capelo',
      image: MatildeCapelo,
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/matilde-lopes-633207241/',
    },
    {
      name: 'Nicole Fernandes',
      image: NicoleFernandes,
      customImagePosition: '50% -60px',
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
      linkedin: '',
    },
  ],
  members: [
    {
      name: 'António Toste',
      image: AntonioToste,
      customImagePosition: '50% -70px',
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/antonio-toste/',
    },
    {
      name: 'Ema Pinheiro',
      image: EmaPinheiro,
      customImagePosition: '50% -60px',
      role: 'Colaboradora',
      linkedin: 'http://linkedin.com/in/ema-pinheiro-77879a256',
    },
    {
      name: 'Lia Neves',
      image: LiaNeves,
      customImagePosition: '55% -40px',
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/lia-neves1123',
    },
    {
      name: 'Manuel Dias',
      image: ManuelDias,
      customImagePosition: '50% -50px',
      role: 'Colaborador',
      linkedin: 'http://www.linkedin.com/in/manuelmldias',
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
      customImagePosition: '45% -60px',
      role: 'Coordenador',
      linkedin: 'https://www.linkedin.com/in/martim-abreu-4b8a29225/',
    },
    {
      name: 'Beatriz Pinto',
      image: BeatrizPinto,
      customImagePosition: '50% -60px',
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
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/carolina-pinto-da-cruz-1b690b250/',
    },
    {
      name: 'Dorisa Silva',
      image: DorisaSilva,
      customImagePosition: '45% -65px',
      role: 'Colaboradora',
      linkedin: 'https://pt.linkedin.com/in/dorisa-silva-026574213',
    },
    {
      name: 'Francisco Silva',
      image: FranciscoSilva,
      customImagePosition: '53% -15px',
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/francisco-nogueira-da-silva?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Guadalupe Paramos',
      image: GuadalupeParamos,
      customImagePosition: '50% 0px',
      role: 'Colaboradora',
      linkedin: 'https://www.linkedin.com/in/guadalupeparamos',
    },
    {
      name: 'João Morais',
      image: JoaoMorais,
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
      customImagePosition: '45% -50px',
      role: 'Colaborador',
      linkedin: '',
    },
    {
      name: 'Sara Marques',
      image: SaraMarques,
      role: 'Colaboradora',
      linkedin: '',
    },
    {
      name: 'Tomás Carvalho',
      image: TomasCarvalho,
      customImagePosition: '50% -60px',
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/tomasrvcarvalho?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Tomás Morais',
      image: TomasMorais,
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/tomasamorais/',
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
      customImagePosition: '50% -30px',
      role: 'Coordenador',
      linkedin: 'https://www.linkedin.com/in/goncaloacbs/',
    },
  ],

  members: [
    {
      name: 'Afonso Pires',
      image: AfonsoPires,
      customImagePosition: '50% -50px',
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
      role: 'Colaborador',
      linkedin:
        'https://www.linkedin.com/in/miguel-vale-71090824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Renato Marques',
      image: RenatoMarques,
      role: 'Colaborador',
      linkedin: '',
    },
    {
      name: 'Ricardo Horta',
      image: RicardoHorta,
      customImagePosition: '55% -30px',
      role: 'Colaborador',
      linkedin: 'https://www.linkedin.com/in/ricardo-horta-9b2825254',
    },
    {
      name: 'Rodrigo Alves',
      image: RodrigoAlves,
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
      linkedin: 'http://www.linkedin.com/in/tiago-caldas-26a387268',
    },
  ],
}


const embaixadores = [
  {
    name: 'Afonso de Melo',
    image: AfonsoMelo,
    role: 'Embaixador',
    linkedin: 'www.linkedin.com/in/afonsodemello',
    placeholder:
      'data:image/webp;base64,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',
  },
  {
    name: 'Ana Cordeiro',
    image: AnaCordeiro,
    role: 'Embaixador',
    linkedin: 'https://www.linkedin.com/in/maria-teresa-madeira-',
    placeholder:
      'data:image/webp;base64,UklGRmoQAABXRUJQVlA4WAoAAAAgAAAANgMANgMASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfA4AAFDnAJ0BKjcDNwM+7XayVT+zqiMh0MnL8B2JaW7hY9eylhw504e1e/N3g+ckcRQL//sPWCfx6yW4cnl/7AChbKrLQtlZejF2KbfEKgmaSFOLKYACSFMABJCmNS+32+qeIR6l9Bz6Sd31q+oKpZchoPVUI1LFelQzXZhIl1T5H05NJLqpj8WW7vr7pLSGHof6MVa54oebusL4yo6zbdnIf67yMTqDOhy43YJ1GmLl8iEQgj04tMiX9ws8mncakXI+U+FP3JgjkxZAYVQD6+nG0tUC/J9c2KeJMUavomejaT9+1rNBp9JpnDf5d/BywBcbsE6ja1g1QHsmhynf7+oq/VFYfMhBH3HTCENXLvOmoUAQ37wW/3rUJsGSrc3XW7aSsyWHDf1R0L5qWHQZOq4j2RzaaZvk1pr4+fLE1+vWrOibBf5X98v432X9nybG2gR8fTVJr5+Pm+MUTHxxrGn0nFW5urlAALqKS1ccU2RWH2+4ya1D8fN7kQ9YLqNrJUiiFKaZvk2HMfN7k3m8TWVU6aZwWelSnrfSoTYMiuUiZ0V+4ya1D8ZmXk7l8sRfj5ltGQnGsFxuENpWv2srw1FfTybJVubrW2MGnzYt3EzoTYetIP5Q2QV8TOjUV8TOhNh6+JnQmyqaavDUdh/mor4mdCbD11GdCbxU2DXvCbm6uPSZ81FfTya/Rr2g8Vb5FtEYAk9MqHHeHwpDekUohNC6+JvhGeTi3ydvfvLxevKw9feGwX+aiviZ0JoXX2Vaj6cTOBmyjznT5WcLMer8GgKYXaeK0kG+fjBbv81FfE3sibD18TOhNh696ocV8QKFuiOzzOWCNb4eKFsqstEkKFsqsm/oxO5Db9ADY5Lb6cbhNBbbJ7a44I+/WW1mPv1lqHEfqsi5WWocSETaLQ1vJQIMKdIT8+cQswBBiy0d536y1DiPv1lqHEffrLB7WogcRGzlHD9idwI0Gkw2ffwG+UUyhf2B9vACSFMABJCmAAeHtah8u8bL9CIxCmPhP5mww2ocBoG8vyTDstC2VWWhbKrLQtlSZtbiL8i4hMsIawXGZht9ONYKwIwHihbKrLQtlVloWyqyyiuxuPpSVCUW7q5VxO9D4DCq4AnXYOA+3gBJCZEH28AJIU1+gDCurltEQnKLlV1vNfZVDSnAfbwAkhU1fgBJCmAA2kB1aqQKVo+1ricI/5WfxI9iUwAElRz6cB9vACSId3OJNPHdXGQgqtfJrUdjlqSFMABJCmAAkhTAASPsT0mmb5UHLi8tSU/QnUXc/6pcakMWUwAEkKYACSFMAA8Pa1D8fN7kQ9YLpAF8msqLtRKHZLrLXBwH28AJIUwAEkKXsbTTN8mtQ/HzfQwsg1rBHuCGm6nVOLZVZaFsqstC2VWWhXzBfJr2VmYH38Rx/Do+/S/oXGCN9vACSFMABJCmAAkhWj+fp/xf6r5cq8YiNk1cBbKrLQtlVloWyqy0LXNA3OTsm35DpAAf/9PfAGXqhhYtC2VWWhbKrLQtlVloV3zm+N2mlx5Namkz1kSLDm+JfQeKFsqstC2VWWhbKrLQRWA0342xTE1qU+WtLZXXHkayEABJCmAAkhTAASQpgAH5xP4kSXx9AbHnLxCnz+0hAASQpgAJIUwAEkKYALXkzsMuVUdRHCVh23v82KKCSFMABJCmAAkhTAASRSw9mGoDnt7+h3hci0MvWmHVQgAJIUwAEkKYACSFL4TvdqWHDf1Rgum2OISgpNvfjVkIACSFMABJCmAAkhWAzSl7utJr0kSnYbZqEVw3PHeYJmkhTAASQpgAJIUwAE7hEixg0+b3JrDiK2F8wOooYeFbKrLQtlVloWyqy0LZVpEh6wXaE41hT/sv7Pkwo/lLkRkjfbwAkhTAASQpgAJIUz2jYH5rCoAXcsmd4kiGH23ZZuZ3m+3gBJCmAAkhTAASTXWjBc7aQ2bPsa4Nz3eesRTzfbwAkhTAASQpgAJIUoc6t5hKwD2l2Mt73rEljkag/F4oWyqy0LZVZaFsqstDkOFnzWFK0zgs5/zUCNqvRkbrgdWWhbKrLQtlVloWyqyf0M7B9rjZCcbsFpm1WZMtXsjCqhAASQpgAJIUwAEkKYAB9Haf+KSNe3VM8trJjpHeA+3gBJCmAAkhTAASQpgCea9ODAIMtMpm9lU6i1FsqstC2VWWhbKrLQtlVoG5Vr6EcnSnC1+ZzP68WhbKrLQtlVloWyqy0LZZm+7N1cTghuTPmWsZHD4x8x9+stQ4j79ZahxH36y1DiQkhu/ONmZfTWSw4VTbJoEzJ+A+3gBJCmAAkhTAASQpgjwFPm9yIesFxszL6ZdIG/WQskb7eAEkKYACSFMABJCmfIub3Ib85k/NNxyl9wvkNs4RPNkR9+stQ4j79ZahxH36y1DpUlqq2XNyQ6GpGy4IYwuG2lOA+3gBJCmAAkhTAASXGFh8NIGCkCow9iLdmUM4Z6UwAEkKYACSFMABI9gAAP720z9qvfQ5Itr7thPD/eu325tiHcGgarL+C3IXWuHd5V24C2FFxz8cYRn7/W+OGSi4MYQuLMEtWSTxP+qNyxFkSmdZyvKUhS8tG4nbU8XrHon1tBjrZZFvRMrXRFlmqbUcEWaSYjH4R+7hUsgtQ+Pv1S30hwBWpADgjKVCwMih2lm/h4wcqGoWR6OJkZn7J2uTjiwXIltZZYvDFjTsujo9Og/TTF43ZjW7UKomMp5yXqFb9O7ZT5wpZ5rA4Ltug1k60RlQiCF2GGxQDS4RqqdQUhHZN7XjC8AKUztJvJIR38iTAz0zJoXkS8ypOe1BYmRQUpWbAmktGaNlfr17ZKojsrZgbJzNaUKaCio2PAilXW00tEDDi4vSQKafP/xbf82G/LTkV72fmsnAEEz2DPXJP4xTu0TN0q5BinFWjpVnY17VLlIQrxSiwAqsrVzR+e6UcnFjpdVy9Uf/nX+anOIgd12P95IKbN/KY4BKNCe/2X1+I9fl05fq5QwC0MDxmHmANoarORtA9ag2es3l4ifx39Yoej1d6H7lypgvP6lD5LiiGnjlc2L/n+kbyJbh5Z9sIr/t4/pewvogY+QFJ7WMECbQVa+pu8WIzSmV2ZygjRU/tDu9lVTHGjftPwrDK4XZSN2IpA0bMOrduTMAfjmSurC7xK7AHDOmqR0Te5WZZ9SULC0mbfZsu0mSedF/vqUldGgZFZx2OlaZ70+/BqABdeCFqH5Iz7E9pN2wElnGUEdgK2LC2agn8AxPd5vCBzlJsLepCc+Lm3cHb18wsfSrbk7paUU82ckESsKR6EN+cUhVptWqJF6bgAAAn3MpwAGBYh8qtWVPtLjEaOEr39Zs/85U1zrKT3RJBtzkHPFDkORSrPxHLj88WBBrCAEuIkKZ5xTa1APFGZkbAi7NzXVFst+Jk6yRZ5V22np2QdJhTyMEnp3yK5SuEAAGNNUv3Tzt7uoeYTGw/XJ+ybv4LOGJUjsPPAACSyys+H3xFvQqLt5nc68X9madFjPeM9oJ7+OonX5rz7cQAAABMmFGodgtsKRRRQ9IOOqjP84wBt1TfUQdcLvBz4NpQJ4JKtgK5WdUwl7t7AAAAAJkv/f+utETZ1fuOGBx2zeCHU6M+GOJV4U3ToYgTH1xj/H0Jndm0AAAAJkv/WHwrb3WjxSgjIMVgTjcfW5bZZQJ+I+wXp5uoADNWZwgOHFV1APgd7JUHcDN6w2q4HcOwewyO6eOsANm6VTE7DgBnpduWy4MIDb0u8F8MoISKHiAAABNKgShVGatwiDvPr1nRqL6ML19f0rceqHftLsAAAExUllBZeyQGnPwyx9sFsRP6uki8c5uJM1s2HtaYgAAJi6VpazDh5KTO3VOAX2IAqDWCT9sM3pcO6cuCx4gUEAADVp4quoV/EARYsl2HHzfDMyW9x+KqzynoApuLhhAAACXAUBIWB1sQHUqKrvjkywY/2JAoAQcDTchxiWA58/ydHvSBAAAAR3gk+mtDLPAlCwDCr0i1VbvIZAlrPiFcdmQAAACanytt3KmSt0r1PZtCHnPQL2BipJgEEpBjiVU4+gAAAEwNy8DKKgdfOK6Ko9toM/Q8DSRxwgZMslzTV9IQAAACVwRlgf/AMSwApj4BfQ+KuaVswsSdL+tdjYANgAAABkAUj7OfoE6XpTTPveaIlswksKfNZAAAAxZ9MDWReO8ZHjRr/l3ypP9Q/Uo/igAAABlpLQi2TTpxQt0ezT6scHrv80XQ59S1xm+JKNQAAA4QcfW5iZbmayODWPAHqjgWT0Bd7SqoAAAE9aznnPWJevuemBWe+2kApwoHk3DTTsI28IvDKwAAAElMmv4toVzs2UDUOl/qGIxCIhUEfcC+n/IAAABLc+VhRQ0S1PWTMPW9jK/h7dm3TEE4+/0DIVoEue3AAAAEjPugQB7osmvtFT+2zFrUnpWEbs8MNHao1y4NoAAAFQSlzO7irDKZeRmOFzLk+1Q44WTB2ZFAFwQhAAAAjsqSRQPFKFpmBn1ommYlAcnC7CJjb3AToSc+4QAAAI7U2QCLslfKoqMBvLFHQ5z1sHKSrlQd+AkZB30g1MAAAAR1vnmG5zH651WocweyU1H1OxzH4GQxm3rfhAAAAR15TCmqNwvPhFDe6AMbrj+xooAAAAaOeL+5jhQYabhXLTiTVAz6orTYAAAAAvYOu4w7OG4Og2IOQrUQAAACSjrav9QjJ7EVJYqGGOyAIXBRAAAiw1KsaU25TZCpru4avGrMtCQ1A5eegsTzvfUN1chAAAAS4CVL/PfgWGYW4TJKOtfxzduxhhmgJQQkA+EkDTppCAAABLfNrFPjcGeFJDN/nCXNN6ouxLhEHpeRcTLVKg18nDhkr3zJI+seAAAT1ZQpH4v8GEOGHeHUvOZmZy9g615AYAzjra5ZxUPSA/YAAAB9ym1OJvqI2U/e1+vcn5DXVxypl4Q7AAAAAAAAA==',
  },
  {
    name: 'Guilherme Soares',
    image: GuilhermeSoares,
    role: 'Embaixador',
    linkedin: 'https://www.linkedin.com/in/guilherme-m-soares/',
    placeholder:
      'data:image/webp;base64,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',
  },
  {
    name: 'Inês Marques',
    image: InesMarques,
    role: 'Embaixador',
    linkedin: '',
    placeholder:
      'data:image/webp;base64,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',
  },

  {
    name: 'Inês Tomaz',
    image: InesTomaz,
    role: 'Embaixador',
    linkedin: '	https://www.linkedin.com/in/in%C3%AAs-tomaz-39b9b1261/',
    placeholder:
      'data:image/webp;base64,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',
  },

  {
    name: 'Vhir Jahit',
    image: VhirJahit,
    role: 'Embaixador',
    linkedin: 'www.linkedin.com/in/vhir-sacarlal-9395aa278',
    placeholder:
      'data:image/webp;base64,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',
  },
]



export {
  coordenacao,
  marketingDesign,
  logistica,
  people,
  relacoesExternas,
  suporteInformatico,
}
