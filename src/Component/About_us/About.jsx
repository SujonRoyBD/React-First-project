import React from 'react'

const About = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 px-12 '>
        <div data-aos="fade-right">
          <img src="/assets/aboutUs.webp" alt="about" height={100} width={8000} />
        </div>
        <div data-aos="fade-left">
          <span className='flex gap-3'><img src="/assets/headingIcon.webp" alt="" /><p>Aboutus</p></span>
          <h1 className='font-bold text-3xl'>About Our Toronto <br /> Basement Renovation Company</h1>
          <p>Prime Basement Renovations is a leading basement renovation company in Toronto, dedicated to transforming underutilized spaces into stylish, functional areas. With a focus on quality craftsmanship and personalized design, we bring your vision to life, whether you're looking to add a cozy family room, a home office, or a modern entertainment space. Our team works closely with clients to ensure each project meets high standards, delivering beautiful and practical results. We prioritize open communication and transparency from the initial consultation to the final walkthrough. Our designers collaborate with you to create a layout that suits your lifestyle, while our experienced contractors execute the plan with precision and care. Whether you envision a sleek, modern look or a warm, inviting atmosphere, we tailor our services to match your unique style. At Prime Basement Renovations, we understand that your basement is an extension of your home, and we are committed to maximizing its potential. Our skilled team utilizes the latest techniques and high-quality materials to ensure durability and aesthetic appeal. We take pride in our attention to detail and strive to exceed our client</p>
        </div>
      </div>

      <div  className=' grid grid-cols-1 md:grid-cols-2 gap-7 mt-8 px-12'>
        <div data-aos="fade-left" >
          <span  className='flex gap-3'><img src="/assets/headingIcon.webp" alt="" /><p>Basement Renovations</p></span>
          <h1 className='font-bold text-3xl'>Best Basement Renovations <br /> in Toronto</h1>
          <p>Regarding the best basement renovators in Toronto, Prime Basement Renovations stands out as a leader in the industry. Our commitment to quality and customer satisfaction ensures your renovation experience is seamless and rewarding. We specialize in turning ordinary basements into extraordinary living spaces tailored to your needs. Whether you want to create a cozy family retreat, a stylish guest suite, or a functional home office, our expert team brings years of experience and creativity to every project. At Prime Basement Renovations, we understand the unique challenges of renovating basements, from moisture management to maximizing space. Our skilled designers and contractors work closely with you to develop a comprehensive plan that addresses your vision while adhering to local building codes. We use high-quality materials and the latest construction techniques to ensure that your renovated basement looks fantastic and stands the test of time. Our focus on detail and craftsmanship guarantees that every aspect of your renovation is executed. Choose Prime Basement Renovations for the best basement renovations in Toronto and experience the transformation of your basement into a space that enhances your home and lifestyle.

          </p>
        </div>
        <div>
          <div >
            <img src="/assets/forigner.webp" alt="about" height={100} width={8000} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
