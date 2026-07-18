// import React, { useContext, useEffect, useState } from 'react'
// import { Link, NavLink, useLocation } from 'react-router-dom'
// import assets from '../assets/assets';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {

//     const [visible,setVisible] = useState(false);
//     const {setShowSearch, getCartCount,navigate} = useContext(ShopContext);



    

//   return (
//     <nav className='flex items-center justify-between py-5 font-medium mb-2'>
 
//        <Link to='/'> <img  className='w-7' src={assets.logoA} alt="" /> </Link>

//         <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
//             <NavLink to='/' className='flex flex-col items-center gap-1 '>
//                 <p>HOME</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
//             </NavLink>

//             <NavLink to='/collections' className='flex flex-col items-center gap-1 '>
//                 <p>COLLECTION</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
//             </NavLink>

//             <NavLink to='/about' className='flex flex-col items-center gap-1 '>
//                 <p>ABOUT</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
//             </NavLink>

//             <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
//                 <p>CONTACT</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
//             </NavLink>
//         </ul>

//         <div className='flex items-center gap-6 '> 
//             <img onClick={()=>setShowSearch(true)}  className='cursor-pointer w-5' src={assets.search} alt="" />
//             <div className='group relative'>
//                <Link to='/login'><img className='cursor-pointer w-5 ' src={assets.profile} alt="" /></Link>
//                 <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//                     <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
//                         <p className='cursor-pointer hover:text-black'>My Profile</p>
//                         <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                         <p className='cursor-pointer hover:text-black'>Logout</p>
//                     </div>
//                 </div>
//             </div>

//             <Link to='/cart' className='relative'>
//                 <img className='w-5 min-w-5 ' src={assets.cart} alt="" />
//                 <p className='absolute right-[-5px] bottom-[-5px] w-5 text-center leading-4 bg-black text-white aspect-square rounded-full text-[-8px] text-sm '>{getCartCount()}</p>
//             </Link>
//             <img onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu}  alt="" />
//         </div>

//             {/* sidebar menu for a smaller screen */}
//             <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//                 <div className='flex flex-col text-gray-600'>
//                     <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//                         {/* <img className='h-4 rotate-180' src="" alt="" /> */}
//                         <p>Back</p>
//                     </div>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collections'>COLLECTION</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//                 </div>
//             </div>

//     </nav>
//   )
// }

// export default Navbar


import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import assets from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate } = useContext(ShopContext);

  return (
    <nav className='flex items-center justify-between py-5 font-medium mb-2'>

      <Link to='/'>
        <img
          className='w-7 h-7'
          src={assets.logoA}
          alt="Logo"
          width={28}
          height={28}
          fetchPriority="high"
          loading="eager"
        />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1 '>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>

        <NavLink to='/collections' className='flex flex-col items-center gap-1 '>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1 '>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6 '>
        <img
          onClick={() => setShowSearch(true)}
          className='cursor-pointer w-5 h-5'
          src={assets.search}
          alt="Search"
          width={20}
          height={20}
          loading="eager"
        />

        <div className='group relative'>
          <Link to='/login'>
            <img
              className='cursor-pointer w-5 h-5'
              src={assets.profile}
              alt="Profile"
              width={20}
              height={20}
              loading="eager"
            />
          </Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img
            className='w-5 h-5 min-w-5'
            src={assets.cart}
            alt="Cart"
            width={20}
            height={20}
            loading="eager"
          />
          <p className='absolute right-[-5px] bottom-[-5px] w-5 h-5 text-center leading-5 bg-black text-white aspect-square rounded-full text-[8px] text-sm '>
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          className='w-5 h-5 cursor-pointer sm:hidden'
          src={assets.menu}
          alt="Menu"
          width={20}
          height={20}
          loading="eager"
        />
      </div>

      {/* sidebar menu for a smaller screen */}


      {/* Backdrop */}

            
      <div
        onClick={() => setVisible(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full text-gray-700">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <span className="text-sm font-medium text-gray-500">Menu</span>
            <button
              onClick={() => setVisible(false)}
              className="p-2 -mr-2 text-gray-500 hover:text-gray-800 active:scale-95 transition"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col mt-2">
            {[
              { to: '/', label: 'Home' },
              { to: '/collections', label: 'Collection' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <NavLink
                key={item.to}
                onClick={() => setVisible(false)}
                to={item.to}
                className={({ isActive }) =>
                  `px-5 py-3.5 text-base tracking-wide transition-colors ${
                    isActive
                      ? 'text-black font-semibold bg-gray-50 border-l-4 border-black'
                      : 'text-gray-600 border-l-4 border-transparent hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

    </nav>
  )
}

export default Navbar