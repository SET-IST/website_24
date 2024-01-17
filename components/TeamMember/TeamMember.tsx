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
      <Image
        src={data.image.src}
        alt={data.name}
        width={300}
        height={300}
        className="object-none rounded-full w-36 h-36 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 my-2"
        style={{
          objectPosition: data.customImagePosition ?? '50% -40px',
        }}
      />

      <Text c="#00415a" ta="center" fz="xl" mt="sm" fw={600}>
        {data.name}
      </Text>
      <Text ta="center" c="dimmed" fz="md">
        {data.role}
      </Text>
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
    </div>
  )
}

export default TeamMember
