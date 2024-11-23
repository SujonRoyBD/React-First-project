import React from 'react'

const data = [
    {
        id: "Do Plan and Design Thoroughly",
        desc: (
            <>
                Work with our expert contractors to create a detailed design and layout that meets your  <br /> needs and maximizes the potential of your space. Proper planning ensures an efficient and functional renovation.
            </>
        )
    },
    {
        id: "Do Set a Realistic Budget",
        desc: "Establish a clear budget from the start. Our team will help you be aware of all costs and potential adjustments along the way."
    },
    {
        id: "Do Ensure Proper Permits",
        desc: "Our contractors handle the paperwork to ensure compliance with local building codes"
    },
];
const data2 = [

    {
        id: "Do Communicate Regularly",
        desc: "Keep in touch with your contractor throughout the renovation. Open communication helps avoid misunderstandings and ensures that the project stays on track"
    },
    {
        id: "Do Consider Insulation and Ventilation",
        desc: "Proper insulation and ventilation are essential for comfort and energy efficiency in your finished basement. Our team can advise on the best solutions for your space."
    },

]
const RenovantionDonts = () => {
    return (
        <div  data-aos="zoom-in" className='text-center'>
          
            <div className='flex justify-center'>
                <p className='text-2xl font-bold text-center mt-4 bg-black w-[900px] text-white  rounded-full flex justify-center py-2 pr-6'>Our Basement Renovation Contractors Don'ts</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 border-l shadow-lg gap-7  mt-9 px-20'>

                {
                    data.map((data) => {
                        return <div key={data} className='border-2 shadow'>
                            <p className='font-bold text-lg'>{data.id}</p>
                            <p className="text-lg">{data.desc}</p>
                        </div>
                    })
                }
            </div>
          <div className='' >
          <div className='w-full flex justify-center gap-7 mt-9 '>
            {
                        data2.map((data) => {
                            return <div key={data} className='w-full md:w-1/3 border-2 shadow'>
                                <p className='font-bold text-lg'>{data.id}</p>
                                <p className="text-lg">{data.desc}</p>
                            </div>
                        })
                    }
            </div>
          </div>
        </div>
    )
}

export default RenovantionDonts
