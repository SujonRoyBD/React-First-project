import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const gallery1 = [
    "/assets/newImages/cleaning_6a-1-1.png",
    "/assets/newImages/cleaning_6a-1-1.png",
    "/assets/newImages/cleaning_11-1.png",
    "/assets/newImages/cleaning_12-1.png",
    "/assets/newImages/cleaning_12.png",
    "/assets/newImages/cleaning_14-1.png",
    "/assets/newImages/cleaning_11-1.png",
]
const gallery2 = [
    "/assets/newImages/cleaning_14-1.png",
    "/assets/newImages/cleaning_11-1.png",
    "/assets/newImages/cleaning_11.png",
    "/assets/newImages/cleaning_6a-1.png",
    "/assets/newImages/cleaning_13 1.png",
    "/assets/newImages/cleaning_6a-1-1.png",
    "/assets/newImages/cleaning_11-1.png",
]


const Gleary = () => {
    return (
        <div className='mt-8'>
            <span className='flex gap-3  justify-center'><img src="/assets/headingIcon.webp" alt="" /><p>Gallery</p></span>
            <h1 className='font-bold text-3xl text-center'>Gallery Of Our Basement Renovation Contractors Toronto
            </h1>
            <div>
                <Swiper
                    // install Swiper modules
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                    spaceBetween={10}
                    slidesPerView={5}
                >
                    {
                        gallery1?.map((data, index)=>{
                            return <SwiperSlide key={index}>
                                <img src={data} alt='gallery image' width={300} height={200}/>
                            </SwiperSlide>
                        })
                    }
                    
                </Swiper>
            </div>
            <div>
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
                    slidesPerView={5}
                >
                    {
                        gallery2?.map((data, index)=>{
                            return <SwiperSlide key={index}>
                                <img src={data} alt='gallery image' width={300} height={200}/>
                            </SwiperSlide>
                        })
                    }
                    
                </Swiper>
            </div>
        </div>
    )
}

export default Gleary
