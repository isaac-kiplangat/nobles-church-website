import React from 'react'
import Praise from '../../assets/praise.jpg'

const BannerOne = () => {
  return (
    <div>
    <h1 className='text-center uppercase text-6xl font-semibold pt-10 pb-6 w-1/2 text-white mx-auto'>can you give them a message for me?</h1>
    <div className='flex w-1/5 items-center gap-4 mx-auto text-white '>
    <h2 className='uppercase'>Pastor James Njuguna</h2>
    <h2 className='text-center'>12.11.2023</h2>
    </div>
    <div className='w-4/5 mx-auto pt-10'>
    <img src={Praise} alt="" width={600} height={400} className='w-full' />
    <div className='bg-purple-500'> 
    <h2 className='text-center p-1'> Sunday Services: Online:9AM 11AM 6PM / In Person: 6pm</h2>
    </div>
    </div>
    </div>
  )
}

export default BannerOne