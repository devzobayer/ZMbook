import React, { useState } from 'react'
import { Link } from 'react-router'
import Images from '../utilits/Images/Images'
import Profile from '../utilits/Profile'
import Post from '../Components/Post/Post'
import Story from '../Components/Story/Story'
import PostCard from '../Components/PostCard/PostCard'

const HomePage = () => {
  const[postOpen ,setPostOpen] = useState(false);

 const togglePost =()=>{
      setPostOpen(!postOpen)
 }
  return (
    <>
    <div className="  m-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        
        {/* Left side (friends) */}
        <div className="utilits text-left hidden md:block">
          friends
        </div>

        {/* Center (post) */}
        <div className="post  px-1 md:px-6 text-center ">
         <Post postOpen={postOpen} togglePost={togglePost}/>
          
         <Story/>
        </div>

        {/* Right side (chat) */}
        <div className="jm chat text-right hidden md:block">
          chat
        </div>
      </div>
    </div>
    <PostCard postOpen={postOpen} togglePost={togglePost} />
    </>
  )
}

export default HomePage
