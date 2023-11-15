import React, { useState } from 'react';

const BannerOne = () => {
  const [youtubeID] = useState('eGucQJ_Rgvs');

  return (
    <section>
      <h1 className='text-center uppercase text-6xl font-semibold pt-10 pb-6 w-4/5 text-white mx-auto'>
        Can you give them a message for me?
      </h1>
      <div className='flex w-4/5 items-center gap-4 mx-auto text-white'>
        <h2 className='uppercase'>Pastor James Njuguna</h2>
        <h2 className='text-center'>12.11.2023</h2>
      </div>
      <div className='w-4/5 mx-auto pt-10'>
        <iframe
          className='video'
          width='100%'
          height={600}
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
