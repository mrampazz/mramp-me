import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import Separator from './Separator'
import CtaLink from './CtaLink'
import { useEffect, useState } from 'react'

export default function ProfileSection() {
  const { ref: imgRef, inView: imgVisible } = useInView({
    threshold: 0.5,
  })
  const { ref: techRef, inView: techVisible } = useInView({
    threshold: 0.5,
  })
  const { ref: textRef, inView: textVisible } = useInView({
    threshold: 0.5,
  })

  const [imgAnim, setImgAnim] = useState(false)
  const [techAnim, setTechAnim] = useState(false)
  const [textAnim, setTextAnim] = useState(false)

  useEffect(() => {
    if (imgVisible) setImgAnim(true)
    if (techVisible) setTechAnim(true)
    if (textVisible) setTextAnim(true)
  }, [imgVisible, techVisible, textVisible])

  return (
    <div className='profile-section'>
      <div
        className={classNames('img-container', {
          animate: imgVisible || imgAnim,
        })}
        ref={imgRef}
      >
        <img src='https://mramp.me/photos/profile.png' />
      </div>
      <div className='info'>
        <h3>Hey :)</h3>
        <p
          ref={textRef}
          className={classNames({ animate: textVisible || textAnim })}
        >
          My name is Marco, I'm a keen web developer, fluent in written and
          spoken English (C1), BsC in Computer Science, ~ 3 years of experience
          (freelance &amp; company)
        </p>
        <Separator />
        <h4>Some stuff I've worked with recently</h4>
        <ul
          className={classNames('tech', { animate: techVisible || techAnim })}
          ref={techRef}
        >
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Docker</li>
          <li>Headless CMS</li>
        </ul>
      </div>
      <div className='cta-container'>
        <CtaLink href='https://mramp.me/resume.pdf' dark>
          Resume
        </CtaLink>
      </div>
    </div>
  )
}
