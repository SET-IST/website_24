import { Text } from '@mantine/core'
import Stand, { StandData } from './Stand'

const stands: StandData[] = [
  {
    id: 'worten',
    name: 'Worten',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://play-lh.googleusercontent.com/8_XBPWRyDYWFVyVBGJYKU_5d5hxZGCYeh4SUhGpcRCaz_PE8GMSA70I9wF-qA6DJxGg=s256',
  },
  {
    id: 'nos',
    name: 'NOS',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102015/noslogotipo.png?itok=9kmnetW7',
  },
  {
    id: 'accenture',
    name: 'Accenture',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://www.careersinafrica.com/wp-content/uploads/2020/05/Accenture-logo-square.jpg',
  },
  {
    id: 'worten',
    name: 'Worten',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://play-lh.googleusercontent.com/8_XBPWRyDYWFVyVBGJYKU_5d5hxZGCYeh4SUhGpcRCaz_PE8GMSA70I9wF-qA6DJxGg=s256',
  },
  {
    id: 'nos',
    name: 'NOS',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102015/noslogotipo.png?itok=9kmnetW7',
  },
  {
    id: 'accenture',
    name: 'Accenture',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://www.careersinafrica.com/wp-content/uploads/2020/05/Accenture-logo-square.jpg',
  },
  {
    id: 'nos',
    name: 'NOS',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102015/noslogotipo.png?itok=9kmnetW7',
  },
  {
    id: 'accenture',
    name: 'Accenture',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://www.careersinafrica.com/wp-content/uploads/2020/05/Accenture-logo-square.jpg',
  },
]

interface VisitedStandsProps {
  selectCallback: (companyId: string) => void
}

const VisitedStands = ({ selectCallback }: VisitedStandsProps) => {
  return (
    <div className="flex flex-col">
      {stands.map((standData, index) => (
        <Stand
          key={`stand_${index}`}
          selectCallback={selectCallback}
          data={standData}
        />
      ))}
    </div>
  )
}

export { VisitedStands }
