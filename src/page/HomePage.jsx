import React from 'react'
import { Link } from 'react-router'
import Images from '../utilits/Images/Images'
import Profile from '../utilits/Profile'
import Post from '../Components/Post/Post'
import Story from '../Components/Story/Story'

const HomePage = () => {
  return (
    <div className="  m-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        
        {/* Left side (friends) */}
        <div className="utilits text-left hidden md:block">
          friends
        </div>

        {/* Center (post) */}
        <div className="post  px-2 md:px-6 text-center ">
         <Post/>

         <Story/>
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
