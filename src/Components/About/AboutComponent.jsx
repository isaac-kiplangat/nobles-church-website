import React from 'react'
import AboutOne from './AboutOne'
import AboutTwo from './AboutTwo'
import {motion} from 'framer-motion'

const AboutComponent = () => {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition:{ duration : 0.1}},
    hidden: {opacity: 0, scale:0}
  }
  return (
    <motion.div 
     initial='hidden'
     animate={{scale: 0.5}}
     variants={squareVariants}
     whileInView='visible'
     className='bg-blue-100'
     >
    <AboutOne/>
    <AboutTwo/>
    <div className='w-4/5 mx-auto h-[1px] bg-black/10'></div>
    </motion.div>
  )
}

export default AboutComponent