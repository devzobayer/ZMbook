import React from 'react'
import Images from '../../utilits/Images/Images'
import { Link } from 'react-router'

const Search = () => {
  return (
    <div className='search-card'>
        <div className=" py-2 border-b-1 border-slate-200 ">
          <div className="mx-3 flex items-center justify-between">
            <div className="back">
             <Link to="/"> <img className='w-10' src={Images.Back} alt="" /> </Link>
            </div>
            <div className="search w-100 ">
           <input className='input rounded-full bg-slate-100 border-none py-2' type="search" name="" id="" placeholder='Search'/>
            </div>
            </div>
        </div>

        <div className="history">

        </div>
    </div>
  )
}

export default Search