import React from 'react'
import { SiPandas } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='bg-gray-300 mt-4'>
    <footer className="footer bg-neutral text-neutral-content p-10 grid   grid-cols-2 md:grid-cols-4 justify-between">
  <nav className='grid'>
    <h6 className="footer-title"><img src="../../../src/assets/prime.png" alt="" /></h6>
    <a className="link link-hover">Branding</a>
    <p>Trust our professional basement renovation contractors in Toronto to transform your basement into a beautiful and functional space you'll love for years. Contact us today to get started!</p>
  </nav>
  <nav className='grid'>
    <h6 className="footer-title font-bold text-lg">Quick Access</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Services</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Contact Us</a>
  </nav>
  <nav className='grid'>
    <h6 className="footer-title  font-bold text-lg">weigth Loss</h6>
    <a className="link link-hover">Fat Reduction</a>
    <a className="link link-hover">Muscle Building</a>
    <a className="link link-hover">Body Contouring </a>
    <a className="link link-hover">Contact Us </a>

  </nav>
  <nav className='grid'>
    <h6 className="footer-title  font-bold text-lg">Contact Us</h6>
    <a className="link link-hover flex gap-2"><img src="../../../src/assets/img/map.webp" alt=""height={2} width={20} /> 163 Bowes rd, Toronto</a>
    <a className="link link-hover flex gap-2"><img src="../../../src/assets/img/phone.webp" alt="phone" height={0} width={20} /> Privacy policy</a>
    <a className="link link-hover flex gap-2"><img src="../../../src/assets/img/mail.webp" alt="mail" width={20} height={1} /> Cookie policy</a>
    <span className="link link-hover flex "><img src="../../../src/assets/img/contact_us_clock.webp" alt="mail" width={20} height={1} /> <strong className=' '>Mon & SUN</strong> by Appointment <br /> <strong>TUE - SAT</strong></span>
  </nav>
</footer>
<div>
  
</div>
    </div>
  )
}

export default Footer
