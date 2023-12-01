import ProfileImage from '@/components/ProfileImage/ProfileImage'
import UploadImageModal from '@/components/UploadImageModal/UploadImageModal'
import Card from '@/core/components/Card/Card'
import TeamMember from '@/core/components/TeamMember/TeamMember'

import { useModal } from '@/core/components/modal-context'
import { useUserData } from '@/lib/frontend/hooks/use-user-data'

import Unkonwn from '@/assets/team/unknown.webp'

const transformToUsername = (fullName: string) => {
  const arr = fullName.split(' ')
  return arr.length > 1 ? arr[0] + ' ' + arr[arr.length - 1] : arr[0]
}

const EmpresaPerfilPage = () => {
  const { setModal } = useModal()
  const { companyData, isLoadingCompanyData } = useUserData({
    fetchStudent: false,
  })

  if (!companyData || isLoadingCompanyData) return null

  return (
    <main className="w-full h-full flex flex-col items-start">
      <h1 className="font-medium text-4xl border-t-4 border-primary-500 my-10 text-tertiary-500">
        O meu <span className="text-primary-500">Perfil</span>
      </h1>
      <Card
        backgroundColor="bg-tertiary-500"
        className="grid grid-cols-2 gap-5 py-6 px-10 w-full md:w-2/3"
      >
        <div className="col-span-2 md:col-span-1">
          <ProfileImage
            altText={companyData.name + '-logo'}
            src={companyData.image}
            onClick={() => setModal(<UploadImageModal />)}
          />
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col h-full justify-start">
          <p className="text-primary-500 text-lg md:text-xl lg:text-2xl font-medium mb-5">
            Nome:{' '}
            <span className="text-white !font-light">{companyData.name}</span>
          </p>
          <p className="text-primary-500 text-lg md:text-xl lg:text-2xl font-medium mb-5">
            Email:{' '}
            <span className="text-white !font-light">{companyData.email}</span>
          </p>
          <p className="text-primary-500 text-lg md:text-xl lg:text-2xl font-medium mb-5">
            Categoria:{' '}
            <span className="text-white !font-light">
              {companyData.category}
            </span>
          </p>
          <p className="text-primary-500 text-lg md:text-xl lg:text-2xl font-medium mb-5">
            Nº de alunos recolhidos:{' '}
            <span className="text-white !font-light">
              {companyData.students.length}
            </span>
          </p>
        </div>
      </Card>
      <section>
        <h2 className="font-medium text-4xl border-t-4 border-primary-500 my-10 text-tertiary-500">
          Alunos <span className="text-primary-500">recolhidos</span>
        </h2>
        <div className="grid grid-cols-12 gap-5">
          {companyData.students.map((student) => (
            <div
              className="col-span-12 md:col-span-4 lg:col-span-3"
              key={student.user.name}
            >
              <TeamMember
                name={transformToUsername(student.user.name)}
                src={student.user.image || Unkonwn.src}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default EmpresaPerfilPage
