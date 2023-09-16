import cn from 'classnames'
//  Components
import UploadImageModal from '@/components/UploadImageModal'
import { Button } from '@/core/components/Button'
import Card from '@/core/components/Card'
import ProfileImage from '../../../../ProfileImage'
import RedeemModal from '../RedeemModal/RedeemModal'
//  Hooks
import { useModal } from '@/core/components/modal-context'

type StatisticsCardProps = {
  name: string
  points: number
  scans: number
  image?: string | null
}

const createStatisticalText = (label: string, number: number) => (
  <p
    className={cn(
      ' w-full flex flex-col-reverse justify-between items-center text-sm text-white font-medium font-sans text-center px-1',
      'md:text-base ',
      'lg:flex-row lg:items-end lg:text-lg'
    )}
  >
    {label}{' '}
    <span className="text-secondary-500 font-bold text-xl">{number}</span>
  </p>
)

const StatisticsCard = ({
  name,
  points,
  scans,
  image,
}: StatisticsCardProps) => {
  const { setModal } = useModal()

  const handleChangeProfileImage = () => {
    setModal(<UploadImageModal />)
  }

  const redeemHandler = () => {
    setModal(<RedeemModal />)
  }

  return (
    <Card
      backgroundColor="bg-tertiary-500"
      className={cn('grid grid-cols-12 items-center py-6 px-5 h-full')}
    >
      <div className={cn('col-span-12', 'md:col-span-5', 'lg:col-span-12')}>
        <ProfileImage
          src={image}
          altText="Student profile image"
          onClick={handleChangeProfileImage}
        />
      </div>
      <section className={cn('col-span-12', 'md:col-span-7', 'lg:col-span-12')}>
        <h2 className="font-semibold text-2xl text-white border-t-4 border-primary-500 w-min mx-auto md:mx-0">
          {name.split(' ')[0]}
        </h2>
        <div
          className={cn(
            'my-5 flex flex-row divide-x w-full justify-between',
            'lg:flex-col lg:divide-x-0'
          )}
        >
          {createStatisticalText(
            'Brindes por redimir',
            Math.floor(points / 15)
          )}
          {createStatisticalText('Número de pontos', points)}
          {createStatisticalText('Bancas visitadas', scans)}
        </div>
      </section>
      <div className={cn('col-span-12', 'lg:col-span-12')}>
        <Button onClick={redeemHandler} isBlock color="secondary">
          Redimir brinde
        </Button>
      </div>
    </Card>
  )
}

export default StatisticsCard
