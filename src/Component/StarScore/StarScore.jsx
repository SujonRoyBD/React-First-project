import React from 'react'
import { FiAlertCircle } from "react-icons/fi";

const StarScore = () => {
  return (
    <div > 
      <div className='grid grid-cols-1 md:grid-cols-4 gap-10 justify-center border-2  '>
       <div className='grid justify-center mt-5 '>
            <p className='flex'>Star Score <FiAlertCircle className='mt-2 ml-2 '/></p>
            <span className='flex '><img className='' src="/assets/img/star.webp" alt="Star" height={30} width={40}/><p className='mt-2 text-3xl'>99%</p></span>
        </div>
        <div>
            <p  className='flex'>Average Rating <div className='bg-lime-400 h-[10px] w-[200px] rounded-full mt-3 ml-5'></div><FiAlertCircle  className='mt-2 ml-4'/> </p>
            <p  className='flex'>Recency <div className='bg-lime-400 h-[10px] w-[200px] rounded-full mt-3 ml-[70px]'></div><FiAlertCircle  className='mt-2 ml-4'/> </p>
            <p  className='flex'>Reputation <div className='bg-lime-400 h-[10px] w-[200px] rounded-full mt-3 ml-[50px]'></div> <FiAlertCircle  className='mt-2 ml-4'/> </p>
            <p  className='flex'>Responsiveness<div className='bg-lime-400 h-[10px] w-[202px] rounded-full mt-3 ml-4'></div><FiAlertCircle  className='mt-2 ml-4'/> </p>
        </div>
        <div>
            <p>Reviews by rating <span>(past 12 months)</span></p>
            <p className='flex'>Average  <div className='bg-lime-300 h-[10px] w-[200px] rounded-full mt-3 ml-5'></div></p>
            <p className='flex'>poor <div className='bg-gray-300 h-[10px] w-[200px] rounded-full mt-3 ml-5'></div></p>
            <p className='flex'>Great <div className='bg-gray-300 h-[10px] w-[200px] rounded-full mt-3 ml-5'></div></p>
          
        </div>
        <div className='flex justify-center'>
            <img src="//assets/img/homestar.jpg" alt="" />
        </div>
      </div>
    </div>
  ) 
}

export default StarScore
