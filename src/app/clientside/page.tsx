"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import Image from 'next/image'
import { IoStarSharp } from 'react-icons/io5'
import { Button } from '@/components/ui/button'

interface Products{
  name: string
  title: string
  description:string
  price:number
  image:string
  rating:Rating
  category:string
}

interface Rating{
  rate:number
  count:number
}

const Page = () => {
  const[data , setdata]= useState<Products []>([])
  const[loading ,setloading] =useState(false)
useEffect (() => {
       setloading (true)
       setTimeout (() =>{
        setloading(false);
    
    }, 5000)
   
  const fetchapi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");  
      const data: Products[]= await response.json ();
    console.log(data)
     setdata(data)
  







  };
 fetchapi();

},[])
  return (
    <div>
          <Navbar/>
       { loading ? (  <div className='mt-10 lg:mx-[200px] items-center justify-center '>
        <h1 className='text-white font-bold text-center animate-bounce text-3xl'>Loading....</h1>
                </div>
       )
      :(     <div className='mt-10 lg:mx-[100px] mx-10 '>

       <h1 className="font-bold text-4xl text-center text-white ">Client side fetching</h1>  
       <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10'>
         {data.map((Products ,index)=> (
             <div key={index} className='flex flex-col rounded shadow-md md:p-4 sm:p-2 bg-white gap-3'>
               <div className= ' lg:w-full h-48 relative mb-5'>
               <Image
                 src={Products.image}
                 alt={Products.title}
                 layout="fill"
                 objectFit="contain"
                 className="rounded-lg"
                  />
               </div>
               <p className='first-letter:uppercase '>{Products.category}</p>
               <p className='font-bold md:text-xl mb-3 text-black '>{Products.title}</p>
                <p className='text-black text-opacity-50'>{Products.description}</p>
                <p className='font-bold text-xl'>${Products.price}</p>

               <div className='flex gap-3 text-lg text-yellow-600'>
             
                 <IoStarSharp className='h-5 w-5' />
                 <p > {Products.rating.rate}</p>
                 <p>( {Products.rating.count}  reviews )</p>
            
                </div>              
   
             <Button className='w-[50%]'>Add to cart</Button>

             </div>




         )

         )}


       </div>

        </div>   )}

    </div>
  ) 
}

export default Page