// import React, { useContext, useState , useEffect } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import assets from '../assets/assets';
// import { useLocation } from 'react-router-dom';

// const SearchBar = () => {

//     const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
//     const [visible, setVisible] = useState(false);
//     const location = useLocation();


//     useEffect(()=> {
//         if (location.pathname.includes('collections' )) {
//             setVisible(true);
//         }
//         else{
//             setVisible(false);
//         }
//     },[location]);


//   return showSearch && visible ? (
//     <div className='border-t border-b bg-gray-50 text-center'>

//         <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
//             <input value={search} onChange={ (e)=> setSearch(e.target.value) } className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
//             <img className='w-4' src={assets.search} alt="" />
//         </div>

//         <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer ' src={assets.cross} alt="" />

//     </div>
//   ) : null
// }

// export default SearchBar



import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import assets from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collections')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  if (!showSearch || !visible) return null;

  return (
    <div className='border-t border-b bg-gray-50 text-center'>

      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-sm'
          type="text"
          placeholder='Search'
        />
        <img
          className='w-4 h-4'
          src={assets.search}
          alt=""
          width={16}
          height={16}
          loading="eager"
        />
      </div>

      <img
        onClick={() => setShowSearch(false)}
        className='inline w-3 h-3 cursor-pointer'
        src={assets.cross}
        alt="Close search"
        width={12}
        height={12}
        loading="eager"
      />

    </div>
  );
};

export default SearchBar;