import React from 'react'
import Logo from '../../assets/logo.jpg'

const Footer = () => {
  return (
    <div className='w-4/5 mx-auto grid grid-cols-5 gap-5 mb-5'>

    <div>
    <img src={Logo} alt="logo"  width={50} height={50} className='ml-3 py-2' />
    <p className='text-sm py-1'>@2023 Nobles Church</p>
    <p className='text-sm py-1'>info@nobleschurch.com</p>
    <p className='text-sm'>Website Created <br/> by <span className='font-bold'>VerseWrld</span></p>
    </div>

    <div className='capitalize'>
    <h2 className='text-md font-semibold py-2'>Get Involved</h2>
    <p className='text-sm py-1'>Nobles Serve Team</p>
    <p className='text-sm py-1'>Connect Groups</p>
    <p className='text-sm py-1 '>Culture Class</p>
    </div>

    <div className='capitalize'>
    <h2 className='text-md font-semibold py-2'>ministries</h2>
    <p className='text-sm py-1'>Noble Kids</p>
    <p className='text-sm py-1'>noble leadership</p>
    <p className='text-sm py-1 '>nobles mums</p>
    <p className='text-sm py-1 '>events</p>
    <p className='text-sm py-1 '>noble projects</p>

    </div>

    <div className='capitalize'>
    <h2 className='text-md font-semibold py-2'>resources</h2>
    <p className='text-sm py-1'>give</p>
    <p className='text-sm py-1'>noble shop</p>
    </div>

    <div className='capitalize'>
    <h2 className='text-md font-semibold py-2 '>Media</h2>
    <p className='text-sm py-1'>Sunday services</p>
    <p className='text-sm py-1'>Nobles Youtube</p>
    <p className='text-sm py-1 '>Nobles music</p>
    <p className='text-sm py-1 '>Nobles Podcast</p>
    <p className='text-sm py-1 '>Leadership academy</p>

    </div>

    </div>
  )
}

export default Footer