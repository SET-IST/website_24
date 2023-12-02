import { Text } from '@mantine/core'
import Student, { StudentData } from './Student'

const students: StudentData[] = [
  {
    id: 'user_1',
    name: 'User 1',
    university: 'Universidade de Lisboa - Instituto Superior Técnico',
    course: 'Engenharia Informática e de Computadores - Taguspark',
    img: '',
  },
  {
    id: 'user_2',
    name: 'User 2',
    university: 'Universidade de Lisboa - Instituto Superior Técnico',
    course: 'Engenharia Informática e de Computadores - Taguspark',
    img: '',
  },
  {
    id: 'user_3',
    name: 'User 3',
    university: 'Universidade de Lisboa - Instituto Superior Técnico',
    course: 'Engenharia Informática e de Computadores - Taguspark',
    img: '',
  },
  {
    id: 'user_4',
    name: 'User 4',
    university: 'Universidade de Lisboa - Instituto Superior Técnico',
    course: 'Engenharia Informática e de Computadores - Taguspark',
    img: '',
  },
  {
    id: 'user_5',
    name: 'User 5',
    university: 'Universidade de Lisboa - Instituto Superior Técnico',
    course: 'Engenharia Informática e de Computadores - Taguspark',
    img: '',
  },
]

const Students = () => {
  return (
    <div className="flex flex-col">
      {students.map((studentData, index) => (
        <Student key={`stand_${index}`} data={studentData} />
      ))}
    </div>
  )
}

export { Students }
