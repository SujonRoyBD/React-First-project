import React, { useEffect, useState } from 'react';


const DataFetch = () => {
    // const [data, setData] = useState(null);

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=> res.json())
    //     .then((data)=> setData(data))
    // },[])

    // console.log(data)
    // const[data, setData] =useState(null)
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/albums")
    //     .then((res)=> res.json())
    //     .then((data)=> setData(data))
    // },[]);
    // console.log(data)
    const [data ,setdata] = useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> res.json())
        .then((data)=> setdata(data))
        
    },[]);
    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {/* {
                data?.slice(1, 7)?.map((info)=>{
                    return <div key={info.id} className='p-10 rounded-md shadow-lg border '>
                        <h2>{info.name}</h2>
                        <h2>{info.username}</h2>
                        <h2>{info.email}</h2>
                        <h2>{info.address.street}</h2>
                        <p>{info.website}</p>
                        <p>{info.phone}</p>
                    </div>
                })
            } */}
{/* 
            {
                data?.slice(1, 12)?.map((album) => {
                    const specialDesign = album?.id === 11 || album?.id === 12;
                  return <div key = {album.id} className={` p-10 rounded-md shadow-lg border ${specialDesign ? "w-full ml-56 " : ""}`}>
                    <h3>{album.userId}</h3>
                    <h3>{album.title}</h3>
                  </div>
              })
            }
           */}
           {
            data?.slice(1, 9)?.map((info) =>{
                return <div key={info.userId}>
                    <h1>{info.title}</h1>
                    <h3>{info.body}</h3>

                </div>
            })
           }
        </div>
    );
};

export default DataFetch;

