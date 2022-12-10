import React from 'react'

const NavLinks = () => {
  return (
     <ul className='navlink list-none m-0 p-0 h-full w-full flex  justify-center items-center' >
         <div className='border-b-2 border-white hover:border-cyan-700  mx-4'>
         <li className='mb-1 font-semibold font-serif ' >Home</li>
         </div>
         <div className='border-b-2 border-white hover:border-cyan-700  mx-4'>
         <li className='mb-1 font-semibold font-serif ' >AboutUs</li>
         </div>
         <div className='border-b-2 border-white hover:border-cyan-700 mx-4'>
         <li className='mb-1 font-semibold font-serif ' >Technology</li>
         </div>
         <div className='border-b-2 border-white hover:border-cyan-700 mx-4'>
         <li className='mb-1 font-semibold font-serif ' >Services</li>
         </div>
         <div className='border-b-2 border-white hover:border-cyan-700  mx-4'>
         <li className='mb-1 font-semibold font-serif ' >Portfolio</li>
         </div>
         <div className='border-b-2 border-white hover:border-cyan-700  mx-4'>
         <li className='mb-1 font-semibold font-serif ' >Career</li>
         </div>
        
        <button className='navlink__button mx-5 my-4 bg-cyan-800 p-2 rounded-2xl font-serif text-white  hover:text-slate-200  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>ContactUs</button>
     </ul>
  )
}

export default NavLinks
