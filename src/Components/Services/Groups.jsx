import React from 'react'
import FountainKids from '../../assets/image1.jpg'

const Groups = () => {
  return (
    <div className='w-4/5 py-5 mx-auto grid grid-cols-2 gap-5'>

    <div style={{ backgroundImage:`url(${FountainKids})`}} className=' text-white '>
    <div className='bg-black opacity-60 grid px-10 py-20'>
    <h2 className='text-center text-5xl font-semibold py-5 '>Fountain Kids</h2>
    <p className='w-2/3 mx-auto p-2 text-center text-md'>At Fountain Kids we offer a safe, fun, and age approppriate environment 
    for Kids to Learn about God both online and in person. Our mission every Sunday 
    is to create an atmosphere where your kids can grow more in their relationship with jesus.</p>
    <div className='mx-auto py-4'>
    <button className=' border border-white rounded-lg px-2  py-2'>Learn more</button>
    </div>
    </div>
    </div>


    <div style={{ backgroundImage:`url(${FountainKids})`}} className=' text-white '>
    <div className='bg-black opacity-60 grid px-10 py-20'>
    <h2 className='text-center text-5xl font-semibold py-5 '>Fountain Kids</h2>
    <p className='w-2/3 mx-auto p-2 text-center text-md'>At Fountain Kids we offer a safe, fun, and age approppriate environment 
    for Kids to Learn about God both online and in person. Our mission every Sunday 
    is to create an atmosphere where your kids can grow more in their relationship with jesus.</p>
    <div className='mx-auto py-4'>
    <button className=' border border-white rounded-lg px-2  py-2'>Learn more</button>
    </div>
    </div>
    </div>

    </div>
  )
}

export default Groups