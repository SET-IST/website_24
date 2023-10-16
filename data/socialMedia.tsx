import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from 'react-icons/si'

const socialMedia = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/SET_ISTTagus',
    logo: <SiTwitter color="white" className="w-9 h-9" />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/SET.Tecnico',
    logo: <SiFacebook color="white" className="w-9 h-9" />,
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/user/ISTTagusSET',
    logo: <SiYoutube color="white" className="w-9 h-9" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/set.ist/',
    logo: <SiInstagram color="white" className="w-9 h-9" />,
  },
]

export { socialMedia }
