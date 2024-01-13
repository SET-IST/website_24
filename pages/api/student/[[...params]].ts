import {
    createHandler,
    Get,
    Patch,
    Body,
    ValidationPipe,
  } from 'next-api-decorators'
import * as Server from '../../../lib/server/services/student'
import { RequiresSession, Role } from '@/lib/server/middleware'
import { UserData } from '@/core/utils'
import type { User } from '@prisma/client'


@RequiresSession()
class StudentRoutes {
    @Get('/profile')
    @Role('Student', 'Staff')
    public async getStudentProfile(
        @UserData() user: User,
    ) {
        return await Server.getStudentProfile(user)
    }

    
}

export default createHandler(StudentRoutes)
