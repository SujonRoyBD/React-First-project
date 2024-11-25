import React from 'react'
 const data=[
  {
id:"Consideration Factors",
title:"Budget:",
desc:"Establishing a clear budget is crucial. We will work with you to develop a budget that aligns with your vision and financial goals."
},
{
  title:"Design and Layout:",
  desc:"Our team can help you create a layout that maximizes functionality while reflecting your style."
  },
  {
    title:"Building Codes and Permits:",
    desc:"Basement renovations often require compliance with local building codes and the acquisition of permits."
    },
    {
      title:"Moisture and waterproofing:",
      desc:"Consider the need for waterproofing solutions to prevent future problems. We can assess your space and recommend."
      },
      {
        title:"Moisture and waterproofing:",
        desc:"Consider the need for waterproofing solutions to prevent future problems. We can assess your space and recommend."
        },
        {
          title:"Moisture and waterproofing:",
          desc:"Consider the need for waterproofing solutions to prevent future problems. We can assess your space and recommend."
          },
          {
            title:"Moisture and waterproofing:",
            desc:"Consider the need for waterproofing solutions to prevent future problems. We can assess your space and recommend."
            },
];
const data2=[
  {
id:"Limitation Factors",
title:"Structural Limitations:",
desc:"The existing structure may limit certain design options."
},
{
  title:"Existing Plumbing and Electrical Systems:",
  desc:"The layout of existing plumbing and electrical systems may impact the design and functionality of your renovation."
  },
  {
    title:"Budget Constraints:",
    desc:"Budget constraints may limit some design elements. We can help you prioritize your must-haves and find cost-effective"
    },
    {
      title:"Timeframe:",
      desc:"Renovation projects can take time, and delays may occur due to unforeseen circumstances."
      },
      {
        title:"Moisture and waterproofing:",
        desc:"Assessing the environmental conditions will help us recommend the best solutions for your space"
        },
        {
          title:"Moisture and waterproofing:",
          desc:"Consider the need for waterproofing solutions to prevent future problems. We can assess your space and recommend."
          },
];
const Consideration = () => {
  return (
    <div data-aos="zoom-in" className=' mt-9'>
       <span className='flex gap-3 justify-center'><img  src="/assets/headingIcon.webp" alt="" /><p>Consideration & Limitation</p></span>
      <h1 className='font-bold text-3xl text-center'>Consideration and Limitation Factors for Your Project
      </h1>
      <h3 className='text-1xl text-center'>When planning a basement renovation project with Prime Basement Renovations, consider various factors and limitations to ensure a successful outcome. Understanding these elements can help you make informed decisions and set realistic expectations for your project. By considering these factors and understanding the limitations associated with your basement renovation project, you can better prepare for a successful transformation. At Prime Basement Renovations, we're here to guide you through every step of the process, ensuring your vision becomes a reality while navigating any challenges. Contact us today to discuss your project and start planning your dream basement!</h3>
      <div className='grid grid-cols-1 md:grid-cols-6 mt-9'>
        <div className='md:col-span-1'>
            <img className='h-full' src="/assets/consideration1.webp" alt="" />
        </div>
      
        <div className='mr-3 md:col-span-2 border-t-2 border-l-2 border-r-2'>
           {
            data.map((fien)=>{
              return <div key= {fien} className='border-b-2' >
                <h1 className='text-center'>{fien.id}</h1>
                <p>{fien.title}</p>
                <p>{fien.desc}</p>
              </div>
          })
           }
        </div>
        <div className='ml-3 md:col-span-2 border-2 '>
        {
            data2.map((fien)=>{
              return <div key= {fien} className='border-b-2' >
                <h1 className='text-center'>{fien.id}</h1>
                <p>{fien.title}</p>
                <p>{fien.desc}</p>
              </div>
          })
           }
        </div>
      
        <div className='md:col-span-1'>
        
            <img className='h-full' src="/assets/consideration2.webp" alt="" />
        </div>
      
      </div>
    </div>
  )
}

export default Consideration

