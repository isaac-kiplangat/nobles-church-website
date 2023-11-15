import React from 'react'
import Pastors from  '../../assets/image3.jpg'

const AboutTwo = () => {
  return (
    <div className='w-4/5 mx-auto items-center grid grid-cols-2 py-20'>
    <div className='grayscale'>
    <img src={Pastors} alt="" width={500} height={500} />
    </div>

    <div className='text-center'>
    <h2 className=' font-bold text-5xl'>Our <br/>Pastors</h2>
    <p className='w-2/3 mx-auto leading-loose break-words px-5'>Our Pastors James and Catherine Njuguna
     have a passion to reach people through
    the life changing message of the gospel. They have given their lives to the mission of 
    the local church and have a vision to see all people know God, find freedom , discover 
    their purpose and make a difference.</p>
    </div>
   
    </div>
  )
}

export default AboutTwo