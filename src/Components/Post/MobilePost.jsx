import React from 'react'
import Profile from '../../utilits/ProfileCard'
import Images from '../../utilits/Images/Images'
import { Link } from 'react-router'

const MobilePost = () => {
  return (
    <div className='bg-slate-100 py-2 mt-1 mx-1 rounded-sm md:hidden'>
        <div className="flex items-center space-x-3 justify-between">
           <div className="profile">
            <Link to="/profile">
            <Profile/>
            </Link>
           </div>

           <div className="post-input-box w-full">
            <Link to="/composser">
            <input type="text"
            className='input w border-gray-300 bg-white rounded-full font-semibold'
              placeholder='Whats on your mind'/> </Link>
           </div>

           <div className="photo-upload">
            <input type="file"  id="fileInput"  className='hidden'/>
            <label htmlFor="fileInput" className='cursor-pointer'>
            <img className='max-w-10' src={Images.Photo} alt="" /> 
            </label>
           </div>

        </div>
    </div>
  )
}

export default MobilePost