import React from 'react'
import Praise from '../../assets/praise.jpg'

const BannerTwo = () => {

  const recents = [
    {
      image:Praise,
      caption:'live free and get your hope back'
    },
    {
      image:Praise,
      caption:'Are you bursting or bankrupt?'
    },
    {
      image:Praise,
      caption:'not too bullied to build'
    },
    {
      image:Praise,
      caption:'her night'
    },
    {
      image:Praise,
      caption:'from bitter to better'
    },
    
  ]
  return (
    <div className='w-4/5 pb-10 mx-auto text-white'>
    <h2 className='py-4 text-md font-semibold'>Most Recent</h2>
    <div className='grid grid-cols-5 gap-6'>
    {recents.map((item, index) => (
      <span key={index} >
      <img src={item.image} alt="video banner "  width={400} height={400}/>
      <p className='uppercase font-semibold px-1 break-words py-2'>{item.caption}</p>
      </span>
    ))}
    </div>

    <div className='w-1/2 pt-10 mx-auto'>
    <h2 className='text-4xl text-center font-bold antialiased'>The thief comes only to steal and kill
     and destroy; i have come that they may have life,and have it to the full.</h2>
     <p className='text-sm text-center pt-4'>John 10:10 </p>
    </div>
    
    </div>
  )
}

export default BannerTwo