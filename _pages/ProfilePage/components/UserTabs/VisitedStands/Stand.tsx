import { Text } from '@mantine/core'
import { Image } from '@mantine/core'

export interface StandData {
  id: string
  name: string
  desc: string
  img: string
}

interface StandComponentProps {
  data: StandData
  selectCallback: (companyId: string) => void
}

const Stand = ({ data, selectCallback }: StandComponentProps) => {
  return (
    <div
      onClick={() => selectCallback(data.id)}
      className="w-full h-fit p-4 flex flex-row items-center hover:bg-gray-50 transition-all cursor-pointer"
    >
      <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={data.img}
          alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 sm:ml-6 flex flex-col items-start">
        <Text c="#00415a" fw={600}>
          <span className="text-lg">{data.name}</span>
        </Text>
        <Text c="dimmed" lh={1} lineClamp={2} fw={500}>
          <span className="text-sm">{data.desc}</span>
        </Text>
      </div>
    </div>
  )
}

export default Stand
