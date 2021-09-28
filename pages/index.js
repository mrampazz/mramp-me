import React, { useState, useEffect } from 'react'
import TypewriterComponent from 'typewriter-effect'
import { parseCookies, setCookie } from 'nookies'

export default function Home() {
  const [typing, setTyping] = useState(true)

  return (
    <>
      <div className='hero-container'>
        <div className='pre-title'>
          <span>Hi, my name is</span>
        </div>
        <div className='title'>
          <h1>Marco Rampazzo</h1>
        </div>
        <div className='subtitle'>
          <h2>
            {typing ? (
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Front En')
                    .pauseFor(650)
                    .deleteAll()
                    .typeString('Back ')
                    .deleteAll()
                    .pauseFor(500)
                    .typeString('Front End / Back End Developer')
                    .callFunction(() => setTyping(false))
                    .start()
                }}
              />
            ) : (
              'Front End / Back End Developer'
            )}
          </h2>
        </div>
        <div className='description'>
          <p>
            I'm a full stack web developer that has worked in both a team
            environment and as a freelancer, mainly interested in the web but
            open to other areas of software development.
          </p>
          <p>
            Currently working @{' '}
            <a href='https://gruppo4.com' target='_blank'>
              gruppo4
            </a>
          </p>
        </div>
        <div className='social-links'>
          <div>
            <a href='https://github.com/mrampazz' target='_blank'>
              github
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/mrampazz/' target='_blank'>
              linkedIn
            </a>
          </div>
          <div>
            <a href='https://mailto:mrampazz@gmail.com/' target='_blank'>
              mail me
            </a>
          </div>
          {/* <div>
            <a href=''>github</a>
          </div> */}
        </div>
        <div className='photo-container'></div>
      </div>
      <div>
        <div className='title'></div>
        <div className='exp-entries-container'></div>
      </div>
      {/* <div></div> */}
    </>
  )
}
