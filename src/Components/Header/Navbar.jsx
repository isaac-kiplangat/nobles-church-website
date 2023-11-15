import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Logo from '../../assets/kingsgate.png'

const Navbar = () => {

  const navItems =[
    {
      id: 1,
      name:'Sunday Service'
    },
    {
      id: 2,
      name:'Watch'
    },
    {
      id: 3,
      name:'Ministry'
    },
    {
      id: 4,
      name:'Get Involved'
    },
    {
      id: 5,
      name:'Give'
    },
  ]
  return (
    <div className='w-full bg-[#242424] '>
    <div className=' w-[70%] mx-auto flex items-center justify-between  text-white'>
    <img src={Logo} alt="" width={70} height={70}  className='ml-8 py-2 '/>
    {navItems.map((item) => (
      <h2 key={item.id}>{item.name}</h2>
    ))}
    <AiOutlineMenu size={30}/>
    </div>
    </div>
  )
}

export default Navbar