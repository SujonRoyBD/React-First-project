import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const data=[
    {
      img:"/assets/newImages/real-estate-graph 1-1.png" ,
      title:"Increased Home Value" ,
      desc:"Whether you're adding a rental suite, home theater, or extra living space, our transformations provide a great return on investment."
    },
    {
        img:"/assets/newImages/real-estate-graph 1-2.png" ,
        title:"Customized Designs" ,
        desc:"We don't believe in one size fits all. Our expert design team works with you to create a basement that fits your style, needs, and lifestyle, from layout to finishing touches"
      },
      {
        img:"/assets/newImages/real-estate-graph 1-3.png" ,
        title:"High-Quality Craftsmanship" ,
        desc:"With years of experience in the industry, our contractors take pride in delivering superior craftsmanship. From sturdy framing to flawless finishes, we use only the best materials and techniques"
      },
      {
        img:"/assets/newImages/real-estate-graph 1-4.png" ,
        title:"Timely completion" ,
        desc:"Our team is committed to completing your project on schedule without compromising quality, allowing you to enjoy your new space as soon as possible."
      },
      {
        img:"/assets/newImages/real-estate-graph 1-5.png" ,
        title:"Expert Project Management    " ,
        desc:"Our experienced project managers handle every detail of your basement renovation, ensuring smooth communication, coordination, and timely delivery."
      },
      {
        img:"/assets/newImages/real-estate-graph 1-6.png" ,
        title:"Energy Efficiency" ,
        desc:"We help optimize your basement's energy efficiency by suggesting eco-friendly solutions, such as better insulation, energy-efficient lighting, and climate control systems, keeping your space comf"
      },
      {
        img:"/assets/newImages/real-estate-graph 1-7.png" ,
        title:"Seamless Integration with Your Home" ,
        desc:"Your basement will feel like an integral part of your home, not an afterthought. We ensure the renovation complements your existing home's design, layout, and flow."
      },
      {
        img:"/assets/newImages/real-estate-graph 1-8.png" ,
        title:"Safety and Code Compliance" ,
        desc:"We adhere to all local building codes and regulations, ensuring that your renovation meets safety standards. You can rest assured that all electrical, plumbing, and structural work is done to code."
      },
      {
        img:"/assets/newImages/real-estate-graph 1-9.png" ,
        title:"No Hidden Costs" ,
        desc:"From the initial estimate to the final invoice, we ensure you are fully informed of all costs, helping you avoid unexpected expenses."
      },
      {
        img:"/assets/newImages/real-estate-graph 2.png" ,
        title:"Stress-Free Experience" ,
        desc:"Our team takes care of everything, minimizing disruption to your daily life. We aim to make the renovation process as smooth and hassle-free as possible, from start to finish."
      },
      {
        img:"/assets/newImages/real-estate-graph 1.png" ,
        title:"Get Your Free Basement Renovation Consultation" ,
        desc:(
            <>
           Our team takes care of everything, minimizing disruption to your daily life. We aim to make 
           <button className='bg-red-500 ml-9 mb-9 px-5 rounded-full flex'>Get a free Quate <FaArrowRight className='mt-2 ml-2 text-white' /> </button>


            </>
        )
      },

]

const Benifits = () => {
  return (
    <div data-aos="zoom-in">
        <div className='text-center mt-7'>
        <span className=' flex justify-center gap-3'><img  src="/assets/headingIcon.webp" alt="" /><p>Benefits</p></span>
        <h1 className='font-bold text-3xl mb-6'>Reviews For Basement Renovation</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 px-20 '>
        {
            data.map((data)=>{
                return <div key={data} className='border-2 px-5'>
                    <img src={data.img} alt='image' width={60} height={60}/>
                    <p className='text-xl font-bold'>{data.title}  </p>
                    <p className=''>{data.desc}</p>
                    
                </div>
            })

            }
        </div>
        
    </div>
  )
} 

export default Benifits
