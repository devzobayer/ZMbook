import React from 'react'
import { Link } from 'react-router'
import Images from '../utilits/Images/Images'
import Test from '../utilits/test'
import Profile from '../utilits/Profile'
import Post from '../Components/Post/Post'

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
         <Post/>
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
