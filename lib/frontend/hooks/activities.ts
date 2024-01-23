import { useQuery } from "@tanstack/react-query"
import { ActivityData, fetchActivities } from "../api/activities"

export const useActivities = () => {
    return useQuery<ActivityData[], Error>(['Activities'], () => {
      return fetchActivities()
    })
  }