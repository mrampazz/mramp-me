import React, { useState, useEffect } from 'react'

export default function Home() {
  return (
    <>
      <div className='hero-container'>
        <div className='title'>
          <h1>MARCO RAMPAZZO</h1>
        </div>
        <div className='subtitle'>
          <h2>FULL STACK WEB DEV</h2>
        </div>
        <div className='description'>
          <p>
            <strong>Welcome!</strong> I'm a full stack web developer that has
            worked with the full stack in both a team environment and as a
            freelancer, mainly interested in the web but open to other areas of
            software development.
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
