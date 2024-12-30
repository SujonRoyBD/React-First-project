import React from 'react'



const Profetional = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
     <div className='px-14'>
     <span className='flex gap-3 mt-9 '><img  src="/assets/headingIcon.webp" alt="" /><p>Working Process</p></span>
     <h1>Get Free Professional <br /> Consultation</h1>
     <span className='flex mb-4 gap-5'><img src="/assets/img/map.webp" alt="map" height={30} width={30} /><a href="#">163 Bowes rd, Toronto
     </a></span>
     <span className='flex mb-4 gap-5'><img src="/assets/img/phone.webp" alt="map" height={30} width={30} /><a href="#">647-449-9512
     </a></span>
     <span className='flex mb-4 gap-5'><img src="/assets/img/mail.webp" alt="map" height={30} width={30} /><a href="#">basement Renovation@gmail.com
     </a></span>
     <span className='flex mb-4 gap-5'><img src="/assets/img/contact_us_clock.webp" alt="map" height={30} width={30} /><a href="#">Mon & SUN by Appointment TUE - SAT (10am - 7pm)
     </a></span>
    

     
     </div>
     <div>
     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d72896.24894928216!2d90.37086357822159!3d23.779722314104042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1735578992943!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   

     </div>
    </div>
  )
}

export default Profetional
