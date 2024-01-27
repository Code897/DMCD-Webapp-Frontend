import React from 'react'
const Footer = () => {
  return (
    <div className='bg-red-950 lg:py-2 py-0 relative bottom-0 w-full'>
      <div className='grid lg:grid-cols-3 grid-cols-2 grid-rows-1'>
        <div className='flex justify-center lg:col-span-2 col-span-1 font-mono'>
          <div className='bg-white font-extrabold text-red-950 px-1.5 my-5 mx-0.5'>D</div>
          <div className='bg-white font-bold text-red-950 px-1.5 my-5 mx-0.5'>M</div>
          <div className='bg-white font-bold text-red-950 px-1.5 my-5 mx-0.5'>C</div>
          <div className='bg-white font-bold text-red-950 px-1.5 my-5 mx-0.5'>D</div>
        </div>
        <div className='flex justify-center items-center col-span-1 text-white font-serif font-extralight'>DRIVEMYCARDRIVER</div>
        <div className='text-red-950 lg:block hidden' style={{ height: '1px' }} ></div>
      </div>
    </div>
  )
}

export default Footer