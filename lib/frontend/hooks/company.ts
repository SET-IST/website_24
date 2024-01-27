import { useSession } from "next-auth/react";
import { fetchCompanyStudentsScans } from "../api";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "@prisma/client";

export const useCompanyStudentsScans = () => {
    const session = useSession();
    const user = session.data?.user;
    return useQuery(['CompanyStudentsScans'], () => fetchCompanyStudentsScans(), {
        enabled: session.status === 'authenticated' && user?.role === UserType.Company
    });
}