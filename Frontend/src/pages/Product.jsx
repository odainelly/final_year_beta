// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';
// import assets from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => { 
  
//   const {productId} = useParams();
//   const {products,currency,addToCart} = useContext(ShopContext);
//   const [productData,setProductData] = useState(false);
//   const [image,setImage] = useState('');
//   const [size, setSize] = useState('');


//   const fetchProductData = async () => {
//     products.map((item)=>{
//       if (item._id === productId) {
//         setProductData(item)
//         setImage(item.image[0])
//         // console.log(item);    
//         return null;
//       }
//     })
//   }

//   useEffect(() => {
//   fetchProductData();

//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }, [productId, products]);

//   return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
//       {/*-------------------- Product data ----------------- */}
//       <div className='flex gap-12 sm:gap-12 flex-cols sm:flex-row'>

//         {/*----------------------- Product Images ------------------------- */}

//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
//             {
//               productData.image.map((item,index )=>(
//                 <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer ' alt="" />
//               ))
//             }
//           </div>

//           <div className="w-full sm:w-[80%]">
//             <img className='w-full h-auto' src={image} alt="" />
//           </div>

//         </div>

//         {/*--------------------------------- product info ---------------------------------- */}
//         <div className="flex-1">
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-1 mt-2'>
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_dull_icon} alt="" className="w-3 5" />
//             <p className='pl-2'>(122)</p>
//           </div>
//           <p className='mt-5 text-3xl font-medium' >{currency}{productData.price}</p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className="flex flex-col gap-4 my-8">
//               <p>Select size</p>
//               <div className="flex gap-2">
//                 {productData.sizes.map((item,index)=>(
//                   <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
//                 ))}
//               </div>
//           </div>
//           <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
//           <hr className="mt-8 sm:w-4/5" />
//           <div className="text-gray-500 text-sm mt-5 flex flex-col gap-1">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>

//       </div>

//       {/* -------------Description and review section ---------------------------- */}

//       <div className="mt-20">
//         <div className="flex">
//                 <b className="border px-5 py-3 text-sm">Description</b>
//                 <p className="border px-5 py-3 text-sm">Reviews (122)</p>
//         </div>
//         <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
//           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, perspiciatis ratione. Eaque aliquam qui exercitationem aperiam eos velit, quia aut ducimus, numquam explicabo quasi laboriosam soluta veritatis nesciunt ex facilis!</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in ullam placeat at deserunt minus natus rem culpa minima unde, delectus maiores necessitatibus? Tempora et nam consequuntur ipsa rerum repellat.</p>
//         </div>
//       </div>
        

//       {/* ---------------display related products---------------------- */}

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

//     </div>
//   ) : <div className="opacity-0"></div>
// }

// export default Product





import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import assets from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [productId, products]);

  // ---- Skeleton loader (reserves layout space to prevent CLS) ----
  if (!productData) {
    return (
      <div className='border-t-2 pt-10 flex gap-12 sm:gap-12 flex-cols sm:flex-row animate-pulse'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className='w-[24%] sm:w-full aspect-square bg-gray-200 rounded shrink-0' />
            ))}
          </div>
          <div className="w-full sm:w-[80%] aspect-square bg-gray-200 rounded" />
        </div>
        <div className="flex-1 space-y-4">
          <div className='h-8 bg-gray-200 rounded w-2/3' />
          <div className='h-4 bg-gray-200 rounded w-1/4' />
          <div className='h-10 bg-gray-200 rounded w-1/3' />
          <div className='h-24 bg-gray-200 rounded' />
          <div className='h-12 bg-gray-200 rounded w-40' />
        </div>
      </div>
    );
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/*-------------------- Product data ----------------- */}
      <div className='flex gap-12 sm:gap-12 flex-cols sm:flex-row'>

        {/*----------------------- Product Images ------------------------- */}

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  width={200}
                  height={200}
                  loading="lazy"
                  className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer aspect-square object-cover'
                  alt={`${productData.name} thumbnail ${index + 1}`}
                />
              ))
            }
          </div>

          <div className="w-full sm:w-[80%]">
            <img
              className='w-full h-auto aspect-square object-cover'
              src={image}
              alt={productData.name}
              width={800}
              height={800}
              fetchPriority="high"
              loading="eager"
            />
          </div>

        </div>

        {/*--------------------------------- product info ---------------------------------- */}
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" width={12} height={12} />
            <img src={assets.star_icon} alt="" className="w-3 5" width={12} height={12} />
            <img src={assets.star_icon} alt="" className="w-3 5" width={12} height={12} />
            <img src={assets.star_icon} alt="" className="w-3 5" width={12} height={12} />
            <img src={assets.star_icon} alt="" className="w-3 5" width={12} height={12} />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" width={12} height={12} />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium' >{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-gray-500 text-sm mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>

      </div>

      {/* -------------Description and review section ---------------------------- */}

      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, perspiciatis ratione. Eaque aliquam qui exercitationem aperiam eos velit, quia aut ducimus, numquam explicabo quasi laboriosam soluta veritatis nesciunt ex facilis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in ullam placeat at deserunt minus natus rem culpa minima unde, delectus maiores necessitatibus? Tempora et nam consequuntur ipsa rerum repellat.</p>
        </div>
      </div>


      {/* ---------------display related products---------------------- */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  )
}

export default Product