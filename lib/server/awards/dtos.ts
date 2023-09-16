import { AwardType, StudentDetails, User } from '@prisma/client'

export interface AwardResponse {
  awardToken: string
  awardType: AwardType
}

type BasicStudentData = Pick<User, 'name' | 'image'> &
  Pick<StudentDetails, 'userId' | 'course'>

export interface ReedemResponse {
  id: string
  type: AwardType
  studentId: number
  student: BasicStudentData
}
