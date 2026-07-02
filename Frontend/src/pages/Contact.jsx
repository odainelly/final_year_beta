import React from 'react'
import Title from "../components/Title"
import assets from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Content = () => {
  return (
    <div >

      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-[480px]' src={assets.BnL} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Klorsai Street <br /> Suite 350 , Accra , Ghana</p>
          <p className='text-gray-500'>Tel: (415) 555-0123 <br /> Email: admin@BnL.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at BnL</p>
          <p className='text-gray-500'>Learn more about our team and job openings.</p>
          <button className="border border-black hover:text-white hover:bg-black px-8 py-4 text-sm transition all duration-500 "> Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />
        
    </div>
  )
}

export default Content