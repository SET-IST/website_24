import {
  Avatar,
  Text,
  Paper,
  Skeleton,
  Group,
  em,
  CloseButton,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { AnchorLink } from '@/components/AnchorLink'

const PreviewCard = () => {
  const companyData = {
    name: 'Example company',
    image: '',
  }

  const isLoadingData = () => {
    return false
  }

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  return (
    <Paper
      className="h-fit min-w-min w-full sm:w-1/3 !rounded-none sm:!rounded-lg"
      withBorder
      p={isMobile ? 'xl' : 'lg'}
      bg="var(--mantine-color-body)"
    >
      <Group justify="flex-end">
        <CloseButton />
      </Group>
      <div className=" w-full flex flex-col justify-center items-center">
        {isLoadingData() ? (
          <Skeleton circle height={120} />
        ) : (
          <Avatar src={''} size={100} radius={120} />
        )}

        <Text c="#00415a" ta="center" fz="xl" fw={700} mt="md">
          <Skeleton visible={isLoadingData()}>Nome</Skeleton>
        </Text>

        <Skeleton
          className="flex flex-col items-center gap-2"
          visible={isLoadingData()}
        >
          <Text
            className="sm:min-w-[18rem]"
            ta="center"
            c="dimmed"
            fw={500}
            fz="sm"
          >
            Descrição
          </Text>
          <AnchorLink
            label="Saber mais sobre nós"
            href="https://pt.wikipedia.org/wiki/Worten"
            preview={true}
          />
        </Skeleton>
      </div>
    </Paper>
  )
}

export { PreviewCard }
