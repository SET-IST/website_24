import CVButton from '@/components/CVButton/CVButton'
import TextInput from '@/core/components/TextInput/TextInput'
import { links } from '@/data/links'
import { useUserData } from '@/lib/hooks/use-user-data'
import cn from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const PlataformaCvPage = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const { companyData, isLoadingCompanyData, studentCVs, isLoadingStudentCVs } =
    useUserData({
      fetchStudent: false,
    })

  if (isLoadingCompanyData || isLoadingStudentCVs) return null

  if (companyData?.category.name !== 'Platina') {
    router.push(links.home)
    return null
  }

  return (
    <main>
      <div
        className={cn(
          'flex flex-wrap flex-row-reverse mt-10 gap-10',
          'lg:mt-20 lg:gap-0'
        )}
      >
        <div className={cn('w-full', 'lg:w-1/2 lg:px-10')}>
          {companyData?.image ? (
            <Image
              src={companyData.image}
              alt={`${companyData.name} logo`}
              width={500}
              height={300}
              className="w-full h-full bg-contain  bg-no-repeat bg-center"
            />
          ) : null}
        </div>
        <div
          className={cn(
            'w-full h-full',
            'lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:px-10'
          )}
        >
          <h1
            className={cn(
              'text-xl font-semibold font-poppins text-tertiary-500 mb-2',
              'md:text-2xl',
              'lg:text-5xl'
            )}
          >
            CVs Disponíveis
          </h1>
          <p className="text-lg mb-10">
            Aqui poderão encontrar todos os alunos e os respetivos Curriculum
            Vitae, que fizeram scan.
          </p>

          <TextInput
            id="student-name"
            className="border-primary-500 !w-2/3 !text-tertiary-500"
            placeholder="John Doe"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <section className="my-10 grid grid-cols-12 gap-5 lg:px-10">
        {studentCVs ? (
          studentCVs
            .filter((student) =>
              student.user.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((student) => {
              const arrayName = student.user.name.split(' ')
              return (
                <div
                  key={student.user.name}
                  className="col-span-6 md:col-span-3 lg:col-span-2"
                >
                  <CVButton
                    name={
                      arrayName.length > 1
                        ? `${arrayName[0]} ${arrayName[arrayName.length - 1]}`
                        : arrayName[0]
                    }
                    documentUrl={student.cv?.cvLocation}
                  />
                </div>
              )
            })
        ) : (
          <p>De momento, não há currículos disponíveis</p>
        )}
      </section>
    </main>
  )
}

export default PlataformaCvPage
