import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { fetchStudentCompaniesScans } from "../api";
import { UserType } from "@prisma/client";

export const useStudentCompanyScans = () => {
    const session = useSession();
    const user = session.data?.user;
    return useQuery(['StudentCompanyScans'], () => fetchStudentCompaniesScans(), {
        enabled: session.status === 'authenticated' && (user?.role === UserType.Student || user?.role === UserType.Staff)
    });
}