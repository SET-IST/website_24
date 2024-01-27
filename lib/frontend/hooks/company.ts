import { useSession } from "next-auth/react";
import { CompanyStudentScan, fetchCompanyStudentsScans } from "../api";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "@prisma/client";

export const useCompanyStudentsScans = () => {
    const session = useSession();
    const user = session.data?.user;
    return useQuery<CompanyStudentScan[], Error>(['CompanyStudentsScans'], () => fetchCompanyStudentsScans(), {
        enabled: session.status === 'authenticated' && user?.role === UserType.Company
    });
}