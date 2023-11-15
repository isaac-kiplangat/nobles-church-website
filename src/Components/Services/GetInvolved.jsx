import React from 'react'

const GetInvolved = () => {
  return (
    <div className='w-4/5 mx-auto py-10'>
    <div className='grid grid-cols-2 w-3/4 mx-auto'>
    <h2 className='text-4xl font-semibold'> Get <br/> Involved</h2>
    <p className='w-2/3 px-1'> This is how we do community.<br/> Wherever you are on your faith journey, there is a place for you to get involved.</p>
    </div>

    {/**  get involved cards */}
    <div className='grid grid-cols-4 gap-5 pt-20'>

    <div className='bg-gradient-to-br from-pink-400 to bg-amber-300 px-10 py-20  '>
    <h2 className='text-center text-white font-semibold text-4xl uppercase'>Sunday Services</h2>
    </div>

    <div className='bg-black px-10 py-20  '>
    <h2 className='text-center text-white font-semibold text-4xl uppercase'>Sunday Services</h2>
    </div>

    <div className='bg-gradient-to-b from-purple-600 to bg-pink-400 px-10 py-20  '>
    <h2 className='text-center text-white font-semibold text-4xl uppercase'>connect groups</h2>
    </div>

    <div className='bg-gradient-to-br from-green-400 to bg-blue-400 px-10 py-20  '>
    <h2 className='text-center text-white font-semibold text-4xl uppercase'>Culture Class</h2>
    </div>
    </div>
    </div>
  )
}

export default GetInvolved