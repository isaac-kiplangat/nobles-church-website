import React from 'react'
import {FaArrowsAltH} from 'react-icons/fa'

const AboutOne = () => {
  return (
    <div className=' pt-12'>
    <div className='w-2/3 mx-auto '>
    <h2 className='text-2xl pb-2 font-bold'>Our <br/> Values</h2>
    <p className=' flex items-center gap-2 '><FaArrowsAltH className='font-light'/> Drag and hold to scroll</p>
    </div>

    <div className=' ml-[10%] grid grid-cols-2  gap-10 pt-20  scrollable no-scrollbar w-[90%] mr-5'>

    <div className=' flex items-center '>
    <span className='text-8xl font-semibold'>01</span>
    <div className='mr-20'>
    <h2 className='uppercase font-semibold'>Jesus is our message</h2>
    <p className='break-words'> Though our message may change, the <br/> message of jesus will always stay the same.</p>
    </div>

    <div className=' flex items-center'>
    <span className='text-8xl font-semibold'>02</span>
    <div className='mr-20'>
    <h2 className='uppercase font-semibold'>You are our passion</h2>
    <p>People are the most important thing to God so <br/> they are most important to us.</p>
    </div>
    </div>

    <div className=' flex items-center pr-5'>
    <span className='text-8xl font-semibold'>03</span>
    <div className=''>
    <h2 className='uppercase font-semibold'>Jesus is our message</h2>
    <p> Though our message may change, the <br/> message of jesus will always stay the same</p>
    </div>
    </div>

   
    

    </div>

    

    </div>
    </div>
  )
}

export default AboutOne