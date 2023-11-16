import React from 'react';
import { FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { MdMonitor } from 'react-icons/md';
import { IoIosPhonePortrait } from 'react-icons/io';

const Giving = () => {
  return (
    <div className='w-4/5 py-10 mx-auto'>
      <div className='py-10 bg-gradient-to-b  from-green-500 via-violet-400 to-purple-600 mx-auto'>
        <h2 className='text-center text-white font-semibold text-3xl md:text-5xl capitalize'>Ways We Give</h2>
        <p className='text-sm capitalize text-white text-center py-4'>Partner with Fountain Family</p>
        <div className='w-2/3 grid grid-cols-1 md:grid-cols-2 mx-auto gap-5'>

          {/* Option 1 */}
          <div className='border-2 border-white text-white bg-transparent flex justify-between items-center px-4 py-2 rounded-lg mb-4'>
            <h2 className='font-medium text-lg w-1/2 md:w-full p-2'>Your Generation at Work</h2>
            <FaChevronRight />
          </div>

          {/* Option 2 */}
          <div className='border-2 border-white text-white bg-transparent flex justify-between items-center px-4 py-2 rounded-lg mb-4'>
            <h2 className='font-medium text-lg w-1/2 md:w-full p-2'>Become a Kingdom Builder</h2>
            <FaChevronRight />
          </div>
        </div>

        <div className='w-full md:w-1/2 mx-auto sm:w-full sm:mx-auto flex  items-center justify-around py-10 text-white text-sm'>
        {/* Online */}
        <div className='text-center mb-4'>
          <MdMonitor size={40} className='text-white' />
          <p>Online</p>
        </div>
      
        {/* App */}
        <div className='text-center mb-4'>
          <IoIosPhonePortrait size={40} className='text-white' />
          <p>App</p>
        </div>
      
        {/* WhatsApp Channel */}
        <div className='text-center mb-4'>
          <FaWhatsapp size={40} className='text-white ' />
          <p className='text-center'>Channel</p>
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default Giving;
