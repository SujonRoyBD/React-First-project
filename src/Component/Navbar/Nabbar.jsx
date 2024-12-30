import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Nabbar = () => {
  return (
    <div className='bg-white top-0 z-50 sticky'>
      <nav className='flex ml-9 gap-20 '>
        <img className='h-[50px]' src="/assets/img/prime.png" alt="top" height={70} width={70} />
        <div>
          <ul className='grid grid-col md:grid-cols-5 first-line: gap-[100px] mt-4'>
            <a href="text">About</a>
            <a href="text">Contact</a>
            <a href="text">Blog</a>
           <div className='flex sm: mr-[100px]'>
           <input type="text" placeholder= 'search ' className='border-2 rounded-l-full px-3 w-[150px]' />
            
            <button className=' bg-orange-500 px-5 rounded-r-full flex'>Search </button>
           </div>

          </ul>
          <div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nabbar
