import { useQuery } from "@tanstack/react-query";
import { 
    fetchInstituitonData,
    fetchCourseData,
    InstituitonData,
    CourseData,
 } from "@/lib/frontend/api";

export const useInstitutions = () => {
    return useQuery<InstituitonData, Error>(['Institutions'], fetchInstituitonData)
}

export const useCourses = (instituitionCode?: string) => {
    return useQuery<CourseData|undefined, Error>(['Course', instituitionCode], () => fetchCourseData(instituitionCode))
}