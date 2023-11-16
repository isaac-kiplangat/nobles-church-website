import React from 'react'
import Navbar from '../Header/Navbar'
import Banner from '../Banner/Banner'
import About from '../About/About'
import GetInvolved from '../Services/GetInvolved'
import Groups from '../Services/Groups'
import Giving from '../Services/Giving'
import Footer from '../Footer/Footer'
import Events from '../Services/Events'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <About/>
    <Events/>
    <div  classNameName='w-4/5 mx-auto h-[1px] bg-black/50 my-8'></div>
    <GetInvolved/>
    <Groups/>
    <Giving/>
    <div  classNameName='w-4/5 mx-auto h-[1px] bg-black my-8'></div>
    <Footer/>
    </div>
  )
}

export default Home