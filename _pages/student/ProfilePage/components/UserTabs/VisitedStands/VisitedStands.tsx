import { Text } from '@mantine/core'
import Stand, { StandData } from './Stand'

const stands: StandData[] = [
  {
    name: 'Worten',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://play-lh.googleusercontent.com/8_XBPWRyDYWFVyVBGJYKU_5d5hxZGCYeh4SUhGpcRCaz_PE8GMSA70I9wF-qA6DJxGg=s256',
  },
  {
    name: 'CelFocus',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/305642484_603766534498182_5905359337023253547_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-TUe7M3U4AIAX-UTaqy&_nc_ht=scontent.flis6-2.fna&oh=00_AfA8y587sE4yryXhvic9a3aDOcXvOruccUZaxT_LQkHTIQ&oe=655542A3',
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
    name: 'CelFocus',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/305642484_603766534498182_5905359337023253547_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-TUe7M3U4AIAX-UTaqy&_nc_ht=scontent.flis6-2.fna&oh=00_AfA8y587sE4yryXhvic9a3aDOcXvOruccUZaxT_LQkHTIQ&oe=655542A3',
  },
  {
    name: 'Accenture',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://www.careersinafrica.com/wp-content/uploads/2020/05/Accenture-logo-square.jpg',
  },
  {
    name: 'CelFocus',
    desc: 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.',
    img: 'https://scontent.flis6-2.fna.fbcdn.net/v/t39.30808-6/305642484_603766534498182_5905359337023253547_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-TUe7M3U4AIAX-UTaqy&_nc_ht=scontent.flis6-2.fna&oh=00_AfA8y587sE4yryXhvic9a3aDOcXvOruccUZaxT_LQkHTIQ&oe=655542A3',
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
