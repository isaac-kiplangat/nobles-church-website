import React from 'react';
import NobleKids from '../../assets/image1.jpg';

const Groups = () => {
  return (
    <div  className='w-4/5 py-5 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5'>

      {/* Group 1 */}
      <div style={{ backgroundImage: `url(${NobleKids})` }}  className='text-white'>
        <div  className='bg-black opacity-60 grid px-6 sm:px-10 py-16'>
          <h2  className='text-center sm:text-left text-3xl sm:text-5xl font-semibold py-2 sm:py-5'>
            Noble Kids
          </h2>
          <p  className='w-full mx-auto p-2 text-center sm:text-left text-sm sm:text-md'>
            At Noble Kids, we offer a safe, fun, and age-appropriate environment for kids to learn about God both online and in person. Our mission every Sunday is to create an atmosphere where your kids can grow more in their relationship with Jesus.
          </p>
          <div  className='mx-auto py-4'>
            <button  className='border border-white rounded-lg px-4 py-2'>Learn more</button>
          </div>
        </div>
      </div>

      {/* Group 2 */}
      <div style={{ backgroundImage: `url(${NobleKids})` }} >
      
        <div  className='  px-6 block sm:px-10 py-16'>
          <h2  className='text-center  text-white sm:text-left text-3xl sm:text-5xl font-semibold py-2 sm:py-5'>
            Noble Kids
          </h2>
          <p  className='w-full mx-auto p-2 text-center sm:text-left text-sm sm:text-md'>
            At Noble Kids, we offer a safe, fun, and age-appropriate environment for kids to learn about God both online and in person. Our mission every Sunday is to create an atmosphere where your kids can grow more in their relationship with Jesus.
          </p>
          <div  className='mx-auto py-4'>
            <button  className='border border-white rounded-lg px-4 py-2'>Learn more</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Groups;
