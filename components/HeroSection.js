import SocialLinks from './SocialLinks'
import { WavesSeparator } from './icons'
import CtaLink from './CtaLink'
export default function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='title'>
        <h1>Marco Rampazzo</h1>
      </div>
      <div className='description'>
        <p>
          I'm a full stack web developer that has worked in both a team
          environment and as a freelancer, mainly interested in the web but open
          to other areas of software development. Currently working @{' '}
          <a href='https://gruppo4.com' target='_blank'>
            gruppo4
          </a>
        </p>
      </div>
      <div className='social-links'>
        <SocialLinks />
      </div>
      <div className='cta-container'>
        <CtaLink href='#'>Resume</CtaLink>
      </div>
      <div className='waves'>
        <WavesSeparator />
      </div>
    </div>
  )
}
