import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 bg-[#3b4f56] flex gap-6 w-full lg:justify-end text-white p-5 font-bold lg:text-xl '>
       <Link href="/" className='hover:scale-110  hover:underline-offset-8 hover:underline hover:decoration-2 hover:decoration-white ease-in'
      >Home</Link>
       <Link href="/serverside" className='hover:scale-110  hover:underline-offset-8 hover:underline hover:decoration-2 hover:decoration-white ease-in'>Server side </Link>

       <Link href="/clientside" className='hover:scale-110  hover:underline-offset-8 hover:underline hover:decoration-2 hover:decoration-white ease-in'>Client side </Link>
    </div>
  )
}

export default Navbar