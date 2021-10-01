import classNames from 'classnames'

export default function CtaLink({ href = '#', dark = false, children }) {
  return (
    <a className={classNames('cta-link', { dark })} href={href} target='_blank'>
      {children}
    </a>
  )
}
