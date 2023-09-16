import cn from 'classnames'
//  Components
import FooterBody from './FooterBody'
import FooterHeader from './FooterHeader'
import Lage from './Lage'
import SocialMedia from './SocialMedia'
//  Assets
//  Styles
import { links } from '@/core/services/links'
import Link from 'next/link'
import Divider from '../../core/components/Divider'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer
      className={cn(
        'px-5 py-8 md:px-15 lg:px-16 flex flex-col lg:items-center',
        styles.bgTexture
      )}
    >
      <FooterHeader>Semana Empresarial e Tecnológica</FooterHeader>
      <FooterBody className="lg:self-start">
        <div className="mt-8 mb-4 lg:my-8 col-span-4">
          <h2 className="text-secondary-500 font-poppins font-normal md:text-lg lg:text-xl">
            Localização
          </h2>
          <p className="text-white font-normal text-sm md:text-base lg:text-lg">
            Instituto Superior Técnico (Campus Taguspark)
            <br />
            Av. Prof. Doutor Cavaco Silva, 2744-016 Porto Salvo
          </p>
        </div>
        <div className="mt-4 mb-8 lg:my-8 col-span-4">
          <h2 className="text-secondary-500 font-poppins font-normal md:text-lg lg:text-xl">
            Contactos
          </h2>
          <p className="text-white font-normal text-sm md:text-base lg:text-lg">
            <span>+351 214 233 759 (5179)</span>
            <br />
            <span>geral@set-tagus.tecnico.ulisboa.pt</span>
          </p>
        </div>
        <div className="mt-4 mb-8 lg:my-8 col-span-4">
          <h2 className="text-secondary-500 font-poppins font-normal md:text-lg lg:text-xl">
            Páginas
          </h2>
          <p className="text-white font-normal text-sm md:text-base lg:text-lg">
            <Link href={links.help}>Ajuda</Link>
            <br />
            <Link
              href="https://github.com/SET-IST/bug-tracking/issues/new?assignees=&labels=bug&template=REPORT.yml&title=Insere+um+t%C3%ADtulo"
              passHref
              target="_blank"
            >
              Reportar um bug
            </Link>
          </p>
        </div>
      </FooterBody>
      <Divider />
      <SocialMedia />
      <Lage className="self-center lg:self-end" />
    </footer>
  )
}

export default Footer
