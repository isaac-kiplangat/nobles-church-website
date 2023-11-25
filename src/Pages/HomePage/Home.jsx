import React from 'react'
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/AboutComponent'
import GetInvolved from '../../Components/Services/GetInvolvedComponent'
import Groups from '../../Components/Services/Groups'
import Giving from '../../Components/Services/Giving'
import Events from '../../Components/Services/Events'

const Home = () => {
  return (
    <div>
    <Banner/>
    <About/>
    <Events/>
    <div  className='w-4/5 mx-auto h-[1px] bg-black/50 my-8'></div>
    <div className='bg-gray-100'>
    <GetInvolved/>
    </div>
    <div className='bg-white'>
    <Groups/>
    <Giving/>
    </div>
    <div  className='w-full mx-auto  bg-blue-900 mt-12'>
    </div>
    </div>
  )
}

export default Home