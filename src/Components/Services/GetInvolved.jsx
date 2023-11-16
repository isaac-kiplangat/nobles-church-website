import React from 'react';

const GetInvolved = () => {
  return (
    <div  classNameName='w-4/5 mx-auto py-10'>
      <div  classNameName='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <h2  classNameName='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-center sm:text-left mb-4'>
          Get Involved
        </h2>
        <p  classNameName='w-full sm:w-2/3 mx-auto text-center sm:text-left'>
          This is how we do community. Wherever you are on your faith journey, there is a place for you to get involved.
        </p>
      </div>

      {/* Event cards */}
      <div  classNameName='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10'>
        <div  classNameName='bg-gradient-to-br from-pink-400 to bg-amber-300 px-6 sm:px-10 py-12'>
          <h2  classNameName='text-center text-white font-semibold text-3xl sm:text-4xl uppercase'>
            Sunday Services
          </h2>
        </div>

        <div  classNameName='bg-black px-6 sm:px-10 py-12'>
          <h2  classNameName='text-center text-white font-semibold text-3xl sm:text-4xl uppercase'>
            Sunday Services
          </h2>
        </div>

        <div  classNameName='bg-gradient-to-b from-purple-600 to bg-pink-400 px-6 sm:px-10 py-12'>
          <h2  classNameName='text-center text-white font-semibold text-3xl sm:text-4xl uppercase'>
            Connect Groups
          </h2>
        </div>

        <div  classNameName='bg-gradient-to-br from-green-400 to bg-blue-400 px-6 sm:px-10 py-12'>
          <h2  classNameName='text-center text-white font-semibold text-3xl sm:text-4xl uppercase'>
            Culture  className
          </h2>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
