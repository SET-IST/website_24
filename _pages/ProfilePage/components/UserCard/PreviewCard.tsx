import { Avatar, Text, Paper, em } from '@mantine/core'
import { AnchorLink } from '@/components/AnchorLink'
import { CompanyScan, ScannedCompany } from '@/lib/frontend/api'

interface PreviewCardProps {
  data: CompanyScan | ScannedCompany
}

const PreviewCard = ({ data }: PreviewCardProps) => {
  return (
    <Paper
      className="h-fit min-w-min w-full sm:w-1/3 !rounded-lg"
      withBorder
      p={'lg'}
      bg="var(--mantine-color-body)"
    >
      <div className=" w-full flex flex-col justify-center items-center">
        <Avatar src={data?.user.image} size={100} radius={120} />

        <Text c="#00415a" ta="center" fz="xl" fw={700} mt="md">
          {data?.user.name}
        </Text>

        <div className="flex flex-col items-center gap-2">
          <AnchorLink
            label={data?.linkText}
            href={data?.linkHref}
            preview={true}
          />
          <Text
            className="sm:min-w-[18rem]"
            ta="center"
            c="dimmed"
            fw={500}
            fz="sm"
          >
            {data?.description}
          </Text>
        </div>
      </div>
    </Paper>
  )
}

export { PreviewCard }
