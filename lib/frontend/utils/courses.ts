import { instituitions } from "@/data/courses";

export function getInstitutionsCode(instituitionName?: string) {
    if (!instituitionName) return undefined;
    return Object.values(instituitions).find((institution) => institution.name === instituitionName)?.code;
    
}

export function getCourseCode(instituitionCode?: string, courseName?: string) {
    if (!instituitionCode || !courseName) return undefined;
    return Object.values(instituitions[instituitionCode].courses).find((course) => course.name === courseName)?.code;
}