import { databaseQueryWrapper } from '@/core/utils'
import { PrismaService } from '../../../core/services/server'
import { Activity, UserType } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from "@/core/middlewares/server/require-session";

export async function getActivities(req: NextApiRequest, res: NextApiResponse): Promise<Activity[] | undefined> {
    return await databaseQueryWrapper(async () => {
        const activities = await PrismaService.activity.findMany();
        const session = await getSession(req,res);
        if (!session || session.user?.role != UserType.Student) return activities;

        const student = await PrismaService.studentDetails.findUniqueOrThrow({
            where:{
                userId:session.user.studentDetails.userId
            },
            include:{
                enrolledActivities: true
            }
        })
        // Creates a dictionary with the key as activity id and value as confirmed from ActivityEnrollment model
        const enrolledActivities: Record<number,boolean> = student.enrolledActivities.reduce(
            (acc, { activityId, confirmed }) => {
                acc[activityId] = confirmed;
                return acc;
              },
              {} as Record<number, boolean>
        );
        return activities.map((activity)=>{
                if(activity.id in enrolledActivities) {
                    return {
                        ...activity,
                        confirmed: enrolledActivities[activity.id]
                    }
                }
                return activity
        })
    })
}