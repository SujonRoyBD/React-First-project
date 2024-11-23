import React from 'react';

const Data = [
  {
    img: "../../../src/assets/img/google.webp",
    
    desc: "Join our satisfied customers.",
  },
  {
    img: "../../../src/assets/houzz.webp",
   
    desc: "TRead our 5-star reviews on Google Maps.",
  },
  {
    img: "../../../src/assets/blogto.webp",
  
    desc: "Easy excels at turning ordinary into outstanding.",
  },
  {
    img: "../../../src/assets/homestars.webp",
   
    desc: "Join our satisfied customers",
  },
  {
    img: "../../../src/assets/tpi.webp",
   
    desc: "Outstanding Achievement Award",
  },
  {
    img: "../../../src/assets/bark.webp",
   
    desc: "Getting a professional design service addition",
  },
];

const Card_1 = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="3000"  data-aos-delay="100" className="grid grid-cols-1 md:grid-cols-6 p-4 mt-3 gap-3">
     
      {Data.map((item, index) => (
        <div  key={index} className="border p-4 rounded shadow-lg ">
          <img src={item.img} alt={item.title} className=" flex justify-center  h-10   w-10 ml-7" />
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Card_1;
