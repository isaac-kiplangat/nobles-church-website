import React from 'react'
import Navbar from '../Header/Navbar'
import Banner from '../Banner/Banner'
import About from '../About/About'
import GetInvolved from '../Services/GetInvolved'
import Groups from '../Services/Groups'
import Giving from '../Services/Giving'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <About/>
    <GetInvolved/>
    <Groups/>
    <Giving/>
    <div className='w-4/5 mx-auto h-[1px] bg-black my-8'></div>
    <Footer/>
    </div>
  )
}

export default Home