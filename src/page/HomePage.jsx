import React from 'react'
import { Link } from 'react-router'
import Images from '../utilits/Images/Images'
import Test from '../utilits/test'
import Profile from '../utilits/Profile'

const HomePage = () => {
  return (
    <div className=" px-3 md:px-6  m-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        
        {/* Left side (friends) */}
        <div className="utilits text-left hidden md:block">
          friends
        </div>

        {/* Center (post) */}
        <div className="post text-center ">
        
          <div className="w-full bg-slate-50 rounded-2xl mt-2 p-4 ">
            <div className="post-card flex">
              <Profile/>
              <input type="text" 
              className='w-full ml-4 input border-gray-300 bg-white rounded-full font-semibold'
              placeholder="What's on your mind, Muhammad?"
               />
            </div>
            <div className="border-b-1 border-gray-300 my-4"></div>
            <div className="m-auto">
            <div className="grid grid-cols-3 gap-2 ">
               <div className="activity flex items-center">
                 <img className='w-7' src={Images.Live} alt="" />
                 <h5 className='ml-1 font-semibold text-gray-500'>Live Video</h5>
               </div>
               <div className="activity flex items-center">
                 <img className='w-7' src={Images.Photo} alt="" />
                 <h5 className='ml-1 font-semibold text-gray-500'>Photo/Video</h5>
               </div>
               <div className="activity flex items-center">
                 <img className='w-7' src={Images.Happy} alt="" />
                 <h5 className='ml-1 font-semibold text-gray-500'>Fellings</h5>
               </div>
               
            </div>
            </div>
          </div>

        </div>

        {/* Right side (chat) */}
        <div className="jm chat text-right hidden md:block">
          chat
        </div>
      </div>
    </div>
  )
}

export default HomePage
