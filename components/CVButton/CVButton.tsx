import cn from 'classnames'
//  Assets
import { MdFileDownload } from 'react-icons/md'

import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import { transformCvLocationToUrl } from '../pages/PerfilPage/utils'

type CVButtonProps = {
  name: string
  documentUrl?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

const CVButton = ({ name, documentUrl, ...props }: CVButtonProps) => (
  <Link
    role="button"
    className={cn(
      'h-32 w-32 flex flex-col items-center justify-around py-5 bg-grey-300 rounded-md shadow-md text-center',
      'hover:shadow-lg hover:bg-grey-100'
    )}
    href={transformCvLocationToUrl(documentUrl || '')}
    {...props}
  >
    <p className="font-poppins font-bold text-sm text-tertiary-500">{name}</p>
    <MdFileDownload className="h-8 w-8 text-tertiary-500" />
  </Link>
)

export default CVButton
export type { CVButtonProps }
