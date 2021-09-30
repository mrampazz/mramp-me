import React, { useState, useEffect } from 'react'
import TypewriterComponent from 'typewriter-effect'
import {
  GithubIcon,
  MailIcon,
  LinkedinIcon,
  WavesSeparator,
} from '../components/icons'

export default function Home() {
  const [typing, setTyping] = useState(true)

  return (
    <>
      <div className='hero-container'>
        <div className='title'>
          <h1>Marco Rampazzo</h1>
        </div>
        <div className='description'>
          <p>
            I'm a full stack web developer that has worked in both a team
            environment and as a freelancer, mainly interested in the web but
            open to other areas of software development. Currently working @{' '}
            <a href='https://gruppo4.com' target='_blank'>
              gruppo4
            </a>
          </p>
        </div>
        <div className='social-links'>
          <div>
            <a href='https://mailto:mrampazz@gmail.com/' target='_blank'>
              <MailIcon />
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/mrampazz/' target='_blank'>
              <LinkedinIcon />
            </a>
          </div>
          <div>
            <a href='https://github.com/mrampazz' target='_blank'>
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className='cta-container'>
          <a className='cta' href='#' target='_blank'>
            Resume
          </a>
        </div>
        <div className='waves'>
          <WavesSeparator />
        </div>
      </div>
    </>
  )
}
