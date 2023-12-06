import cn from 'classnames'
import Image from 'next/image'
//  Assets
import Test from '@/assets/logos/logo_set.svg'
//  Types
import type { Company } from '../../types'
import { CompanyCategory } from '@prisma/client'

const CompanyInfo = ({ user, category }: Company) => {
  return (
    <div className="flex flex-col items-center justify-end h-full">
      {user.image ? (
        <Image
          src={user.image}
          alt={`${user.name} logo`}
          width={100}
          height={100}
        />
      ) : (
        <Test />
      )}

      <span
        className={cn('pt-5', {
          'text-orange-500': category === CompanyCategory.Gold,
          'text-gray-500': category === CompanyCategory.Silver,
        })}
      >
        {user.name}
      </span>
    </div>
  )
}

export default CompanyInfo
