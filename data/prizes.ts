//  Assets
import Airpods from '@/assets/img/airpods.jpeg'
import JblFlip from '@/assets/img/jbl-flip-6.jpeg'
import Kindle from '@/assets/img/kindle.jpeg'
import Mala from '@/assets/img/mala.jpeg'
import NintendSwitch from '@/assets/img/nintendo-switch.jpg'
import Polaroid from '@/assets/img/polaroid.webp'
import RatoRazor from '@/assets/img/rato-razor.jpeg'
import Viagem from '@/assets/img/viagem.webp'
import { StaticImageData } from 'next/image'

export interface PrizeData {
  title: string
  image: StaticImageData
  description: string
}

const daily: PrizeData[] = [
  {
    title: 'Prémio do 1º dia',
    image: Polaroid,
    description: 'Máquina Polaroid',
  },
  {
    title: 'Prémio do 2º dia',
    image: JblFlip,
    description: 'Coluna JBL Flip 6 - Preta',
  },
  {
    title: 'Prémio do 3º dia',
    image: NintendSwitch,
    description: 'Nintendo Switch',
  },
  {
    title: 'Prémio do 4º dia',
    image: RatoRazor,
    description: 'Headset + Rato da Razor',
  },
]

const prizes: PrizeData[] = [
  {
    title: 'Prémio dos Workshops',
    image: Kindle,
    description: 'E-reader kindle',
  },
  {
    title: 'Prémio dos CVs',
    image: Mala,
    description: 'Mala de viagem grande + cabine',
  },
  {
    title: 'Prémio das Atividades',
    image: Airpods,
    description: 'Apple Airpods 3ª Geração',
  },
  {
    title: 'Prémio Final',
    image: Viagem,
    description: 'Viagem a Amesterdão',
  },
]

export { prizes, daily }
