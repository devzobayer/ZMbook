import React from 'react'
import Images from '../../../utilits/Images/Images'

const SearchBar = ({searchOpen,toggleSearch}) => {
  return (
    <div className="search-bar mt-2 ml-2  flex items-center  ">
    <img src={Images.Search} alt="" className={`max-w-6 block md:hidden ${searchOpen ? 'hidden' : 'block'}`}  onClick={toggleSearch} />
    <div className="search ml-6 md:ml-1">
       <input 
      type="text" 
      className={`rounded-4xl p-2 px-6 md:px-7 input border-gray-300 bg-white transition duration-2000 
        ${searchOpen ? 'block' : 'hidden '} md:block`} 
      placeholder='Search ZMbook'
    />

    </div>
    <img className={`w-5 ml-1 mb-6 ${searchOpen ? 'block' : 'hidden w-0' } md:hidden`} src={Images.Close} alt="" onClick={toggleSearch}/>
  </div>
  )
}

export default SearchBar