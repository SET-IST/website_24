//  Layouts
import RedeemPage from '@/components/pages/RedeemAward/RedeemPage'
import StaffLayout from '@/core/layouts/StaffLayout'
//  Pages
//  Types
import type { ReactElement } from 'react'

const Redeem = () => {
  return <RedeemPage />
}

Redeem.getLayout = (page: ReactElement) => {
  return <StaffLayout>{page}</StaffLayout>
}

export default Redeem
