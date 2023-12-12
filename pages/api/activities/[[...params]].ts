import {
    createHandler,
    Get,
    Param,
    Patch,
    Post,
    Body,
    Delete,
    ValidationPipe,
    NotFoundException,
    Req,
    Res,
    HttpCode,
    BadRequestException,
} from "next-api-decorators";
import type { NextApiRequest, NextApiResponse } from 'next'
import * as Server from '../../../lib/server/activities'
import { RequiresSession, Role } from "@/core/middlewares/server";
import { UserData } from "@/core/utils";
import type { User } from '@prisma/client'
import { isNumber, isNumberString } from "class-validator";

class ActivitiesRoutes {
    @Get()
    public async getActivities(@Req() req: NextApiRequest, @Res() res: NextApiResponse) {
        return await Server.getActivities(req,res);
    }

    @Post("/:id/enroll")
    @RequiresSession()
    @Role("Student", "Staff")
    public async enrollStudent(@UserData() user: User, @Param("id") activityId: string) {
        if (!isNumberString(activityId)) throw new BadRequestException('Invalid activity id')
        return await Server.enrollStudent(user, Number(activityId));
    }

    @Post("/:id/cancel")
    @RequiresSession()
    @Role("Student", "Staff")
    public async removeStudent(@UserData() user: User, @Param("id") activityId: string) {
        if (!isNumberString(activityId)) throw new BadRequestException('Invalid activity id')
        return await Server.removeStudent(user, Number(activityId));
    }
}

export default createHandler(ActivitiesRoutes);