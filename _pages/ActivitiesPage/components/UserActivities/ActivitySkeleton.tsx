import { Avatar, Skeleton, Text, Tooltip } from '@mantine/core'

const ActivitySkeleton = () => {
  return (
    <div className="w-full h-fit bg-[color:var(--mantine-color-white)] hover:bg-gray-50 p-4 flex flex-col gap-4 sm:flex-row sm:gap-0 items-center sm:rounded-md">
      <div className="w-full h-fit flex flex-col gap-2">
        <Tooltip.Group openDelay={300} closeDelay={100}>
          <Avatar.Group spacing="sm">
            <Avatar radius="xl">
              <Skeleton animate circle mb="xl" />
            </Avatar>
            <Avatar radius="xl">
              <Skeleton animate circle mb="xl" />
            </Avatar>
          </Avatar.Group>
        </Tooltip.Group>
        <div>
          <Skeleton height={18} className="!w-44">
            <Text c="#00415a" fw={600}>
              <span className="text-base">Title</span>
            </Text>
          </Skeleton>

          <Skeleton height={18} mt={6}>
            <Text c="dimmed" lh={1} fw={500} mt={6}>
              <span className="text-sm">Description</span>
            </Text>
          </Skeleton>
        </div>
        <div className="flex flex-row flex-wrap gap-1">
          <Skeleton className="!w-48" height={20} />
        </div>
      </div>
    </div>
  )
}

export default ActivitySkeleton
