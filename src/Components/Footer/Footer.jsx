import React from 'react';
import { AiOutlineMenu, AiOutlineUser, AiFillFacebook, AiFillYoutube, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import Logo from '../../assets/logo.jpg';
import { FaCopyright, FaMailchimp } from 'react-icons/fa';
import { MdCall, MdMail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='bg-[#141a41] py-4'>
      <div className=' w-4/5  mx-auto flex space-x-8  items-center md:gap-4'>
      <div className='flex gap-2 items-center'>
        <img src={Logo} alt="logo" width={40} height={40} className='ml-3 py-2' />
        <p className='text-white'>Nobles House</p>
        </div>
          <AiFillFacebook size={30} className="text-amber-600 hover:text-blue-600" />
            <AiFillYoutube size={35} className="text-amber-600 hover:text-red-600" />
            <AiFillTwitterCircle size={30} className="text-amber-600 rounded-lg hover:text-blue-400" />
            <AiOutlineWhatsApp size={30} className="text-amber-600 hover:text-red-600" />

      </div>
      <hr className='w-5/6 my-4 mx-auto'/>
    <div className='w-4/5   mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-12 '>
      {/* Logo and Info */}
      <div className='text-white '>
        <p className='text-lg font-semibold py-2'>@2023 Nobles Church</p>
        <p className='text-md py-1 flex items-center gap-2'><MdMail size={20}/>info@nobleschurch.com</p>
        <p className='text-md py-1 flex items-center gap-2'><MdCall size={20}/>+(254) 712 123 456</p>
        <p className='text-md py-1 flex items-center gap-2'><MdCall size={20}/>+(254) 712 123 456</p>


      </div>

      {/* Get Involved */}
      <div className='capitalize text-amber-500'>
        <h2 className='text-lg font-semibold py-2 text-white'>Get Involved</h2>
        <p className='text-md py-1'>Nobles Serve Team</p>
        <p className='text-md py-1'>Connect Groups</p>
        <p className='text-md py-1 '>Culture Class</p>
      </div>

      {/* Ministries */}
      <div className='capitalize text-amber-500'>
        <h2 className='text-lg font-semibold py-2 text-white'>Ministries</h2>
        <p className='text-md py-1'>Noble Kids</p>
        <p className='text-md py-1'>Noble Leadership</p>
        <p className='text-md py-1 '>Nobles Mums</p>
        <p className='text-md py-1 '>Events</p>
        <p className='text-md py-1 '>Noble Projects</p>
      </div>

      {/* Resources */}
      <div className='capitalize text-amber-500'>
        <h2 className='text-lg font-semibold py-2 text-white'>Resources</h2>
        <p className='text-md py-1'>Give</p>
        <p className='text-md py-1'>Noble Shop</p>
        <p className='text-md py-1'>Blog</p>

      </div>

      {/* Media */}
      <div className='capitalize text-amber-500'>
        <h2 className='text-lg font-semibold py-2 text-white '>Media</h2>
        <p className='text-md py-1'>Sunday Services</p>
        <p className='text-md py-1'>Nobles Youtube</p>
        <p className='text-md py-1 '>Nobles Music</p>
        <p className='text-md py-1 '>Nobles Podcast</p>
        <p className='text-md py-1 '>Leadership Academy</p>
      </div>
    </div>
    <div>
    <p className='text-center text-white gap-2 flex justify-center items-center'>copyright  <FaCopyright/> 2023 Covenant Keepers. 
    <span className="text-amber-500">All Rights Reserved</span></p> 
    </div>
    </footer>
  );
};

export default Footer;
