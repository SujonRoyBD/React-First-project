import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Profetional = () => {
  return (
    <div>
     <div className='px-14'>
     <span className='flex gap-3 mt-9 '><img  src="../../../src/assets/headingIcon.webp" alt="" /><p>Working Process</p></span>
     <h1>Get Free Professional <br /> Consultation</h1>
     <span className='flex mb-4 gap-5'><img src="../../../src/assets/img/map.webp" alt="map" height={30} width={30} /><a href="#">163 Bowes rd, Toronto
     </a></span>
     <span className='flex mb-4 gap-5'><img src="../../../src/assets/img/phone.webp" alt="map" height={30} width={30} /><a href="#">647-449-9512
     </a></span>
     <span className='flex mb-4 gap-5'><img src="../../../src/assets/img/mail.webp" alt="map" height={30} width={30} /><a href="#">basement Renovation@gmail.com
     </a></span>
     <span className='flex mb-4 gap-5'><img src="../../../src/assets/img/contact_us_clock.webp" alt="map" height={30} width={30} /><a href="#">Mon & SUN by Appointment TUE - SAT (10am - 7pm)
     </a></span>
     <button className='bg-red-500 px-5 py-3 rounded-full mt-8 flex ml-[160px]'>Get a free Quate <FaArrowRight className='mt-2 ml-2 text-white' /> </button>

     <p className='p-[20px] bg-green-500 text-white rounded-full inline'>K</p>
     <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.5725771398415!2d90.37711387354118!3d23.873670184036175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c50054d497f5%3A0xfb9531a5f172d6d5!2sMagura%20Fashion!5e1!3m2!1sen!2sbd!4v1732286611064!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
    </div>
  )
}

export default Profetional
