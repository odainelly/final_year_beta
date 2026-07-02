import React from 'react'
import Title from '../components/Title'
import assets from '../assets/assets'
import CartTotal from '../components/CartTotal'
import { useState , useContext} from 'react'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const {navigate } = useContext(ShopContext);  

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t mt-6'>
{/* ------------------------------left side--------------------------------- */}
          <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
              <div className="text-xl sm:text-2xl my-3">
                <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
              </div>
              <div className="flex gap-3">
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black-500" type="text" placeholder="First Name" />
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black-500" type="text" placeholder="Last Name" />
              </div>
              <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black-500" type="email" placeholder="Email" />
              <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black-500" type="text" placeholder="Street" />
              <div className="flex gap-3">
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black-500" type="text" placeholder="City" />
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black-500" type="text" placeholder="State" />
              </div>
              <div className="flex gap-3">
                <input className="no-spinner border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black-500" type="number" placeholder="Zip Code" />
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black-500" type="text" placeholder="Country" />
              </div>
              <input type="number" className="no-spinner border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black-500" placeholder="Phone Number" />
          </div>  


{/* ------------------------------right side--------------------------------- */}
          <div className="mt-8">
            <div className="mt-8 min-w-80">
              <CartTotal />
            </div>
            <div className="mt-12">
              <Title text1={'PAYMENT'} text2={'METHOD'}/>
              {/* -------------------------payment method selection */}
              <div className="flex gap-3 flex-col lg:flex-row">
                <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                  <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
                </div>
                <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                  <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
                </div>
                <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                  <p className="text-sm text-gray-500 font-medium mx-4">CASH ON DELIVERY</p>
                </div>

              </div>
              <div className="w-full text-end mt-8 ">
                <button onClick={()=>navigate('/orders')} className="bg-black text-white py-2 px-14 text-sm hover:bg-gray-800">PLACE ORDER</button>
              </div>
            </div>
          </div>

    </div>
  )
}

export default PlaceOrder