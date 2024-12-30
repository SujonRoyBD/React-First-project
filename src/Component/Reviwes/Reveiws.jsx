import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const data = [
    {
        div: (
            <>
                <div className='flex gap-4'>
                    <div className='bg-green-500 rounded-full h-[50px]  w-[50px]  flex items-center justify-center'>
                        S
                    </div>
                    <div>
                        <p className='text-2xl'>Steven Norris</p>
                        <p>31 August 2024</p>
                    </div>
                </div>
            </>
        ),
        desc: "I can't say enough about Glitz Floors and More. From start to finish Zaid, our salesman, was great. He was informative, proactive, helpful, attentive, caring, and patient - Never pushy.",

        img: "/public/assets/google.webp"
    },
    {
        div: (
            <>
                <div className='flex gap-4'>
                    <div className='bg-green-500 rounded-full h-[50px]  w-[50px]  flex items-center justify-center'>
                        L
                    </div>
                    <div>
                        <p className='text-2xl'>Steven Norris</p>
                        <p>31 August 2024</p>
                    </div>
                </div>
            </>
        ),
        desc: "Karim and his team are absolutely phenomenal. They were the perfect crew to work with to modernize our 90s home. They put in new floors and completed painting throughout the house. Their professionalism is top-notch.",

        img: "/public/assets/google.webp"
    },
    {
        div: (
            <>
                <div className='flex gap-4'>
                    <div className='bg-green-500 rounded-full h-[50px]  w-[50px]  flex items-center justify-center'>
                        S
                    </div>
                    <div>
                        <p className='text-2xl'>Steven Norris</p>
                        <p>31 August 2024</p>
                    </div>
                </div>
            </>
        ),
        desc: "I can't say enough about Glitz Floors and More. From start to finish Zaid, our salesman, was great. He was informative, proactive, helpful, attentive, caring, and patient - Never pushy.",

        img: "/public/assets/google.webp"
    },
]
const Reveiws = () => {
    return (
        <div className='border-2 shadow-lg w-full md:w-[1200px] mx-auto mt-6'>
            <div className='flex flex-col md:flex-row justify-between  mt-8 p-20'>
                <div>
                    <span className='flex gap-3 '><img src="/public/assets/google.webp" alt="" /><p className='mt-6 text-2xl '>Rating</p>
                    </span>
                    <span className='flex gap-7'><p>5.0</p> 70 Reviews </span>
                </div>
                <div>
                    <button className='p-3 bg-red-500 rounded-md'>Write a review</button>
                </div>
            
            <Swiper
                    // install Swiper modules
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        reverseDirection : true,
                      }}
                      loop={true}
                    spaceBetween={10}
                    slidesPerView={3}
                >
            
                <div className='grid grid-cols-1 md:grid-cols-3 gap-9 px-4 md:px-20 border-2 shadow-lg w-[1000px]  justify-center items-center mx-auto '>{
                    
                    data.map((info)=> {
                    return <div key={info} >
                        <h1>{info.div}</h1>
                        <h1>{info.desc}</h1>
                        <img src={info.img} alt="google" height={10} width={100} />

                    </div>
                    
                })
                
            }
            </div>
            </Swiper>
            
                


          </div>  
        </div>
    )
}


export default Reveiws

// import React from 'react'

// const Reveiws = () => {
//   return (
//     <div>
//        <Swiper
//       spaceBetween={50}
//       slidesPerView={}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//     </div>
//   )
// }

// export default Reveiws
