import React, { useState } from 'react'
import { ActionIcon, Avatar, Text } from '@mantine/core'
import { TeamMember } from '@/data/team'
import { IconBrandLinkedin } from '@tabler/icons-react'
import Image from 'next/image'

interface TeamMemberProps {
  data: TeamMember
}

const TeamMember = ({ data }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="w-36 h-36 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-clip">
        <Image
          height={300}
          width={300}
          src={data.image.src}
          alt="Picture of the author"
          style={{
            objectFit: 'none',
            objectPosition: data.customImagePosition ?? '50% -30px',
          }}
        />
      </div>

      <Text c="#00415a" ta="center" fz="xl" mt="sm" fw={600}>
        {data.name}
      </Text>
      <Text ta="center" c="dimmed" fz="md">
        {data.role}
      </Text>
      {!!data.linkedin && (
        <ActionIcon
          component="a"
          target="_blank"
          href={data.linkedin}
          size="lg"
          variant="subtle"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin color="#0a66c2" />
        </ActionIcon>
      )}
    </div>
  )
}

export default TeamMember
