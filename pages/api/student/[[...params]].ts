import {
    createHandler,
    Get,
    Patch,
    Body,
    ValidationPipe,
  } from 'next-api-decorators'
import * as Server from '../../../lib/server/services/student'
import { RequiresSession, RestrictedValidationPipe, Role } from '@/lib/server/middleware'
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

    @Patch('/profile')
    @Role('Student', 'Staff')
    public async patchStudentProfile(
        @UserData() user: User,
        @Body(RestrictedValidationPipe) data: Server.PatchStudentProfileDto
    ) {
        return await Server.patchStudentProfile(user, data)
    }

    @Get('/companies')
    @Role('Student', 'Staff')
    public async getStudentCompanies(
        @UserData() user: User,
    ) {
        return await Server.getStudentCompanies(user)
    }

    @Get('/enrollments')
    @Role('Student', 'Staff')
    public async getStudentEnrollments(
        @UserData() user: User,
    ) {
        return await Server.getStudentEnrollments(user)
    }
}

export default createHandler(StudentRoutes)
