import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineUser, AiFillFacebook, AiFillYoutube, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import Logo from '../../assets/logo.jpg';
import {IoClose} from 'react-icons/io5'

const Navbar = () => {
  const navItems = [
    { 
      path: '#sunday-service', 
      name: 'Sunday Service' },
    { 
      path: '/watch', 
      name: 'Watch' },
    {
      path: '/ministry', 
      name: 'Ministry' },
    { 
      path: '/get-involved', 
      name: 'Get Involved' },
    { 
      path: '/blog', 
      name: 'Blog' },
    {  
      path: '/give', 
      name: 'Give' },

  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleMenu =()=>{
    setIsMenuOpen(!isMenuOpen)
  }



  return (
    <div>
      <nav className="bg-amber-500  border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center w-4/5 mx-auto max-w-screen-xl py-4">
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Nobles House
            </span>
          </a>
          <AiOutlineMenu size={30} onClick={handleMenu} className='md:hidden text-white'/>
          {/**Navbar for smal/mobile screen */}
          {isMenuOpen && (

       
          <div className=' fixed md:hidden z-10 w-2/3 h-screen bg-[#FFFFF0] top-0 right-0 border-l border-yellow-400 '>
              <IoClose size={30} onClick={()=> setIsMenuOpen(false)} className='absolute hover:text-yellow-400 z-40 top-2 right-2 '/>

              <div className="">
            <ul className=" grid mt-20 text-black font-medium mx-4   text-sm">
              <hr className='w-full '/>
              {navItems.map((item, index) => (
                <li key={index} className='pt-4  text-center hover:bg-yellow-100'>
                  <Link to={item.path} className="text-black px-4  text-center text-lg hover:underline" >
                    {item.name}
                  </Link>
                  <hr className='w-full mt-4 text-yellow-500'/>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full px-4 flex justify-around py-4 my-6 items-center'>
          <AiFillFacebook size={30} className="text-amber-600 hover:text-blue-600" />
            <AiFillYoutube size={35} className="text-amber-600 hover:text-red-600" />
            <AiFillTwitterCircle size={30} className="text-amber-600 rounded-lg hover:text-blue-400" />
            <AiOutlineWhatsApp size={30} className="text-amber-600 rounded-lg hover:text-green-400" />
          </div>
          <div className='w-full my-4 px-4 bottom-10'>
          <button className='w-full bg-amber-400 text-white py-2 text-lg rounded-md hover:bg-blue-900'> Login</button>
          </div>
          </div>
             )}


            {/** Navbar for large screen */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <AiFillFacebook size={25} className="text-white hover:bg-blue-600" />
            <AiFillYoutube size={30} className="text-white" />
            <AiFillTwitterCircle size={25} className="text-white rounded-lg" />
            <AiOutlineWhatsApp size={25} className="text-white hover:text-green-500 rounded-lg" />

            <button
              onClick={toggleModal}
              className=" text-amber-500 bg-[#FCFCF7] hover:bg-amber-100 
               font-medium flex gap-1 rounded-[4px] text-sm px-4 py-2 text-center"
              type="button"
            >
               Login
            </button>
          </div>
        </div>
      </nav>
      <nav className="bg-[#141a41]">
        <div className="max-w-screen-xl w-4/5  py-3 mx-auto">
          <div className="flex items-center">
            <ul className=" hidden md:flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link to={item.path} className="text-white hover:underline" aria-current="page">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {isModalVisible && (
        <div>
        {/* Dark Overlay */}
        <div
          onClick={closeModal}
          className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-40"
        ></div>
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0   right-0 left-0 bottom-0 z-50 flex items-center justify-center"
        >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-1/3">
        {/* Your modal content goes here */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* -- Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Sign in to our platform
                </h3>
                <button
  type="button"
  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
  onClick={closeModal}
>
  <svg
    className="w-3 h-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    />
  </svg>
  <span className="sr-only">Close modal</span>
</button>

            </div>
            {/*-- Modal body */}
            <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>

          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
