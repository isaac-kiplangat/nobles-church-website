import React from 'react'
import { FaChevronRight, FaWhatsapp } from 'react-icons/fa'
import {MdMonitor} from 'react-icons/md'
import {IoIosPhonePortrait} from 'react-icons/io'

const Giving = () => {
  return (
    <div className='w-4/5 py-10 mx-auto'>
    <div className='py-10 bg-gradient-to-b  from-green-500 via-violet-400 to-purple-600 mx-auto'>
    <h2 className='text-center text-white font-semibold text-5xl capitalize'> ways we  give</h2>
    <p className='text-sm capitalize text-white text-center py-4'>patner with Fountain Family</p>
    <div className='w-2/3 grid grid-cols-2 mx-auto gap-5'>
    
    <div className='border-2 border-white text-white bg-transparent flex justify-between items-center px-4 py-2 rounded-lg'>
    <h2 className='font-medium text-lg w-2/5 '>Your Generation at work</h2>
    <FaChevronRight/>
    </div>

    <div className='border-2 border-white text-white bg-transparent flex justify-between items-center px-4 py-2 rounded-lg'>
    <h2 className='font-medium text-lg w-1/2  p-2 '>Become a Kingdom Builder</h2>
    <FaChevronRight/>
    </div>
    </div>

    <div className='w-1/3 mx-auto flex justify-between py-10 text-white text-sm'>
    
    <div className=''>
    <MdMonitor size={40} className='text-white'/>
    <p>Online</p>
    </div>
    <div className='text-center'>
    <IoIosPhonePortrait size={40} className='text-white'/>
    <p>App</p>
    </div>
    <div className='text-center'>
    <FaWhatsapp size={40} className='text-white mx-2'/>
    <p className='text-center'>Channel</p>
    </div>

    
    </div>
    </div>

    </div>
  )
}

export default Giving