import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Nabbar = () => {
  return (
    <div className='bg-white top-0 z-50'>
      <nav className='flex ml-9 gap-12'>
        <img className='h-[50px]' src="../../../src/assets/img/prime.png" alt="top" height={70} width={70} />
        <div>
          <ul className='grid grid-col md:grid-cols-5 first-line: gap-[100px] mt-4'>
            <li>
              Design and Planning
            </li>
            <li>
              Waterproofing
            </li>
            <li>
              Plumbing Installation
            </li>
            <li>
              Flooring Installation
            </li>
            <button className='bg-red-500 px-5 rounded-full flex'>Get a free Quate <FaArrowRight className='mt-2 ml-2 text-white' /> </button>

          </ul>
          <div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nabbar
