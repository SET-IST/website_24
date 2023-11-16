import { Text } from '@mantine/core'
import Stand, { StandData } from './Stand'

const stands: StandData[] = [
  {
    name: 'Worten',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://play-lh.googleusercontent.com/8_XBPWRyDYWFVyVBGJYKU_5d5hxZGCYeh4SUhGpcRCaz_PE8GMSA70I9wF-qA6DJxGg=s256',
  },
  {
    name: 'NOS',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102015/noslogotipo.png?itok=9kmnetW7',
  },
  {
    name: 'Accenture',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://www.careersinafrica.com/wp-content/uploads/2020/05/Accenture-logo-square.jpg',
  },
  {
    name: 'Worten',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://play-lh.googleusercontent.com/8_XBPWRyDYWFVyVBGJYKU_5d5hxZGCYeh4SUhGpcRCaz_PE8GMSA70I9wF-qA6DJxGg=s256',
  },
  {
    name: 'NOS',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102015/noslogotipo.png?itok=9kmnetW7',
  },
  {
    name: 'Accenture',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://www.careersinafrica.com/wp-content/uploads/2020/05/Accenture-logo-square.jpg',
  },
  {
    name: 'NOS',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102015/noslogotipo.png?itok=9kmnetW7',
  },
  {
    name: 'Accenture',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://www.careersinafrica.com/wp-content/uploads/2020/05/Accenture-logo-square.jpg',
  },
]

const VisitedStands = () => {
  return (
    <div className="flex flex-col">
      {stands.map((standData, index) => (
        <Stand key={`stand_${index}`} data={standData} />
      ))}
    </div>
  )
}

export { VisitedStands }
