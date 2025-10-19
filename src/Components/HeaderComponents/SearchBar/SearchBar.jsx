import React from 'react'
import Images from '../../../utilits/Images/Images'

const SearchBar = () => {
  return (
    <div className="search-bar  ml-4 w-70  flex items-center  ">

          <input 
      type="text" 
      className={`rounded-full py-2 px-4 input border border-gray-300 bg-white text-sm`}
      placeholder='Search ZMbook'
    />


  </div>
  )
}

export default SearchBar