import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='  flex items-center justify-center  h-screen'>
      <div className='flex flex-col gap-6 text-center   bg-white rounded h-auto p-10'>
       <h1 className='font-bold text-xl '>Welcome to my Data fetching assignment </h1>  
        <p className='font-medium text-lg'>Choose the data fetching way</p>
       <div className='grid lg:grid-cols-2 gap-4'>
        <Button><Link href="/serverside">Server side fetching</Link></Button>
        <Button><Link href="/clientside">Client side fetching </Link></Button>
        </div>
        </div>

    </div>
  )
}

export default Page