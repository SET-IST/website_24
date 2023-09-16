//  Components
import Card from '@/core/components/Card'
import { UserDataForm } from '../UserDataForm'
//  Types
import type { UserDataFormProps } from '../UserDataForm'

type AccountCardProps = UserDataFormProps

const AccountCard = ({ id, values, cv, institutions }: AccountCardProps) => {
  return (
    <Card
      backgroundColor="bg-tertiary-500"
      className="py-6 px-5 flex flex-col items-start justify-around h-full"
    >
      <h2 className="text-white text-3xl font-medium border-b-4 border-primary-500">
        Definições de conta
      </h2>
      <UserDataForm
        id={id}
        cv={cv}
        values={values}
        institutions={institutions}
      />
    </Card>
  )
}

AccountCard.displayName = 'AccountCard'

export default AccountCard
export type { AccountCardProps }
