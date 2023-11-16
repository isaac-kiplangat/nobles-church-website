import React from 'react';
import Pastors from '../../assets/njugunas.jpg';

const AboutTwo = () => {
  return (
    <div className='w-4/5 mx-auto items-center grid grid-cols-1 sm:grid-cols-2 py-10'>
      <div className='grayscale text-center'>
        <img src={Pastors} alt="" width={500} height={500} className='mx-auto sm:mx-0 flip-horizontal' />
      </div>

      <div className='text-center sm:text-left sm:py-10'>
        <h2 className='font-bold text-4xl sm:text-5xl'>Our Pastors</h2>
        <p className='w-full sm:w-2/3 mx-auto leading-loose break-words px-4 sm:px-0'>
          Our Pastors James and Margaret Njuguna have a passion to reach people through the life-changing message of the gospel. They have given their lives to the mission of the local church and have a vision to see all people know God, find freedom, discover their purpose, and make a difference.
        </p>
      </div>
    </div>
  );
}

export default AboutTwo;
