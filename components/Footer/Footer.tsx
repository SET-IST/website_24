import { Text, Container, ActionIcon, Group, rem } from '@mantine/core'
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons-react'
import SetLogo from '@/core/assets/logos/logo_set.svg'
import classes from './FooterLinks.module.css'

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
]

export default function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  return (
    <footer className="border-t border-[color:var(--mantine-color-gray-2)] bg-[color:var(--mantine-color-gray-0)] pt-10 pb-5">
      <div className="flex flex-row justify-between items-center mx-20 py-8">
        <SetLogo aria-hidden />
        <div className="flex flex-row gap-8">
          <div>
            <Text className={classes.title}>Localização</Text>
            <span>
              Instituto Superior Técnico (Campus Taguspark) <br /> Av. Prof.
              Doutor Cavaco Silva, 2744-016 Porto Salvo
            </span>
          </div>
          <div>
            <Text className={classes.title}>Contactos</Text>
            <span>
              +351 214 233 759 (5179) <br /> geral@set-tagus.tecnico.ulisboa.pt
            </span>
          </div>
          <div>
            <Text className={classes.title}>Ajuda</Text>
            <Text<'a'>
              className={classes.link}
              component="a"
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              FAQ
            </Text>
            <Text<'a'>
              className={classes.link}
              component="a"
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Reportar um bug
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center border-t py-1 mx-20">
        <ActionIcon size="xl" color="gray" variant="subtle">
          <IconBrandTwitter
            style={{ width: rem(22), height: rem(22) }}
            stroke={1.5}
          />
        </ActionIcon>
        <ActionIcon size="xl" color="gray" variant="subtle">
          <IconBrandYoutube
            style={{ width: rem(22), height: rem(22) }}
            stroke={1.5}
          />
        </ActionIcon>
        <ActionIcon size="xl" color="gray" variant="subtle">
          <IconBrandInstagram
            style={{ width: rem(24), height: rem(24) }}
            stroke={1.5}
          />
        </ActionIcon>
      </div>
    </footer>
  )
}
