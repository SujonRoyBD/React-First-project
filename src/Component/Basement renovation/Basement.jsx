import React from 'react'
import { FaArrowRight } from "react-icons/fa";

// import bg__img from "/assets/img/bg hero.png";
const Basement = () => {
  return (
    <div data-aos="fade-left" style={{backgroundImage : `url("//assets/img/bg hero.png")`}} className='bg-cover bg-center bg-no-repeat h-screen sm:w-[500px] md:w-full '>
      <div className='ml-[100px] h-full flex flex-col justify-center '><h1 className='font-bold text-3xl text-white '>Basement Renovation <br /> in Toronto</h1> 
      <p className='text-white  text-2xl'>Prime Basement Renovations <br /> offers top-notch basement renovation in Toronto, <br /> enhancing your home with style, function, and quality finishes.</p> 
      <button className='w-48 bg-red-500 py-3 px-4 rounded-full flex mt-7 '>Get a free Quate <FaArrowRight className='mt-2 ml-2 text-white' /> </button></div>
    </div>
  )
}

export default Basement
