import { PropsWithChildren } from 'react'

type CardDetailsProps = PropsWithChildren & {
  title: string
}

const CardDetails = ({ title, children }: CardDetailsProps) => {
  return (
    <div className="grow flex flex-col justify-center gap-1 sm:gap-4 md:gap-8 px-4">
      <div className="flex flex-row items-center gap-4">
        <div className="h-10 sm:h-full w-[2px] bg-primary-500"></div>
        <h2 className="py-4 text-2xl md:text-3xl font-sans font-semibold text-primary-500">
          {title}
        </h2>
      </div>
      {children}
    </div>
  )
}

export default CardDetails
export type { CardDetailsProps }



//className="p-10 text-center text-primary-500 text-4xl font-sans font-semibold"