import React from 'react'
import Navbar from '../component/navbar'
import { Button } from '@/components/ui/button'

interface Books {
  id:string
  name:string
 type:string
 available:boolean
}





const Page = async() => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const data: Books[]= await response.json ();
  console.log(data)

  return (
   <div>
    <Navbar/>
    <div className='mt-10 lg:mx-[100px] mx-10 '>
    <h1 className="font-bold text-4xl text-center text-white ">Server side fetching</h1>  
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-2'>
     {data.map((Books , index) =>(
      <div key={index}
      className='flex flex-col gap-4 bg-white rounded p-4 mt-10'>
               
       <h1 className='font-bold text-xl'>Name: {Books.name}</h1>
        <p className='font-semibold text-lg'>Id: <span className='text-opacity-50 text-lg font-normal'>{Books.id}</span></p>

        <p className='font-semibold'>Type: <span className='font-normal '>{Books.type}</span></p>
        <p className='font-bold'>Available: <span className='font-normal'> {Books.available ? "Yes" : "No"}</span></p>
         <Button>Order now</Button>

      </div>
       



     ))}  
</div>  


    </div>
    </div> 
  )
}

export default Page