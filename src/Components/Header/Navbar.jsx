import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../assets/logo.jpg';

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      name: 'Sunday Service',
    },
    {
      id: 2,
      name: 'Watch',
    },
    {
      id: 3,
      name: 'Ministry',
    },
    {
      id: 4,
      name: 'Get Involved',
    },
    {
      id: 5,
      name: 'Give',
    },
  ];

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className='w-full bg-[#242424]'>
      <div className='w-[90%] mx-auto flex items-center justify-between py-4 text-white'>
        <img src={Logo} alt='' width={70} height={70} className='ml-8 py-2' />

        {/* Nav Items for larger screens */}
        <div className='hidden md:flex space-x-4'>
          {navItems.map((item) => (
            <h2 key={item.id}>{item.name}</h2>
          ))}
        </div>

        {/* Mobile Menu Icon and Dropdown for small screens */}
        <div className='md:hidden'>
          <AiOutlineMenu size={30} onClick={toggleDropdown} />

          {isDropdownVisible && (
            <div className='absolute top-16 right-4 bg-[#242424] p-4 space-y-2'>
              {navItems.map((item) => (
                <h2 key={item.id} className='cursor-pointer' onClick={toggleDropdown}>
                  {item.name}
                </h2>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
