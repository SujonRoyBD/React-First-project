import React from 'react'
const data =[
    {
        id:"uu",
        title:"dd",
        img:"ff",
        desc:"gg",
        img:"goop"

    }
]
const Reveiws = () => {   
  return (
    <div>
      <div className='text-center mt-7'>
    <span className=' flex justify-center gap-3'><img  src="../../../src/assets/headingIcon.webp" alt="" /><p>Reviews</p></span>
    <h1 className='font-bold text-3xl'>Reviews For Basement Renovation</h1>
    </div>
    <div>
        <div className='px-20'>
            <span className='flex gap-3'><img src="../../../src/assets/google.webp" alt="google" height={100} width={100} /><p  className='mt-5 font-bold text-2xl'>Rating</p></span>
            <div className='grid grid-cols-1 md:grid-cols-2  justify-between  '>
            <div className='flex'>
                <p>5.0</p>
                <img src="../../../src/assets/orange_five_star.webp" alt="star" height={10} width={90} />
                <h2>70 Reviews</h2>
            </div>
            <div>
                <button className='bg-blue-600 px-3 py-2 rounded-md'><a href="#">Write a reveiw</a></button>
            </div>
            </div>
        </div>
    </div>
    {
        data.map((id)=>{
            return <div key={data}>
                <h1>{data.id}</h1>
                <p>{data.title}</p>
                <img src={data.img} alt="" />
                <p>{data.desc}</p>
                <img src={data.img} alt="" />


                 </div>
        })
    }
    </div>
  )
}

export default Reveiws