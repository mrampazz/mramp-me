import { GithubIcon, MailIcon, LinkedinIcon } from './icons'

const LINKS = [
  { id: 0, href: 'mailto:mrampazz@gmail.com/', icon: <MailIcon /> },
  {
    id: 1,
    href: 'https://www.linkedin.com/in/mrampazz/',
    icon: <LinkedinIcon />,
  },
  { id: 2, href: 'https://github.com/mrampazz', icon: <GithubIcon /> },
]

export default function SocialLinks() {
  return (
    <>
      {LINKS.map(({ id, href, icon }) => (
        <div key={id} className='social-link'>
          <a href={href} target='_blank'>
            {icon}
          </a>
        </div>
      ))}
    </>
  )
}
