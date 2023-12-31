import React, { useState } from 'react';

const BannerOne = () => {
  const [youtubeID] = useState('eGucQJ_Rgvs');

  return (
    <section className='  '>
     {/**  <h1 className='text-center uppercase text-4xl sm:text-5xl md:text-6xl font-semibold px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 pt-6 pb-4 sm:pb-6 w-full mx-auto'>
        Can you give them a message for me?
      </h1>
      <div className='flex flex-col sm:flex-row w-1/3  items-center gap-4 mx-auto '>
        <h2 className=' uppercase text-center md:ml-12 sm:text-left mx-auto sm:mx-0 mb-4 sm:mb-0'>
          Pastor James Njuguna
        </h2>
        <h2 className='text-center sm:text-right'>12.11.2023</h2>
      </div> */}
      <div className='md:w-4/5 w-[95%] mx-auto  pt-10'>
        <iframe
          className='video md:h-[600px] h-[400px]   md:px-0'
          width='100%'
          height={400}
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
          allowFullScreen
        ></iframe>

        <div className='bg-purple-500'>
          <h2 className='text-center p-1'>
            Sunday Services: Online: 9AM 11AM 6PM / In Person: 6pm
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
