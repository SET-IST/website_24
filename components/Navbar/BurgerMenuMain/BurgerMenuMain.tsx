import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import {
  FaBug,
  FaFileAlt,
  FaQrcode,
  FaQuestionCircle,
  FaUser,
} from 'react-icons/fa'

import { Button } from '@/core/components/Button'
import { links as appLinks } from '@/core/services/links'

import { UserType } from '@prisma/client'
import { createBurguerMenuItem, links } from '../utils'

const studentMenuItems = [
  {
    name: 'O meu perfil',
    slug: 'perfil',
    url: appLinks.student.profile,
    icon: <FaUser />,
  },
  {
    name: 'Scan empresa',
    slug: 'scan',
    url: appLinks.student.scan,
    icon: <FaQrcode />,
  },
]

const staffMenuItems = [
  {
    name: 'O meu perfil',
    slug: 'perfil',
    url: appLinks.student.profile,
    icon: <FaUser />,
  },
  {
    name: 'Validar Brinde',
    slug: 'redeem',
    url: appLinks.staff.redeem,
    icon: <FaQrcode />,
  },
  {
    name: 'Scan empresa',
    slug: 'scan',
    url: appLinks.student.scan,
    icon: <FaQrcode />,
  },
]

const companyMenuItems = [
  {
    name: 'Perfil',
    slug: 'perfil',
    url: appLinks.company.profile,
    icon: <FaUser />,
  },
  {
    name: 'Plataforma de CVs',
    slug: 'cv-platform',
    url: appLinks.company.cvPlatform,
    icon: <FaFileAlt />,
  },
]

const otherMenutItems = [
  {
    name: 'Ajuda',
    slug: 'help',
    url: appLinks.help,
    icon: <FaQuestionCircle />,
  },
  {
    name: 'Reportar bug',
    slug: 'bug-report',
    url: 'https://github.com/SET-IST/bug-tracking/issues/new?assignees=&labels=bug&template=REPORT.yml&title=Insere+um+t%C3%ADtulo',
    icon: <FaBug />,
  },
]

const BurgerMenuMain = ({ onClose }: { onClose: () => void }) => {
  const { data, status } = useSession()
  const router = useRouter()
  return (
    <div
      role="list"
      className="p-8 text-white flex flex-col justify-between h-full"
    >
      <section>
        {status === 'authenticated' ? (
          <>
            {data.user.role === UserType.STUDENT && (
              <>
                {studentMenuItems.map((link) =>
                  createBurguerMenuItem(link, router, onClose)
                )}
                <hr className="w-1/2 bg-slate-100/50 border-none h-[1px]" />
              </>
            )}
            {data.user.role === UserType.STAFF && (
              <>
                {staffMenuItems.map((link) =>
                  createBurguerMenuItem(link, router, onClose)
                )}
                <hr className="w-1/2 bg-slate-100/50 border-none h-[1px]" />
              </>
            )}
            {data.user.role === UserType.COMPANY && (
              <>
                {companyMenuItems.map((link) =>
                  createBurguerMenuItem(link, router, onClose)
                )}
                <hr className="w-1/2 bg-slate-100/50 border-none h-[1px]" />
              </>
            )}
          </>
        ) : null}

        {links.map((link) => createBurguerMenuItem(link, router, onClose))}
        <hr className="w-1/2 bg-slate-100/50 border-none h-[1px]" />
        {otherMenutItems.map((link) =>
          createBurguerMenuItem(link, router, onClose)
        )}
      </section>

      {status === 'authenticated' ? (
        <div className="w-full flex justify-center">
          <Button
            color="tertiary"
            onClick={async () => {
              await signOut()
                .then(() => router.push(appLinks.home))
                .then(onClose)
            }}
          >
            Terminar sessão
          </Button>
        </div>
      ) : (
        <div className="w-full flex justify-evenly">
          <Button
            color="secondary"
            onClick={() => router.push(appLinks.auth.signIn).then(onClose)}
          >
            Iniciar sessão
          </Button>
          <Button
            color="tertiary"
            onClick={() => router.push(appLinks.auth.signIn).then(onClose)}
          >
            Registar
          </Button>
        </div>
      )}
    </div>
  )
}

BurgerMenuMain.displayName = 'BurgerMenuMain'

export default BurgerMenuMain
