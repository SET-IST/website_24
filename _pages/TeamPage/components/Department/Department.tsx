import { Title } from '@mantine/core'
import classes from './department.module.css'

import { TeamMember as TeamMemberData, coordenacao } from '@/data/team'
import { Animate } from '@/components/AnimateIn'
import TeamMember from '@/components/TeamMember'
import classNames from 'classnames'

interface DepartmentProps {
  title: string
  slug: string
  data: TeamMemberData[]
}

export default function Department({ title, slug, data }: DepartmentProps) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Title
        py="sm"
        className={classNames(
          classes.title,
          'sticky sm:relative top-15 sm:top-0 bg-[color:var(--mantine-color-white)] z-10 border-b w-full'
        )}
      >
        {title}
      </Title>
      <div className="w-full grid grid-cols-1 sm:grid-cols-4">
        {data.map((member, index) => (
          <Animate.FadeUp key={`${slug}-${index}`}>
            <TeamMember data={member} />
          </Animate.FadeUp>
        ))}
      </div>
    </div>
  )
}
