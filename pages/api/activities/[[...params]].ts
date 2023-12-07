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
} from "next-api-decorators";
import type { NextApiRequest, NextApiResponse } from 'next'
import * as Server from '../../../lib/server/activities'

class ActivitiesRoutes {
    @Get()
    public async getActivities(@Req() req: NextApiRequest, @Res() res: NextApiResponse) {
        return await Server.getActivities(req,res);
    }
}

export default createHandler(ActivitiesRoutes);