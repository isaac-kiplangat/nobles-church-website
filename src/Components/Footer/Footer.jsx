import React from 'react';
import Logo from '../../assets/logo.jpg';

const Footer = () => {
  return (
    <div className='w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5'>
      {/* Logo and Info */}
      <div>
        <img src={Logo} alt="logo" width={50} height={50} className='ml-3 py-2' />
        <p className='text-sm py-1'>@2023 Nobles Church</p>
        <p className='text-sm py-1'>info@nobleschurch.com</p>
        <p className='text-sm'>Website Created <br /> by <span className='font-bold'>VerseWrld</span></p>
      </div>

      {/* Get Involved */}
      <div className='capitalize'>
        <h2 className='text-md font-semibold py-2'>Get Involved</h2>
        <p className='text-sm py-1'>Nobles Serve Team</p>
        <p className='text-sm py-1'>Connect Groups</p>
        <p className='text-sm py-1 '>Culture Class</p>
      </div>

      {/* Ministries */}
      <div className='capitalize'>
        <h2 className='text-md font-semibold py-2'>Ministries</h2>
        <p className='text-sm py-1'>Noble Kids</p>
        <p className='text-sm py-1'>Noble Leadership</p>
        <p className='text-sm py-1 '>Nobles Mums</p>
        <p className='text-sm py-1 '>Events</p>
        <p className='text-sm py-1 '>Noble Projects</p>
      </div>

      {/* Resources */}
      <div className='capitalize'>
        <h2 className='text-md font-semibold py-2'>Resources</h2>
        <p className='text-sm py-1'>Give</p>
        <p className='text-sm py-1'>Noble Shop</p>
      </div>

      {/* Media */}
      <div className='capitalize'>
        <h2 className='text-md font-semibold py-2 '>Media</h2>
        <p className='text-sm py-1'>Sunday Services</p>
        <p className='text-sm py-1'>Nobles Youtube</p>
        <p className='text-sm py-1 '>Nobles Music</p>
        <p className='text-sm py-1 '>Nobles Podcast</p>
        <p className='text-sm py-1 '>Leadership Academy</p>
      </div>
    </div>
  );
};

export default Footer;
