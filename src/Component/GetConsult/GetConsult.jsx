import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const GetConsult = () => {
  return (
    <div data-aos="zoom-in" className='grid grid-cols-1 md:grid-cols-3'style={{
      backgroundImage: `url('../../../src/assets/img/contacbg.png')`,
      }} >
      <div className='h-[]'>
        <img className='h-[500px]' src="../../../src/assets/img/contact__us.webp" alt="contact"height={1700} width={400} />
      </div>
      <div className=' w-[550px] h-[500px] sm:ml-[00px] md:-ml-[200px] '>
        <div className='bg-red-700 text-white mt-[50px]  rounded-md h-[420px] '>
        <p className='text white font-bold '>
        Our Contact Information</p>
        <h1 className='text-white text-3xl'>Give Us Feedback</h1>
        <div className='flex gap-6 mt-7 px-6'>
         <div>
         <p>Your name</p>
        <input type="text" placeholder='Your name' className='h-9 px-4 rounded-md' />  
         </div>
         <div>
          <p>Your Email *</p>
          <input type="text" placeholder='Your name' className='h-9 px-4 rounded-md'  /> 
         </div>
        </div>
        <div className='flex gap-6 mt-7 px-6'>
         <div>
         <p>Your name</p>
        <input type="text" placeholder='Your name' className='h-9 px-4 rounded-md'  />  
         </div>
         <div>
          <p>Your Email *</p>
          <input type="text" placeholder='Your name' className='h-9 px-4 rounded-md'  /> 
         </div>
        </div>
        <textarea name="text" className='w-[470px] ml-7 mt-7 rounded-md'></textarea>
        <button className='bg-red-500 px-5 py-3 rounded-full mt-8 flex ml-[160px]'>Get a free Quate <FaArrowRight className='mt-2 ml-2 text-white' /> </button>

        </div>
       
          
    </div>
    <div>
        <span className='flex gap-3'><img  src="../../../src/assets/headingIcon.webp" alt="" /><p>Get Consultant</p></span>
     <h1 className='font-bold text-3xl'>Make an Appointment</h1>
     <p>"Ready to transform your basement into a beautiful, functional space? At Prime Basement Renovations, our team of skilled contractors is here to guide you every step of the way. Experience exceptional service and high-quality craftsmanship tailored to your needs. Contact us today to discuss your renovation and start creating a space you'll love for years to come!"</p>
     <h1 className='text-blue-500 font-bold mt-3'>Opening Hours</h1>
     <p className='text-blue-500' >We're open and ready to serve you at convenient <br />
     times throughout the week</p>
     <p className='flex'><img src="../../../src/assets/img/contact_us_clock.webp" alt="clock" height={30} width={30}/> <strong className='text-blue-500'>Mon & SUN</strong>by Appointment <strong className='text-blue-500'>TUE - SAT</strong>(10am - 7pm)</p>
     <button className='bg-red-500 px-5 py-3 rounded-full mt-8 flex ml-[160px]'>Get a free Quate <FaArrowRight className='mt-2 ml-2 text-white' /> </button>
        </div>
    </div>
    
  )
}

export default GetConsult
