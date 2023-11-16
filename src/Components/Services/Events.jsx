import React from 'react';

const Events = () => {
  return (
    <div  className='w-4/5 mx-auto py-10'>
      <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <h2  className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-center sm:text-left mb-4'>
          Upcoming Events
        </h2>
        <p  className='w-full sm:w-2/3 mx-auto text-center sm:text-left'>
          This is how we do community. Wherever you are on your faith journey, there is a place for you to get involved.
        </p>
      </div>

      {/* Event cards */}
      <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10'>
        <div  className='bg-gradient-to-br from-pink-400 to bg-amber-300 px-6 sm:px-10 py-12'>
          <h2  className='text-center text-white font-semibold text-3xl sm:text-4xl uppercase'>
            Sunday Services
          </h2>
        </div>

        <div  className='bg-black px-6 sm:px-10 py-12'>
          <h2  className='text-center text-white font-semibold text-3xl sm:text-4xl uppercase'>
            Sunday Services
          </h2>
        </div>

        <div  className='bg-gradient-to-b from-purple-600 to bg-pink-400 px-6 sm:px-10 py-12'>
          <h2  className='text-center text-white font-semibold text-3xl sm:text-4xl uppercase'>
            Connect Groups
          </h2>
        </div>

        <div  className='bg-gradient-to-br from-green-400 to bg-blue-400 px-6 sm:px-10 py-12'>
          <h2  className='text-center text-white font-semibold text-3xl sm:text-4xl uppercase'>
            Culture  className
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Events;
