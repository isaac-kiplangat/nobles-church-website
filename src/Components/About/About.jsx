import React from 'react'
import AboutOne from './AboutOne'
import AboutTwo from './AboutTwo'

const About = () => {
  return (
    <div>
    <AboutOne/>
    <AboutTwo/>
    <div className='w-4/5 mx-auto h-[1px] bg-black/10'></div>
    </div>
  )
}

export default About