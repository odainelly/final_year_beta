import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        <div>
          <img src={assets.logoA} className='mb-5 w-22' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae doloremque minima eum voluptatum sint.</p>
        </div>
        <div>
          <p className='text-xl fot-medium mb-5 '>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+233-30-439-7430</li>
            <li>contact@shopInterms.com</li>
          </ul>
        </div>
        
      </div>
      <div >
          <hr />
          <p className='py-5 text-sm text-center'> Copyright 2025@shopInterms.com-All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer